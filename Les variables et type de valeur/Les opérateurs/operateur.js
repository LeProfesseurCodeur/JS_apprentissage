/*
    Les opérateurs
*/

/*
    Mémo : Il existe :
    - Les opérateurs arithmétiques
    - Les opérateurs d’affectation / d’assignation ;
    - Les opérateurs de comparaison ;
    - Les opérateurs d’incrémentation et décrémentation ;
    - Les opérateurs logiques ;
    - L’opérateur de concaténation ;
    - L’opérateur ternaire ;
    - l’opérateur virgule.
*/

/*
    Les opérateurs arithmétiques
*/

let x = 2;
let y = 3;
let z = 4;

let a = x + 1; // 2+1 = 3
let b = x + y; // 2+3 = 5
let c = x - y; // 2-3 = -1
let d = x * y; // 2*3 = 6
let e = x / y; // 2/3
let f = 5 % 3; // f stocke le reste de la division euclidienne de 5 par 3
let g = x ** 3; // g stocke 2^3 = 2*2*2 = 8;

// on affiche le résultat dans une boite d'alerte en utilisant l'opérateur de concaténation "+".
// On retourne à la ligne dans l'affichage avec "\n"

alert('a contient : ' + a +
      '\nb contient : ' + b +
      '\nc contient : ' + c +
      '\nd contient : ' + d +
      '\ne contient : ' + e +
      '\nf contient : ' + f +
      '\ng contient : ' + g);

/*
    Priorité des calculs et utilisation des parenthèses 
*/

let x = 1 - 2 - 3; //Calcule (1 - 2) - 3 = _& - 3 = - 4
let y = 1 - (2 - 3); //Calcule 1 - (2 - 3) = 1 - (- 1) = 1 + 1 = 2
let z = 2 ** 3 ** 2; //Calcule 3 ** 2 = 3 * 3 = 9 puis 2 ** 9 = 512

//On affiche les résultats dans une boite d'alerte en utilisant l'opérateur de concaténation "+". On retourne à la ligne dans l'affichage avec "\n" (code à décommenter pour qu'il s'exécute)
alert('x contient : ' + x +
      '\ny contient : ' + y +
      '\nz contient : ' + z);

/*
    Les opérateurs d'affectation
*/

let x = 2; //x stocke 2
let y = 10; //y stocke 10

//On ajoute 3 à la valeur stockée précédemment par x (2) puis on affecte le résultat à x. x stocke désormais 2 + 3 = 5
x += 3;

//On mutiplie la valeur de y (10) par celle de z (5) puis on affecte le résultat à y. y stocke désormais 10 * 5 = 50
y *= x; 

//Code commenté pour éviter l'apparition intempestive des boites d'alerte. A décommenter
alert('x stocke : ' + x + 'y stocke : ' + y);