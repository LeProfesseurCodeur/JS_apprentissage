/**
 * L’objet Number gère les nombres. Le constructeur Number() possède une dizaine de propriétés et une dizaine de méthodes.
 * 
 * Lorsqu’on travaille avec les nombres en JavaScript nous préférerons, tout comme pour les chaînes de caractères, utiliser des valeurs primitives plutôt que de créer un nouvel objet avec le constructeur Number pour des raisons de performance.
 */

 /*
    Les propriétés de l'objet Number
 */

 /**
  * La plupart des propriétés de l’objet Number sont des propriétés dites statiques. Cela signifie qu’on ne va pouvoir les utiliser qu’avec l’objet Number en soi et non pas avec une instance de Number() (ni donc avec une valeur primitive).
  * 
  * Les propriétés à connaitre sont les suivantes :
  *     
  *     Les propriétés MIN_VALUE et MAX_VALUE représentent respectivement les plus petite valeur numérique positive et plus grand valeur numérique qu’il est possible de représenter en JavaScript ;
  * 
  *     Les propriétés MIN_SAFE_INTEGER et MAX_SAFE_INTEGER représentent respectivement le plus petit et le plus grand entiers représentables correctement ou de façon « sûre » en JavaScript. L’aspect « sûr » 
  *     ici faire référence à la capacité du JavaScript à représenter exactement ces entiers et à les comparer entre eux. Au-delà de ces limites, les entiers différents seront jugés égaux ;
  * 
  *     Les propriétés NEGATIVE_INFINITY et POSITIVE_INFINITY servent respectivement à représenter l’infini côté négatif et côté positif ;
  * 
  *     La propriété NaN représente une valeur qui n’est pas un nombre (« NaN » est l’abréviation de « Not a Number ») et est équivalente à la valeur NaN.
  */

// Exemple 1

    document.getElementById('p1').innerHTML = 'MIN_VALUE : ' + Number.MIN_VALUE
                                            + '<br>MAX_VALUE : ' + Number.MAX_VALUE 
                                            + '<br>MIN_SAFE_INTEGER : ' + Number.MIN_SAFE_INTEGER
                                            + '<br>MAX_SAFE_INTEGER : ' + Number.MAX_SAFE_INTEGER
                                            + '<br>NEGATIVE_INFINITY : ' + Number.NEGATIVE_INFINITY
                                            + '<br>POSITIVE_INFINITY : ' + Number.POSITIVE_INFINITY
                                            + '<br>NaN : ' + Number.NaN;

/*
    Les méthodes de l'objet Number
*/

/**
 * Le constructeur Number() dispose également d’une dizaine de méthodes. Tout comme pour les propriétés, la plupart des méthodes de Number vont devoir être utilisées avec l’objet Number en soi.
 */

 /**
  * La méthode isFinite()
  * 
  *  permet de déterminer si une valeur fournie est un nombre fini. On va lui passer en argument la valeur à tester.
  * 
  * Si l’argument passé est bien une valeur finie, isFinite() renverra le booléen true. Dans le cas contraire, cette méthode renverra la booléen false.
  */

// Exemple 2

    let nb1 = 10;
    let nb2 = Number.POSITIVE_INFINITY;

    if(Number.isFinite(nb1)){
        document.getElementById('p1').textContent = "Le nombre " + nb1 + "est fini";
    }

    if(Number.isFinite(nb2)) {
        document.getElementById('p2').textContent = "Le nombre " + nb2 + "est fini";
    }

/**
 * La méthode isInteger()
 * 
 * La méthode isInteger() permet de déterminer si une valeur est un entier valide.
 * 
 * Si la valeur testée est bien un entier, la méthode isInteger () renverra le booléen true. Dans le cas contraire, cette méthode renverra la booléen false.
 * 
 * Notez que si la valeur testée est NaN ou l’infini, la méthode renverra également false.
 */

 // Exemple 3

    let nb1 = 10;
    let nb2 = 10.5;

    if(Number.isInteger(nb1)) {
        document.getElementById('p1').textContent = 'Le nombre ' + nb1 + ' est entier'
    }

    if(Number.isInteger(nb2)) {
        document.getElementById('p2').textContent = 'Le nombre ' + nb2 + ' est entier'
    }

/**
 * La méthode isNaN() 
 * 
 * La méthode isNaN() permet de déterminer si la valeur passée en argument est la valeur NaN (valeur qui appartient au type Number).
 * 
 * On va lui passer en argument la valeur qui doit être comparée à NaN. Si la valeur passée est bien égale à NaN, notre méthode renverra le booléen true. Dans le cas contraire, le booléen false sera renvoyé.
 */

// Exemple 4

    let nb1 = 10;
    let nb2 = NaN;

    if(Number.isInteger(nb1)) {
        document.getElementById('p1').textContent = 'nb1 stock la valeur NaN';
    }

    if(Number.isInteger(nb2)) {
        document.getElementById('p2').textContent = 'nb2 stock la valeur Nan';
    }

/**
 * La méthode isSafeInteger()
 * 
 * La méthode isSafeInteger permet de déterminer si une valeur est un entier sûr (un entier que le JS peut représenter correctement)
 * 
 * Cette méthode prend la valeur à tester en argument et retourne le booléen true si la valeur est bien un entier sur ou false sinon 
 */

 // Exemple 5

    let nb1 = 10;
    let nb2 = 10000000000000000;

    if(Number.isSafeInteger(nb1)){
        document.getElementById('p1').textContent = 'nb1 stocke un entier sûr';
    }

    if(Number.isSafeInteger(nb2)){
        document.getElementById('p2').textContent = 'nb2 stocke un entier sûr';
    }

