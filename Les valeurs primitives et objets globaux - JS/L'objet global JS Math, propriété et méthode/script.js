/**
 * A la différence des autres objets globaux, l’objet natif Math n’est pas un constructeur. En conséquence, toutes les propriétés et méthodes de cet objet sont statiques et vont donc devoir être utilisées directement avec cet objet.
 * Comme vous pouvez vous en douter, l’objet Math va être utilisé lorsqu’on aura besoin d’effectuer des opérations mathématiques et notamment de trigonométrie (calculs de cosinus, sinus, tangentes, etc.).
 *
 * Je vous conseille ici de ne pas vous braquer à la vue de ces termes : la programmation informatique est basée sur des concepts mathématiques et, pour devenir un développeur accompli, il faut donc selon moi à minima ne pas être allergique aux mathématiques de base.
 *
 * L’objet Math possède une petite dizaine de propriétés et une grosse trentaine de méthodes dont certaines vont être très utiles dans de nombreuses situations.
 */

 /*
    Les propriétés de l'objet Math
 */

 /**
  * Les propriétés de l’objet Math stockent des constantes mathématiques utiles.
  * 
  * Math.E a pour valeur le nombre d’Euler (base des logarithmes naturels ou encore exponentiel de 1), soit environ 2,718 ;
  * Math.LN2 a pour valeur le logarithme naturel de 2, soit environ 0,693 ;
  * Math.LN10 a pour valeur le logarithme naturel de 10, soit environ 2,302 ;
  * Math.LOG2E a pour valeur le logarithme naturel de 2, soit environ 0,693;
  * Math.LOG10E a pour valeur le logarithme naturel de 10, soit environ 2,302 ;
  * Math.pi a pour valeur pi, soit environ 3,14159 ;
  * Math.SQRT1_2 a pour valeur la racine carrée de ½, soit environ 0,707 ;
  * Math.SQRT2 a pour valeur la racine carrée de 2, soit environ 1,414.
*/

// Exemple 1 

document.getElementById('p1').innerHTML =
    'Math.E : ' + Math.E
    + '<br>Math.LN2 : ' + Math.LN2
    + '<br>Math.LN10 : ' + Math.LN10 
    + '<br>Math.LOG2E : ' + Math.LOG2E
    + '<br>Math.LOG10E : ' + Math.LOG10E
    + '<br>Math.PI : ' + Math.PI
    + '<br>Math.SQRT1_2 : ' + Math.SQRT1_2
    + '<br>Math.SQRT2 : ' + Math.SQRT2;

/*
  Les méthodes de l'objet Math
  Possède des méthodes qui permettent d'arrondir des nbres, de générer des nombres aléatoires ou encore calculer le cos, sin, tan, log ou exp d'un nmbre
*/

/**
 * Les méthodes floor(), ceil(), round() et trunc()
 */