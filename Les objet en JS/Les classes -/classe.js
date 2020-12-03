/* 
    Introduction aux langages orientés objet basés sur les classes
*/

/**
 * 2 types de langages orientés objet : ceux basés sur les classes et ceux basés sur les prototypes
 * voir le cours avec exemple PHP
 */

/*
    Les classes en JS
*/ 
// création d'une classe et d'objets en JS 

class Ligne {
    //Nous n'avons pas besoin de préciser "function" devant notre constructeur et nos autres méthodes classe
    constructor(nom, longueur) {
        this.nom = nom;
        this.longueur = longueur;
    }
    taille() {
        document.getElementById('p1').innerHTML += 'Longueur de ' + this.nom + ' : ' + this.longueur + '<br>'
    };
}
// instancié nos classes
let geo1 = new Ligne('geo1', 10);
let geo2 = new Ligne('geo2', 5);

geo1.taille();
geo2.taille();

//Classes étendues en héritage en JS

class Ligne{
    /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
     *et nos autres méthodes classe*/
    constructor(nom, longueur){
        this.nom = nom;
        this.longueur = longueur;
    }
    
    taille(){document.getElementById('p1').innerHTML +=
        'Longueur de  ' + this.nom + ' : ' + this.longueur + '<br>'};
}

let geo1 = new Ligne('geo1', 10);
let geo2 = new Ligne('geo2', 5);
geo1.taille();
geo2.taille();

class Rectangle extends Ligne{
    constructor(nom, longueur, largeur){
        super(nom, longueur); //super : Appelle le constructeur parent dans le constructor() de notre classe fille afin que les propriétés soient correctement initialisées
        this.largeur = largeur;
    }
    
    aire(){document.getElementById('p2').innerHTML +=
    'Aire de ' + this.nom + ' : ' + this.longueur * this.largeur + '<br>'};
}

let geo3 = new Rectangle('geo3', 7, 5);
geo3.aire();
geo3.taille();