/**
 * La méthode parseFloat() 
 * 
 * Permet de convertir une chaine de caractère en un nombre décimal. Pour cela, on va lui passer la chaine à transformer en argument et la méthode renverra un nombre décimal en retour
 * 
 * L'analyse de la chaine s'arrête dès qu’un caractère qui n’est pas +,-, un chiffre, un point ou un exposant est rencontré. Ce caractère et tous les suivants vont alors être ignorés. 
 * Si le premier caractère de la chaîne ne peut pas être converti en un nombre, parseFloat() renverra la valeur NaN
 */

 // Exemple 6
    
    let nb1 = '29 Pierre';
    let nb2 = '29.5 Pierre 30'
    let nb3 = 'Pierre 29';
    
    document.getElementById('p1').textContent = Number.parseFloat(nb1);
    document.getElementById('p2').textContent = Number.parseFloat(nb2);
    document.getElementById('p3').textContent = Number.parseFloat(nb3);

/**
 * La méthode parseInt()
 * 
 * Permet de convertir une chaine de caractère en un entier selon une base et va renvoyer ce nombre en base 10. On va lui passer deux arguments : la chaine de caractères à convertir 
 * et la base utilisée pour la conversion.
 * 
 * Dans la vie de tous les jours, nous utilisons la base 10 : nous possédons dix unités de 0 à 9 et dès qu’on dépasse 9 une dizaine est formée. En informatique, il est courant de travailler en binaire, c’est-à-dire en base 2.
 * 
 * En binaire, nous n’avons que deux unités : le 0 et le 1. Pour représenter le « 2 » (base 10) en binaire, on écrit « 10 ». Le 3 est représenté en binaire par 11, le 4 par 100, le 5 par 101, le 6 par 110, le 7 par 111, le 8 par 1000 et etc.
 *
 * En programmation web, on utilise également aussi parfois des bases octales (base 8) qui utilisent 8 unités ainsi que des bases hexadécimales (base 16), notamment pour définir les couleurs en CSS.
 *
 * Une base hexadécimale utilise 16 unités. Pour représenter le « 10 » de notre base 10 en hexadécimale, on utilise le chiffre 0 suivi de la lettre A. Le 11 est représenté par 0B, le 12 par 0C, le 13 par 0D, le 14 par 0E et le 15 par 0F.
 */

// Exemple 7

    /*La base 16 utilise les chiffres de 0 à 9 et les lettres A, B, C, D, E et F
    *pour compter. "FFF" = 15 * 15 * 15 = 16 * 16 * 16 - 1 = 4095 en base 10
    *La base 2 n'utilise que les chiffres 0 et 1 pour compter*/
    document.getElementById('p1').textContent = Number.parseInt('0F', 16);
    document.getElementById('p2').textContent = Number.parseInt('FFF', 16);
    document.getElementById('p3').textContent = Number.parseInt('1000', 2);

    // Ici, dans notre premier exemple par exemple, parseInt() convertit le chaine « 0F » en utilisant une base 16 et renvoie le résultat en base 10 (l’équivalent de « 0F » en base 10 est 15).

/**
 * La méthode toFixed() 
 * 
 * Permet de formater un nombre en indiquant le nombre de décimales (nombre de chiffres après la vigule) qu'on souhaite conserver
 * 
 * On va indiquer en argument de cette méthode le nombre de décimales souhaitées et notre méthode va renvoyer une chaine de caractères qui représente le nombre avec le nombre de décimales souhaitées.
 * 
 * Dans le cas où on demande à toFixed() de renvoyer un nombre avec moins de décimales que le nombre de base, l’arrondi se fera à la décimale supérieure si la décimale suivant celle où le nombre doit être arrondi est 5 ou supérieure à 5.
 */

 // Exemple 8

    let nb1 = 1234.450;

    document.getElementById('p1').textContent = nb1.toFixed(0);
    document.getElementById('p2').textContent = nb1.toFixed(1);
    document.getElementById('p3').textContent = nb1.toFixed(2);

/**
 * La méthode toPrecision()
 * 
 * La méthode toPrecision() est relativement similaire à la méthode toFixed(). Cette méthode permet de représenter un nombre avec un nombre de chiffre données (avec une certaine « précision »).
 *
 * On va lui passer en argument le nombre de chiffres qu’on souhaite conserver et celle-ci va renvoyer une chaine de caractères représentant notre nombre avec le bon nombre de chiffres.
 * 
 * Les règles d’arrondi vont être les mêmes que pour la méthode toFixed().
 */

// Exemple 9 

    let nb1 = 1234.450;

    document.getElementById('p1').textContent = nb1.toPrecision(2);
    document.getElementById('p2').textContent = nb1.toPrecision(4);
    document.getElementById('p3').textContent = nb1.toPrecision(6);   

/**
 * La méthode toString()
 * 
 * permet de transformer un nombre en une chaine de caractère. On va pouvoir lui passer une base en argument pour formater notre nombre. Elle renverra une chaine de caractères représentant notre nombre.
 */

// Exemple 10 

    let nb1 = 255;

    document.getElementById('p1').textContent = nb1.toString(16);
    document.getElementById('p2').textContent = nb1.toString(2);
    document.getElementById('p3').textContent = typeof(nb1.toString(2));