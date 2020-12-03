/*
    4 façons de créer un objet :
        - créer un objet littéral;
        - utiliser les contructeurs Object();
        - utiliser une fonction constructeur personnalisée;
        - utiliser la méthode create()
*/

/*
    Création d'un objet littéral 
*/

/*"pierre" est une variable qui contient un objet. Par abus de langage,
 *on dira que notre variable EST un objet*/
let pierre = {
    //nom, age et mail sont des propriétés de l'objet "pierre"
    nom : ['Pierre', 'Giraud'],
    age : 29,
    mail : 'pierre.giraud@edhec.com',
    
    //Bonjour est une méthode de l'objet pierre
    bonjour: function(){
        alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
    }
};

/*
    Utiliser le point pour accéder aux membres d'un objet, les modifier ou en définir de nouveaux
*/

// le "." s'appelle généralement un accesseur

//"pierre" est une variable qui contient un objet. Par abus de langage, on dira que notre variable EST un objet
let pierre = {
    //nom, age et mail sont des propriétés de l'objet "pierre"
    nom : ['Pierre', 'Giraud'],
    age : 29,
    mail : 'pierre.giraud@edhec.com',
    
    //Bonjour est une méthode de l'objet pierre
    bonjour: function(){
        alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
    }
};

//On accède aux propriétés "nom" et "age" de "pierre" et on affiche leur valeur dans nos deux <p id="p1 et p2">
// A noter : "document" est un objet ; "getElementById()" une méthode ; innerHTML une propriété de l'API "DOM"
document.getElementById('p1').innerHTML = 'Nom : ' + pierre.nom;
document.getElementById('p2').innerHTML = 'Age : ' + pierre.age;

//On modifie la valeur de la propriété "age" de "pierre"
pierre.age = 30;
document.getElementById('p3').innerHTML = 'Nouvel âge : ' + pierre.age;

/*On accède à la méthode "bonjour" de l'objet "pierre" qu'on exécute de la même
 *même façon qu'une fonction anonyme stockée dans une variable*/

pierre.bonjour();

// Utilisation de notre accesseur

//"pierre" est une variable qui contient un objet. Par abus de langage, on dira que notre variable EST un objet
let pierre = {
    //nom, age et mail sont des propriétés de l'objet "pierre"
    nom : ['Pierre', 'Giraud'],
    age : 29,
    mail : 'pierre.giraud@edhec.com',
    
    //Bonjour est une méthode de l'objet pierre
    bonjour: function(){
        alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
    }
};

pierre.taille = 170;
pierre.prez = function(){
    alert('Bonjour, je suis ' + this.nom[0] +
          ', j\'ai ' + this.age + ' ans et je mesure ' + this.taille + 'cm');}

pierre.prez();

/*
    Utiliser les crochets pour accèder aux propriétés d'un objet, les modifier ou en définir de nouvelles 
*/

/*"pierre" est une variable qui contient un objet. Par abus de langage,
 *on dira que notre variable EST un objet*/
let pierre = {
    //nom, age et mail sont des propriétés de l'objet "pierre"
    nom : ['Pierre', 'Giraud'],
    age : 29,
    mail : 'pierre.giraud@edhec.com',
    
    //Bonjour est une méthode de l'objet pierre
    bonjour: function(){
        alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
    }
};

document.getElementById('p1').innerHTML = 'Nom complet : ' + pierre['nom'];
document.getElementById('p2').innerHTML = 'Prénom : ' + pierre['nom'][0];
pierre['age'] = 30;
document.getElementById('p3').innerHTML = 'Age : ' + pierre['age'];

/*
    L'utilisation du mot clef this 
*/

// Le mot clef this est un mot qui apparait fréquemment dans les les langages orientés objets. Dans le cas présent, il sert à faire référence à l'objet qui est couramment manipulé.
// C'est un prête nom qui va être remplacé par le nom de l'objet actuellement utilisé lorsqu'on souhaite accéder à des memebres de cet objet. 
// En l'occurrence, lorsqu'on écrit pierre.bonjour(), le mot clef this va être rempalcé par pierre. 
// Va devenir indispensable dès qu'on va créer des objets à la chaine de façon dynamique en utilisant par exemple un constructeur.