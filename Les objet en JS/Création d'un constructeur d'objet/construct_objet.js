/*
    Les usages de l'orienté objet et l'utilité d'un constructeur d'objets
*/

    // La programmation orientée objet est une façon de coder basée autour du concept d’objets. Un objet est un ensemble cohérent de propriétés et de méthodes.

    // Les grands enjeux et avantages de la programmation orientée objet sont de nous permettre d’obtenir des scripts mieux organisés, plus clairs, plus facilement maintenables et plus performants en groupant des ensembles de données 
    // et d’opérations qui ont un rapport entre elles au sein d’objets qu’on va pouvoir manipuler plutôt que de réécrire sans cesse les mêmes opérations.

    // On va généralement utiliser la programmation orientée objet dans le cadre de gros projets où on doit répéter de nombreuses fois des opérations similaires. 
    // Dans la majorité des cas, lorsqu’on utilise l’orienté objet, on voudra pouvoir créer de multiples objets semblables, à la chaine et de manière dynamique.

    // Imaginons par exemple que l’on souhaite créer un objet à chaque fois qu’un utilisateur enregistré se connecte sur notre site. 
    // Chaque objet « utilisateur » va posséder des propriétés (un pseudonyme, une date d’inscription, etc.) et des méthodes similaires (possibilité de mettre à jour ses informations, etc.).

    // Dans ces cas-là, plutôt que de créer les objets un à un de manière littérale, il serait pratique de créer une sorte de plan ou de schéma à partir duquel on pourrait créer des objets similaires à la chaine.

    // Nous allons pouvoir faire cela en JavaScript en utilisant ce qu’on appelle un constructeur d’objets qui n’est autre qu’une fonction constructeur.

/*
    La fonction construction d'objets : définition et création d'un construteur
*/

// Utilisateur() est une fonction constructeur
function Utilisateur(n, a, m) {
    this.nom = n;
    this.age = a;
    this.mail = m;

    this.bonjour = function(){
        alert('Bonjour je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
    }
}

/*
    Créer des objets à partir d'une fonction constructeur 
*/

// Utilisateur() est une fonction constructeur
function Utilisateur(n, a, m) {
    this.nom = n;
    this.age = a;
    this.mail = m;

    this.bonjour = function(){
        alert('Bonjour je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
    }
}

// On crée un objet "pierre" en utilisant notre constructeur
let pierre = new Utilisateur(['Pierre', 'Giraud'], 29, 'test@gmail.com');

// On peut ensuite utiliser les membres de l'objet créé et par exemple appeler la méthode bonjour()
pierre.bonjour();

// On accède aux valeurs des propriétés de l'objet crée qu'on affiche dans les paragraphes de notre fichier HTML
document.getElementById('p1').innerHTML = 'Nom complet : ' + pierre['nom'];
document.getElementById('p2').innerHTML = 'Prénom : ' + pierre['nom'][0];
document.getElementById('p3').innerHTML = 'Age : ' + pierre['age'];

// 2nd exemple

//Utilisateur() est une fonction constructeur
function Utilisateur(n, a, m){
    this.nom = n;
    this.age = a;
    this.mail = m;
    
    this.bonjour = function(){
        alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
    }
}

let pierre = new Utilisateur(['Pierre', 'Giraud'], 29, 'pierre.giraud@edhec.com');
let mathilde = new Utilisateur(['Math', 'Ml'], 27, 'math@edhec.com');
let florian = new Utilisateur(['Flo', 'Dchd'], 29, 'flo.dchd@gmail.com');

document.getElementById('p1').innerHTML = 'Prénom de Pierre : ' + pierre['nom'][0];
document.getElementById('p2').innerHTML = 'Age de Mathilde : ' + mathilde['age'];
document.getElementById('p3').innerHTML = 'Mail de Florian : ' + florian['mail'];

/*
    Constructeur et différenciation des objets
*/

//Utilisateur() est une fonction constructeur
function Utilisateur(n, a, m) {
    this.nom = n;
    this.age = a;
    this.mail = m;

    this.bonjour = function() {
        alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
    }
}

let pierre = new Utilisateur(['Pierre', 'Giraud'], 29, 'test@gmail.com');
let mathilde = new Utilisateur(['mathilde', 'Giraud'], 22, 'test2@gmail.com');
let florian = new Utilisateur(['Flo', 'DCHd'], 24, 'test3@gmail.com');

pierre.taille = 170;

document.getElementById('p1').innerHTML = 'Taille de Pierre : ' + pierre['taille'];
document.getElementById('p2').innerHTML = 'Taille de Mathilde : ' + mathilde['taille'];
document.getElementById('p3').innerHTML = 'Mail de Florian : ' + florian['mail'];