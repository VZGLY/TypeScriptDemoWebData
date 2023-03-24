// interface article
//     - EAN13
//     - nom
//     - prix
//     - categorie => enumeration
//     - quantité
var Article = /** @class */ (function () {
    function Article(ean, nom, prix, cat, quantite) {
        this.EAN13 = ean;
        if (typeof cat == "object") {
            this.categorie = cat;
        }
        else {
            this.categorie = [cat];
        }
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
    }
    Article.prototype.isSurgele = function () {
        return this.categorie.includes(categories.surgele);
    };
    return Article;
}());
var categories;
(function (categories) {
    categories[categories["surgele"] = 0] = "surgele";
    categories[categories["fruit"] = 1] = "fruit";
    categories[categories["legumes"] = 2] = "legumes";
    categories[categories["confiserie"] = 3] = "confiserie";
    categories[categories["menage"] = 4] = "menage";
})(categories || (categories = {}));
// liste d'articles (pomme, entrecote, brosse a dent...)
var store = [
    new Article("123235346523", "Banane", 12, categories.fruit, 25),
    new Article("SDVBTHERGCEH", "Bonbons", 3, categories.confiserie, 12),
    new Article("RZCREGR542345", "Canard WC", 56, categories.menage, 2),
    new Article("45634", "Frites", 12, categories.surgele, 123),
    new Article("RZEHCRTH", "Cookies", 1.34, categories.confiserie, 0),
    new Article("4253245", "Pomme", 0.34, categories.fruit, 0),
    new Article("3251235SDFSV", "Framboise", 0.2, [categories.fruit, categories.surgele], 34)
];
// fonctions
//     - si surgelé => Dans la classe 'Article'
//     - retourne tableau de fruit
//     - retourne tableau des rupture de stock
function getFruits() {
    return store.filter(function (a) { return a.categorie.includes(categories.fruit); });
}
function getRupture() {
    return store.filter(function (a) { return a.quantite == 0; });
}
for (var _i = 0, store_1 = store; _i < store_1.length; _i++) {
    var a = store_1[_i];
    console.log("".concat(a.nom, " ").concat(a.isSurgele() ? "est" : "n'est pas", " un surgel\u00E9."));
}
for (var _a = 0, _b = getRupture(); _a < _b.length; _a++) {
    var a = _b[_a];
    console.log("".concat(a.nom, " est en rupture de stock"));
}
