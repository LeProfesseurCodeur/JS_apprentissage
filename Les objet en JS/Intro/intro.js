/*
    1ère définition de l'orienté objet et des objets en JS
*/

//Notre variable "utilisateur" est ici une variable-objet ou plus simplement un objet
let utilisateur = {
    //nom, age, mail sont des propriété de l'objet utilisateur
    //La valeur de la propriété "nom" est un tableau
    nom: ['Dylan', 'LUCHMUN'],
    age: 22,
    mail: 'dylan.luchmun@epitech.eu',

    //Bonjour est une méthode de l'objet utilisateur
    bonjour: function(){ // fonction anonyme se dit quand on attribue aucun paramètre à l'intérieur de notre fonction
        alert('Bonjour, je suis' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
    }
};
alert(typeof utilisateur); //typeof renvoie le type de valeur d'une variable. Ici c'est un objet 