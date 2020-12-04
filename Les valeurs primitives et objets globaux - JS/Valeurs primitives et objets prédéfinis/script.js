/*
    Retour sur les types de valeurs
*/

/**
 * Existe 7 type des valeurs différentes. Chaque valeur qu'on va pouvoir créer et manipuler en JS va obligatoirement appartenir à l'un de ces types. Ces types sont les suivants :
 *      - string "chaine de caractère"
 *      - number "nombre"
 *      - boolean 
 *      - null "vide"
 *      - undefined "indéfini"
 *      - symbol "symbole"
 *      - object 
 * 
 * Les 6 premiers valeurs sont appelées des valeurs primitives
 * les valeurs appartenant au type object sont des objets 
*/

/*
    Défintion des valeurs primitives et différence avec les objets
*/

/**
 * En JS deux grandes catégories de types de données : les valeurs primitives et les objets
 * 
 * On appelle valeur primitive en JS une valeur qui n'est pas un objet et qui ne peut pas être modifiée 
 * 
 * Une fois un nombre ou un string définis, on ne va plus pouvoir les modifier. Si on stocke une string dans une variable, on va tout a fait pouvoir écraser cette chaine pour stocker une autre valeur. 
 * Pour autant, la chaine de caractère stockée n'aura pas été modifiée : elle aura été écraser et c'est bien une nouvelle valeur complètement différente qui va être stcokée dans notre variable dans ce cas 
 * 
 * Cela va être différent pour les objets : on va tout a fait pouvoir modifier les membres d'un objet
 * 
 * Autre différence notable entre valeurs primitives et objets : les valeurs primitives sont passées et comparées par valeur tandis que les objets sont passés et comparés par référence.
 * 
 * Si deux valeurs primitives ont la même valeur, elle vont être considérées égaless. Si deux objets définissent les mêmes propriétés et méthodes avec les mêmes valeurs, ils ne vont pas être égaux. Pour que deux objets soient égaux, il faut que les deux fassent référence aux mêmes membres. 
 */

 // Exemple

    // deux valeurs primitives
    let ch1 = 'Une chaine de caractères';
    let ch2 = 'Une chaine de caractères';

    //true car les deux valeurs (et les types) sont égaux
    document.getElementById('p1').innerHTML = 'ch1 == ch2 ? : ' + (ch1 === ch2);

    // 3 objets 
    let ob1 = {prenom: 'Dylan'};
    let ob2 = {prenom: 'Dylan'};
    let ob3 = ob1;

    // false car les deux objets ne font pas références aux mêmes membres 
    document.getElementById('p2').innerHTML = 'ob1 === ob2 ? : ' + (ob1 === ob2);

    // true car les deux objets font références aux mêmes membres
    document.getElementById('p3').innerHTML = 'ob1 === ob3 ? : ' + (ob1 === ob3);

/**
 * A partir d'ici, il y a une chose à retenir : chaque type de valeur primitive, à l'execption de null et undefined, possède un équivalent objet prédéfini en JS 
 * 
 * Ainsi, le JS possède quatre objets natifs String, Number, Boolean et Symbol qui contiennet des propriétés et des méthodes
*/

// Exemple 2

    // On définit une valeur primitive
    let ch1 = 'Une chaine de caractères';

    //On appelle le constructeur String() pour créer un objet string
    let ch2 = new String('Une chaine de caractère');

    alert('Type de ch1 : ' + typeof(ch1) + '\nType de ch2 : ' + typeof(ch2)); // typeof -> renvoie une chaîne qui indique le type de son opérande; ch1 renvoie une string et ch2 renvoie un object
    // Variable ch1 contient une valeur primitive de type chaine de caractères (string)
    // Variable ch2 contient un objet String

/*
    Valeur primitive ou objet : que préférer ? 
*/

/**
 * Quel intérêt de pouvoir définir une chaine de caractère de deux façons et quelle syntaxe préférer ? 
 * 
 * Le constructeur String() possède de nombreuses méthodes et propriétés dont va hériter notre objet let ch2 et qu'on va donc pouvoir utiliser
*/

// Exemple 3

    // On définit une valeur primitive
    let ch1 = 'Une chaine de caractères';

    //On appelle le constructeur String() pour créer un objet string
    let ch2 = new String('Une chaine de caractères');

    // La propriété length compte la longeur de la chaine 
    document.getElementById('p1').innerHTML = ch2.length;

    // La methode toUpperCase() renvoie la chaine en majuscule sans modifier l'objet 
    document.getElementById('p2').innerHTML = ch2.toUpperCase();

    document.getElementById('p3').innerHTML = ch2;

/**
 * Utilisation de la propriété length et de la méthode toUpperCase() définis dans le constructeur String() sur notre objet de type string afin de connaitre la longueur de la chaine de caractères et de renvoyer cette chaine en majuscules.
 * 
 * Les valeurs primitives reste un choix judicieux car elles ont été mises en place par le JS justement pour nous éviter d'avoir à créer des objets 
 * 
 * Déclarer une valeur primitive offre de bien meilleurs résultats en termes de performances que de créer un nouvel objet et c'est la raison principale de l'existence de ces valeurs
 * 
 * On va pouvoir utiliser les méthodes et propriétés définies dans les constructeurs relatifs avec nos valeurs primitives pour avoir en quelques sortes le meilleur des deux mondes
 * 
 * Comment cela est-ce possible ? Pour comprendre cela, il faut savoir que lorsqu’on tente d’accéder à une propriété ou à une méthode depuis une valeur primitive, 
 * le JavaScript va convertir cette valeur en un objet relatif au type de la valeur primitive (un objet String pour une chaine de caractères, Number pour un nombre, etc.).
 * 
 * On va tout à fait pouvoir utiliser les propriétés et méthodes du constructeur avec nos valeurs primitives 
*/

// Exemple 4 

    // On définit une valeur primitive 
    let ch1 = 'Une chaine de caractères';

    // On appelle le constructeur String() pour créer un objet String
    let ch2 = new String('Une chaine de caractères');

    // La propriété length compte la longeur de la chaine
    document.getElementById('p1').innerHTML = ch1.length;

    // La méthode toUpperCase() renvoie la chaine en majuscule sans modifier l'objet
    document.getElementById('p2').innerHTML = ch2.toUpperCase();

    document.getElementById('p3').innerHTML = ch1;
    
     