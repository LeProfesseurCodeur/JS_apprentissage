/**
 * L'objet string gère les chaines de caractères. Le construteur string() possède deux propriétés et une trentaine de méthodes
 * 
 * Comme nous l’avons vu précédemment, nous n’utiliserons pas la fonction constructeur de cet objet pour créer de nouveaux objets de type string : 
 * on préfèrera en effet utiliser des valeurs primitives qui sont plus performantes et avec lesquelles on va également pouvoir utiliser les propriétés et méthodes définies dans le constructeur.
 */

 /*
    Les propriétés de l'objet String
 */

 /**
  * Le constructeur string ne possède que deux propriétés : une propriété length et prototype
  * 
  * La propriété length va nous permettre d'obtenir la longueur d'une chaine de caractères. 
  * 
  * La plupart des caractères comptent pour une unité ou un codet maus certains caractères spéciaux vont être représentés par deux codets. 
  * A faire attention, la propriété length ne renverra pas toujours une valeur égale au nombre de caractères présents dans la chaine. 
  */

// Exemple 

    let ch1 = 'Dylan'
    let ch2 = 'Dylan LUCHMUN' // l'espace est un caractère

    // La propriété length renvoie la longueur d'une chaine 
    document.getElementById('p1').innerHTML = 'ch1.length : ' + ch1.length;
    document.getElementById('p2').innerHTML = 'ch2.length : ' + ch2.length;

/*
    Les méthodes de l'objet String 
*/

/**
 * le constructeur String() despose d'une trentaine de méthodes. Nous allons étudier celles qui semblent les plus utiles
*/

/**
 * Methode includes() :
 * 
 * permet de déterminer si une chaine de caractères est inclue dans une autre. Cette méthode prend l'expression (la chaine) à rechercher en argument
 * 
 * Si la chaine passée en argument est trouvée dans la chaine dans laquelle on effectue la recherche, includes() renvoie le booléen true. Dans le cas contraire, la méthode renvoie false
 * 
 * WARNING : cette méthode est sensible à la casse, ce qui signifie qu'une lettre majuscule et une lettre minuscule correspondent à deux entités différentes pour includes()
*/

// Exemple 2

    let prez = 'Bonjour, je m\'appelle Dylan et j\'ai 22 ans';
    // let prez = 'Bonjour, je m\'appelle dylan et j\'ai 22 ans';


    // Si Dylan est trouvé dans la chaine stockée dans prez, includes() renvoie true et on exécute le code de la condition. Dans le cas contraire, includes() renvoie false et le code n'est pas exécuté 
    if (prez.includes('Dylan')){
        document.getElementById('p1').textContent = '"Dylan" présent dans let prez';
    }

    // Identique à ci-dessus à part qu'on recherche cette fois-ci "dylan" (minuscule)
    if (prez.includes('dylan')){
        document.getElementById('p2').textContent = '"dylan" présent dans let prez';
    }

/**
 * Ici, on utilise includes() à partir de notre variable let prez. Cette variable stocke en effet une valeur primitive de type chaine de caractères et, comme on l'a dit précédemment, 
 * on va pouvoir utiliser les propriétés et méthodes de String à partir de variables stockant des valeurs primitives de ce type
 * 
 * Dans le cas présent, on commence par tester la présence de la chaine de caractères "Dylan" dans la chaine stockée dans let prez. Si "Dylan" est trouvé dans la chaine, alors includes()
 * renvoie le booléen true. Dans notre exemple, la valeur de retour de includes() est utilisée comme test d'une condition if.
 * 
 * Le code de nos conditions if utilise des éléments qu'on a pas encore vu et qu'on étudiera dans la suite, il sert à placer une phrase dans un élément p à l'id défini.
*/

/**
 * La méthode startsWith() et endsWith()
 * 
 * La méthode startsWidth() permet de déterminer si une chaine commence par une certaine sous chaine (ou expression). Si c'est le cas, cette méthoode renvoie true. Dans le cas contraire, 
 * c'est le booléen false qui est renvoyé. 
 * 
 * La méthode endsWith() permet de déterminier si une chiane se termine par une certaine sous chaine. Elle va fonctionner exactement de la même manière que startsWith().
 */

 // Exemple 3

    let prez = 'Bonjour, je m\'appelle Dylan et j\'ai 22 ans';

    if (prez.startsWith('Bonjour')){
        document.getElementById('p1').textContent = 'La chaine commence par "Bonjour"';
    }

    if (prez.endsWith('22 ans')){
        document.getElementById('p2').textContent = 'La chaine se termine par "22 ans"';
    }

/**
 * La méthode substring() 
 * 
 * La méthode substring() retourne une sous-chaine de la chaine courante à partir d'un indice de départ.
 * 
 * Cette méthode demande un indice de départ en argument obligatoire qui va servir à indiquer la position de départ de la sous-chaine. On va également pouvoir passer un deuxième indice 
 * facultatif pour préciser une position de fin pour notre sous-chaine
 * 
 * A noter que dans le cas où on fournit une position de départ qui se situe après la position de fin, la méthode substring() intervertira automatiquement les deux valeurs
*/

// Exemple 4

    let prez = 'Bonjour, je m\'appelle Dylan et j\'ai 22 ans';

    document.getElementById('p1').textContent = prez.substring(9);
    document.getElementById('p2').textContent = prez.substring(9, 29);
    document.getElementById('p3').textContent = prez.substring(29, 9);

