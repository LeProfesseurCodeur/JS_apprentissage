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
 * 
 * Les méthodes floor(), ceil(), round() et trunc() permettent toutes les quatres d'arrondir ou de tronquer un nombre décimal afin de le transformer en entier.
 * 
 * La méthode floor() va arrondir la valeur passée en argument à l’entier immédiatement inférieur (ou égal) à cette valeur.
 * 
 * La méthode ceil(), au contraire, va arrondir la valeur passée en argument à l’entier immédiatement supérieur (ou égal) à cette valeur.
 * 
 * La méthode round() va elle arrondi la valeur passée en argument à l’entier le plus proche. Ainsi, si la partie décimale de la valeur passée est supérieure à 0,5, 
 * la valeur sera arrondie à l’entier supérieur. Dans le cas contraire, la valeur sera arrondie à l’entier inférieur. Dans le cas où la partie décimale vaut exactement 0,5, la valeur sera arrondie à l’entier supérieur (dans la direction de l’infini positif).
 * 
 * Finalement, la méthode trunc() va tout simplement ignorer la partie décimale d’un nombre et ne retourner que sa partie entière.
 */

// Exemple 2

  let nb1 = 12.3456;
  let nb2 = 2.45;
  let nb3 = 2.54;

  document.getElementById('p1').innerHTML = 'Nombre : ' + nb1 +
      '<br>floor() : ' + Math.floor(nb1) + '<br>ceil() : ' + Math.ceil(nb1) +
      '<br>round() : ' + Math.round(nb1) + '<br>trunc() : ' + Math.trunc(nb1);

  document.getElementById('p2').innerHTML = 'Nombre : ' + nb2 +
      '<br>floor() : ' + Math.floor(nb2) + '<br>ceil() : ' + Math.ceil(nb2) +
      '<br>round() : ' + Math.round(nb2) + '<br>trunc() : ' + Math.trunc(nb2);

  document.getElementById('p3').innerHTML = 'Nombre : ' + nb3 +
      '<br>floor() : ' + Math.floor(nb3) + '<br>ceil() : ' + Math.ceil(nb3) +
      '<br>round() : ' + Math.round(nb3) + '<br>trunc() : ' + Math.trunc(nb3);

/**
 * La méthode random()
 * 
 * La méthode random() permet de générer un nombre décimal compris entre 0 (inclus) et 1 (exclu) de manière pseudo-aléatoire.
 * 
 * On va ensuite pouvoir multiplier son résultat par un autre nombre afin d’obtenir un nombre pseudo-aléatoire compris dans l’intervalle de notre choix.
 */

// Exemple 3

  //Renvoie un nombre décimal aléatoire entre 0 et 1 et l'affiche dans p id='p1'
  document.getElementById('p1').innerHTML = Math.random();

  /*Renvoie un nombre décimal aléatoire entre 0 et 1, multiplie ce nombre par
  *100 et l'affiche dans p id='p2'*/
  document.getElementById('p2').innerHTML = Math.random()*100;

  /*Renvoie un nombre décimal aléatoire entre 0 et 1, multiplie ce nombre par
  *100 puis l'arrondi à l'entier le plus proche avec Math.round() et l'affiche
  *dans p id='p3'*/
  document.getElementById('p3').innerHTML = Math.round(Math.random()*100);

/**
 * Les méthodes min() et max()
 * 
 * min() renvoie le plus petit nombre d'une série de nombres passés en arguments. 
 * max() au contraire, va renvoyer le plus grand nombre d'une série de nombres passés en arguments
 * 
 * Dans les deux cas, si l’une des valeurs fournies en argument n’est pas un nombre et ne peut pas être convertie en nombre, alors ces méthodes renverront la valeur NaN.
 */

// Exemple 4

  document.getElementById('p1').innerHTML = 'Min : ' + Math.min(50, 2.5, 5, 14);
  document.getElementById('p2').innerHTML = 'Min : ' + Math.min(2, 7.2, -12, -5);
  document.getElementById('p3').innerHTML = 'Max : ' + Math.max(2, 75, -156);

/**
 * La méthode abs() 
 * 
 * renvoie la valeur absolue d'un nombre, ie le nombre en question sans signe
 * 
 * Si la valeur fournie en argument n'est pas un nombre et ne peut pas être convertie en nombre, alors elle renverra NaN
 */

// Exemple 5 

  document.getElementById('p1').innerHTML = Math.abs(4);
  document.getElementById('p2').innerHTML = Math.abs(-4);
  // document.getElementById('p2').innerHTML = Math.abs(4*3);
  document.getElementById('p3').innerHTML = Math.abs('Pierre');

/**
 * Les méthodes cos(), sin(), tan(), acos(), asin(), et atan()
 * 
 * Retournent respectivement le cos, sin, tan, arccos, arcsin et arctan d'une valeur passée en argument
 * 
 * Les valeurs passées et retournées sont exprimées en radians. Pour convertir une valeur en radians en une valeur en degrés, il suffit de multiplier la valeur en radians par 180 et 
 * de diviser par pi (180° = pi radian, 360° = 2pi radian)
 */

// Exemple 6

  document.getElementById('p1').innerHTML = Math.cos(0);
  document.getElementById('p2').innerHTML = Math.cos(Math.PI/2);
  document.getElementById('p3').innerHTML = Math.cos(Math.PI);

/**
 * Les méthodes exp() et log()
 * 
 * Les méthodes exp() et log() renvoient respectivement l'exponentielle et le logarithme népérien (ou log naturel) d'une valeur passée en argument 
 */

// Exemple 7

  document.getElementById('p1').innerHTML = Math.exp(0);
  document.getElementById('p2').innerHTML = Math.exp(1);
  document.getElementById('p3').innerHTML = Math.log(1);

