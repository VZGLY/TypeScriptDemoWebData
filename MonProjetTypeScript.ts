// interface article
//     - EAN13
//     - nom
//     - prix
//     - categorie => enumeration
//     - quantité

interface IArticle{
    EAN13 : string,
    nom : string,
    prix : number
    categorie : categories[]
    quantite : number
}

class Article implements IArticle{
    EAN13: string
    nom: string
    prix: number
    categorie: categories[]
    quantite: number

    constructor(ean : string, nom: string, prix : number, cat : categories[] | categories, quantite : number){
        this.EAN13 = ean
        if(typeof cat == "object"){
            this.categorie = cat
        }
        else{
            this.categorie = [cat]
        }
        
        this.nom = nom
        this.prix = prix
        this.quantite = quantite
    }

    isSurgele() : boolean {
        return this.categorie.includes(categories.surgele)
    }

}
enum categories{
    surgele,
    fruit,
    legumes,
    confiserie,
    menage
}


// liste d'articles (pomme, entrecote, brosse a dent...)
let store : Article[] = [
    new Article("123235346523", "Banane", 12, categories.fruit, 25),
    new Article("SDVBTHERGCEH", "Bonbons", 3, categories.confiserie, 12),
    new Article("RZCREGR542345", "Canard WC", 56, categories.menage, 2),
    new Article("45634", "Frites", 12, categories.surgele, 123),
    new Article("RZEHCRTH", "Cookies", 1.34, categories.confiserie, 0),
    new Article("4253245", "Pomme", 0.34, categories.fruit, 0),
    new Article("3251235SDFSV", "Framboise", 0.2, [categories.fruit, categories.surgele], 34) 
]



// fonctions
//     - si surgelé => Dans la classe 'Article'
//     - retourne tableau de fruit
//     - retourne tableau des rupture de stock

function getFruits() : Article[]{
    return store.filter(a => a.categorie.includes(categories.fruit))
}

function getRupture() : Article[]{
    return store.filter(a => a.quantite == 0)
}

for (let a of store) {
    console.log(`${a.nom} ${a.isSurgele() ? "est" : "n'est pas"} un surgelé.`);
}

for (let a of getRupture()) {
    console.log(`${a.nom} est en rupture de stock`);
}