/**
 * Les méthodes indexOf() et lastIndexOf()
 * 
 * La méthode indexOf() permet de déterminer la position de la première occurrence d'un caractères ou d'une chaine de caractères dans une chaine de caractères de base.
 * 
 * Cette méthode va prendre l'expression à rechercher dans la chaine de caractères en argument et va renvoyer la position à laquelle cette expression a été trouvée la 1ère fois dans 
 * la chaine si elle est trouvée ou la valeur -1 si l'expression n'a pas été trouvée dans la chaine 
 * 
 * On va également pouvoir passer un deuxième argument optionnel à indexOf() qui correspond à l'endroit où on souhaite faire démarrer la recherche dans la chaine. Par défaut, la recherche se fait dans tout la chaine
 * 
 * WARNING : la méthode indexOf() est sensible à la casse, ce qui signifie qu'une lettre majuscule et une lettre minuscule correspondent à deux entités différentes pour elle
 * 
 * La méthode lastIndexOf() va fonctionner exactement de la même manière que sa soeur indexOf() à la différence près que c'est la position de la dernière occurrence de l'expression cherchée qui va être renvoyée (ou
 * -1 si l'expression n'est pas trouvée dans la chaine)
*/

// Exemple 5

    let prez = 'Bonjour, je m\'appelle Dylan et j\'ai 22 ans';

    document.getElementById('p1').textContent = prez.indexOf('e');
    document.getElementById('p2').textContent = prez.indexOf('Salut');
    document.getElementById('p3').textContent = prez.lastIndexOf('e');

/**
 * La méthode slice()
 * 
 * la méthode slice() extrait une section d'une chaine de caractères et la retourne comme une nvl chaine de caractères. La chaine de caractères de départ n'est pas modifiée
 * 
 * On doit fournir en argument de départ obligatoire la position de départ dans la chaine de caractères de départ où doit démarrer l'extraction. On peut également passer en deuxième argument optionnel la position où l'extraction doit s'arrêter. 
 * 
 * Cette méthode va donc fonctionner comme substring() à deux différences près : 
 *      
 *      En passant des valeurs négatives en argument à slice(), les positions de départ et de fin d'extraction seront calculées à partir de la fin de la chaine de caractères à partir de laquelle on extrait;
 *      En passant une position de départ plus lointaine que la position d'arrivée à slice(), cette méthode n'iverse pas les valeurs mais renvoie une chaine de caractères vide. 
 * 
 * Nous pouvons également noté que la méthode slice() ne modifie pas la chaine de caractères d'origine mais renvoie une nouvelle chaine. 
 */

    let prez = 'Bonjour, je m\'appelle Dylan et j\'ai 22 ans';

    document.getElementById('p1').textContent = prez.slice(0, 29);
    document.getElementById('p2').textContent = prez.slice(29, 9);
    document.getElementById('p3').textContent = prez.slice(-34, -14);

/**
 * La méthode replace
 * 
 * la méthode replace() nous permet de rechercher une expression dans une chaine de caractères et de la remplacer par une autre.
 * 
 * On va passer deux arguments à cette méthode : l'expression à rechercher, et l'expression de remplacement. 
 * 
 * La méthode replace() va renvoyer une nouvelle chaine de caractères avec les remplacements faits. La chaine de caractères de départ ne sera pas modifiée. 
 * 
 * Notez que dans le cas où on passe une expression de type chaine de caractères à rechercher, seule la première occurrence dans la chaine sera remplacée. 
 * Pour pouvoir rempalcer toutes les occurrences, il faudra passer une expression régulière comme schéma de recherche à cette méthode. 
 * Nous étudierons les expressions régulières dans une prochiane partie
 */

 // Exemple 6 

    let prez = 'Bonjour, je m\'appelle Dylan et j\'ai 22 ans';
    document.getElementById('p1').textContent = prez.replace('29', '30');
    document.getElementById('p2').textContent = prez.replace('e', 'E');

/**
 * Les méthodes toLowerCase() et toUpperCase()
 * 
 * la méthode toLowerCase() retourne une chaine de caractères en minuscules
 * 
 * A l'inverse, la méthode toUpperCase() retourne une chaine de caractère en majuscules.
 * 
 * Ces deux méthodes retournent une nouvelle chaine de caractères et ne modifient pas la chaine de caractère de base. 
 */

 // Exemple 7 
    let prez = 'Bonjour, je m\'appelle Dylan et j\'ai 22 ans';
    document.getElementById('p1').textContent = prez.toUpperCase();
    document.getElementById('p2').textContent = prez.toLowerCase();

/**
 * La méthode trim()
 * 
 * La méthode trim() supprime les espaces ou les blancs en début et en fin de chaine. Cette méthoe va s'avérer très pratique lorsqu'on voudra nettoyer des données pour ensuite effectuer des opérations dessus
 * 
 * Cette méthode renvoie une nouvelle chaine de caractère sans blacns ni au début ni à la fin. Elle ne modifie pas la chaine de caractères de départ.
 */

 // Exemple 8
    
 let prez = '   Bonjour, je m\'appelle Dylan et j\'ai 22 ans';
 document.getElementById('p1').textContent = prez.trim();
 document.getElementById('p2').textContent = prez;

 // Note : voir depuis la console les changement effectués

 /**
  * Autres méthodes de l'objet String
  *     match
  *     matchAll()
  *     search() 
  *     Ces trois méthodes sont intéressantes lorsqu'elles vont être utilisées avec des expressions régulières
  * 
  *     split() nécessite de connaître les tableaux
  */