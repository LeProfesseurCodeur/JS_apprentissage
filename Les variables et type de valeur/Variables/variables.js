/* 
    Qu'est qu'une variable ?

        Une variable est un conteneur servant à stocker des informations de manière temporaire, 
        comme une chaine de caractères (un texte) ou un nombre par exemple.

        Le propre d’une variable est de pouvoir varier, c’est-à-dire de pouvoir stocker différentes valeurs au fil du temps et c’est cette particularité qui 
        les rend si utiles.

        Notez bien déjà qu’une variable en soi et la valeur qu’elle va stocker sont deux éléments différents et qui ne sont pas égaux. 
        Encore une fois, une variable n’est qu’un conteneur. Vous pouvez imaginer une variable comme une boite dans laquelle on va pouvoir placer différentes 
        choses au cours du temps.

        Les variables sont l’une des constructions de base du JavaScript et vont être des éléments qu’on va énormément utiliser. 
        Nous allons illustrer leur utilité par la suite.
*/

/*
    Initialiser une variable
*/

// Déclaration et initialisation d'une variable en même temps

let prenom = "Dylan"; // = : différent du égal connus en mathématique, ici le = signifie qu'on affecte une valeur type string, number ... Il n'est pas égal à sa valeur

// Déclaration de la variable puis initialisation
let monAge;
monAge = 22;

/*
    Modifier la valeur stockée dans une variable
*/
//On modifie la valeur stockée dans prénom
prenom = 'LUCHMUN';

alert(prenom);
alert(monAge);

/*
    Différence entre let et var
    https://www.pierre-giraud.com/javascript-apprendre-coder-cours/presentation-variable/
*/

/*
    La remontée ou "hosting" des variables
*/

//Ceci fonctionne
prenom = "Dylan";
var prenom;

//Ceci ne fonctionne pas
prenom = "LUCHMUN";
let prenom;

/*
    La redéclaration des variables
*/

//Ceci fonctionne
prenom = "Dylan";
var prenom = "Test";

//Ceci ne fonctionne pas
let nom = "LUCHMUN";
let nom = "Test2";

// --------------------------------------------------------------------------------------------------------------------

