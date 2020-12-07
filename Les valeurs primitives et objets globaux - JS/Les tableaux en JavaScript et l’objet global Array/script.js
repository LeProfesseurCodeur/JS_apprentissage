/*
    Présentation et création de tableau en javascript
*/

    /**
     * Les tableaux sont des éléments qui vont pouvoir contenir plusieurs valeurs. 
     * En JavaScript, comme les tableaux sont avant tout des objets, il peut paraitre évident qu’un tableau va pouvoir contenir 
     * plusieurs valeurs comme n’importe quel objet. 
     * 
     * Cependant, dans la plupart des langages, les tableaux ne sont pas des objets mais simplement des éléments de 
     * langages spéciaux qui peuvent tout de même contenir plusieurs valeurs.
     * 
     * Le principe des tableaux est relativement simple : un indice ou clef va être associé à chaque valeur du tableau. 
     * Pour récupérer une valeur dans le tableau, on va utiliser les indices qui sont chacun unique dans un tableau.
     * 
     * Les tableaux vont s’avérer très pratique lorsqu’on voudra stocker des listes de valeurs dans une variable et pour 
     * pouvoir ensuite accéder à certaines valeurs en particulier.
     * 
     * Notez que dans la majorité des langages de programmation, on distingue deux types de tableaux : 
     * les tableaux dont les clefs ou indices sont des chiffres et qu’on appelle tableaux numérotés et 
     * les tableaux dont les clefs ou indices sont des chaines de caractères définies par le développeur et qu’on appelle tableaux associatifs.
     * 
     * Le JavaScript ne gère qu’un type de tableau : les tableaux numérotés. 
     * Les clefs numériques associées à chaque valeur vont être générées automatiquement. 
     * La première valeur d’un tableau va posséder la clef 0, la deuxième valeur possèdera la clef 1, et etc.
     * 
     * On va pouvoir stocker n’importe quel type de valeur en valeurs d’un tableau.
     */

 /*
    Création d'un tableau en JavaScript
 */

    /**
     *  Les tableaux ne sont pas des valeurs primitives. Cependant, nous ne sommes pas obligés d’utiliser le constructeur Array() avec le mot clef new pour créer un tableau en JavaScript.
     * 
     * En effet, une syntaxe alternative et plus performante (et qu’on préfèrera donc toujours à la syntaxe new Array()) est disponible en JavaScript et nous permet des créer des tableaux qui vont 
     * tout de même pouvoir utiliser les propriétés et méthodes du constructeur Array().
     * 
     * Cette syntaxe utilise les crochets [...] comme ceci :
     */

    // Exemple 1

    let prenoms = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
    let age = [29, 28, 25, 30];
    let produit = ['Livre', 20, 'Ordinateur' 5, ['Magnets', 100]];

    /**
     * Ici,  on crée 4 tableaux différents : notre premier tableau des stocké dans une variable let prenoms. Par simplification, on parlera du « tableau prenoms ».
     * 
     * Notre premier tableau prenoms contient des chaines de caractères (type de valeur String). Notre deuxième tableau ages contient des chiffres. 
     * Notre troisième tableau produits contient des valeurs de type chaine de caractères et de type nombre et même un autre tableau.
     */

 /*
    Accéder à une valeur dans un tableau
 */

    /**
     * Lorsqu’on crée un tableau, un indice est automatiquement associé à chaque valeur du tableau. 
     * Chaque indice dans un tableau est toujours unique et permet d’identifier et d’accéder à la valeur qui lui est associée. Pour chaque tableau, l’indice 0 est automatiquement associé à la première valeur, l’indice 1 à la deuxième et etc.
     * 
     * Pour accéder à une valeur en particulier dans un tableau, il suffit de préciser le nom du tableau puis l’indice associé à la valeur à laquelle on souhaite accéder entre crochets.
     * 
     * Dans le cas où un tableau stocke un autre tableau, il faudra utiliser deux paires de crochets : la première paire va mentionner l’indice relatif à la valeur à laquelle on souhaite accéder dans notre tableau de base (c’est-à-dire l’indice lié au sous tableau en l’occurrence, 
     * tandis que la deuxième parie de crochets va nous permettre de préciser l’indice lié à la valeur à laquelle on souhaite accéder dans notre sous tableau.
     * 
     * Regardez plutôt l’exemple ci-dessous pour bien comprendre. On réutilise ici les tableaux crées précédemment.
     */

    // Exemple 2
    let prenoms = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
    let age = [29, 28, 25, 30];
    let produit = ['Livre', 20, 'Ordinateur' 5, ['Magnets', 100]];

    document.getElementById('p1').innerHTML = prenoms[0] + ' possède 1 ' + produits[2];
    document.getElementById('p2').innerHTML = prenoms[1] + ' a ' + ages[1] + ' ans';
    document.getElementById('p3').innerHTML = produits[4][1] + ' ' + produits[4][0];
  
/*
Utilisr une boucle for ... of pour parcourir toutes les valeurs d'un tableau
*/

    /**
     * Pour parcourir un tableau élément par élément, on va pouvoir utiliser une boucle spécialement créée dans ce but qui est la boucle for…of.
     */

    // Exemple 3
    let prenoms = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
    let age = [29, 28, 25, 30];
    let produit = ['Livre', 20, 'Ordinateur', 5, ['Magnets', 100]];

    for(let valeur of prenoms) {
        document.getElementById('p1').innerHTML += valeur + '<br>';
    }

   /**
    * Ici, on définit une variable let valeur (on peut lui donner le nom qu’on souhaite) qui va stocker les différentes valeurs de notre tableau une à une. La boucle for… of va en effet exécuter son code en boucle jusqu’à ce qu’elle arrive à la fin du tableau.
    * 
    * A chaque nouveau passage dans la boucle, on ajoute la valeur courante de let valeur dans notre paragraphe p id='p1'
    */

/*
    Tableaux associatifs en JS, objets littéraux et boucle for ... in la
*/

    /**
     * Dans nombre d’autres langages informatique (dont le PHP, par exemple), on peut créer des tableaux en choisissant d’attribuer une clef textuelle à chaque nouvelle valeur. 
     * On appelle ces tableaux des tableaux associatifs.
     * 
     * En JavaScript, ce type de tableau n’existe tout simplement pas. La chose qui va le plus se rapprocher d’un tableau associatif en JavaScript est finalement un objet littéral.
     * 
     * Par ailleurs, notez qu’on va pouvoir utiliser une boucle for… in pour parcourir les propriétés d’un objet littéral une à une. La boucle for…in est l’équivalent de la boucle for…of mais pour les objets.
     */

    // Exemple 4
    let prenoms = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
    let age = [29, 28, 25, 30];
    let produit = ['Livre', 20, 'Ordinateur', 5, ['Magnets', 100]];

    let pierre = {
        'prenom' : 'Pierre',
        'age' : 29,
        'sport' : 'trail',
        'cours' : ['HTML', 'CSS', 'JS']
    };

    for(let propriete in pierre) {
        document.getElementById('p1').innerHTML += pierre[propriete] + '<br>';
    }

    /**
     * On comment ici par initialiser une variable let propriete. A chaque nouveau passage dans la boucle, cette variable reçoit le nom d’une propriété de notre objet littéral let pierre. 
     * On accède à la valeur liée au nom de la propriété en question avec la syntaxe pierre[propriete] et on l’ajoute au texte de notre paragraphe p id='p1' pour l’afficher.
     */

/*
    Les propriétés et les méthodes du constructeur Array()
*/

    /**
     * Le constructeur Array() ne possède que deux propriétés : la propriété length qui retourne le nombre d’éléments d’un tableau et la propriété prototype qui est une propriété que possèdent tous les constructeurs en JavaScript.
     * Array() possède également une trentaine de méthodes et certaines d’entre elles vont être très puissantes et vont pouvoir nous être très utiles. Nous allons ici étudier celles qu’il faut connaitre.
     */

    /*
        Méthodes push() et pop()
    */

        /**
         * La méthode push() va nous permettre d’ajouter des éléments en fin de tableau et va retourner la nouvelle taille du tableau. Nous allons passer les éléments à ajouter en argument.
         * La méthode pop() va elle nous permettre de supprimer le dernier élément d’un tableau et va retourner l’élément supprimé.
         */

        // Exemple 5

        let prenoms = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
        let age = [29, 28, 25, 30];

        /*On ajoute 2 éléments à "prenoms" et on récupère la nouvelle taille du tableau
        *renvoyée par push() dans une variable "taille"*/
        let taille = prenoms. push('Florian', 'Camille');

        //On supprime le dernier élément de ages et on récupère l'élément supprimé dans del
        let del = ages.pop();


        document.getElementById('p1').innerHTML = taille + ' éléments dans prenoms';
        document.getElementById('p2').innerHTML = '"' + del + '" supprimé de ages';

    /*
        Méthodes unshift() et shift()
    */

        /**
         * La méthode unshift() va nous permettre d’ajouter des éléments en début de tableau et va retourner la nouvelle taille du tableau. Nous allons passer les éléments à ajouter en argument.
         * 
         * La méthode shift() va elle nous permettre de supprimer le premier élément d’un tableau et va retourner l’élément supprimé.
         * 
         * Ces deux méthodes sont donc les équivalentes des méthodes push() et pop() à la différence que les éléments vont être ajoutés ou supprimés en début de tableau et non pas en fin.
         */

        // Exemple 6

        let prenoms = ['Pierre', 'Mathilde'];
        let ages = [29, 27, 32];

        /*On ajoute 2 éléments au début de "prenoms" et on récupère la nouvelle taille
        *du tableau renvoyée par push() dans une variable "taille"*/
        let taille = prenoms.unshift('Florian', 'Camille');

        //On supprime le premier élément de ages et on récupère l'élément supprimé dans del
        let del = ages.shift();


        document.getElementById('p1').innerHTML = 'Tableau prenoms : ' + prenoms;
        document.getElementById('p2').innerHTML = taille + ' éléments dans prenoms';
        document.getElementById('p3').innerHTML = '"' + del + '" supprimé de ages';

    /*
        Méthode splice()
    */

        /**
         * Pour ajouter, supprimer ou remplacer des éléments dans un tableau, on peut également utiliser splice().
         * 
         * L’avantage de cette méthode est qu’elle nous permet d’ajouter, de supprimer ou de remplacer des éléments n’importe où dans un tableau.
         * 
         * La méthode splice() va pouvoir prendre trois arguments : une position de départ à partir d’où commencer le changement, le nombre d’éléments à remplacer et finalement les éléments à ajouter au tableau.
         * 
         * En précisant la position de départ 0, les changements seront effectués à partir du début du tableau. En précisant la position 1, ils se feront à partir du deuxième élément, etc. En précisant une position négative, les changements seront faits en comptant à partir de la fin : -1 pour commencer en partant du dernier élément, -2 pour commencer en partant de l’avant dernier élément, etc.
         * 
         * Si on précise 0 en nombre d’éléments à remplacer, alors aucun élément ne sera supprimé du tableau de base. Dans ce cas, il sera nécessaire de préciser des éléments à rajouter.
         * 
         * Enfin, si on ne précise pas d’éléments à rajouter au tableau, le nombre d’éléments à remplacer tel quel précisé en deuxième argument seront supprimés du tableau à partir de la position indiquée en premier argument.
         * 
         * Cette méthode va également retourner un tableau contenant les éléments supprimés.
         */

        // Exemple 7 

        let prenoms = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
        let ages = [29, 27, 28, 30];

        /*On insère 'Thomas' et 'Manon' dans le tableau prenoms, après le deuxième élément
        *(Mathilde) et sans supprimer d'éléments*/
        prenoms.splice(2, 0, 'Thomas', 'Manon');

        /*On supprime les deux éléments après le premier ( c'est à dire 27 et 28) et on
        *insère 35 après le premier élément (29)*/
        let del = ages.splice(1, 2, 35);

        document.getElementById('p1').innerHTML = prenoms;
        document.getElementById('p2').innerHTML = ages;
        document.getElementById('p3').innerHTML = '"' + del + '" supprimé de ages';

    /*
        La méthode join()
    */

        /**
         * La méthode join() retourne une chaine de caractères créée en concaténant les différentes valeurs d’un tableau. Le séparateur utilisé par défaut sera la virgule mais nous allons également pouvoir passer le séparateur de notre choix en argument de join().
        */

        // Exemple 8

        let prenoms = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
        let ages = [29, 27, 28, 30];

        /*On insère 'Thomas' et 'Manon' dans le tableau prenoms, après le deuxième élément
        *(Mathilde) et sans supprimer d'éléments*/
        prenoms.splice(2, 0, 'Thomas', 'Manon');

        /*On supprime les deux éléments après le premier ( c'est à dire 27 et 28) et on
        *insère 35 après le premier élément (29)*/
        let del = ages.splice(1, 2, 35);

        document.getElementById('p1').innerHTML = prenoms.join(' - ');
        document.getElementById('p2').innerHTML = ages.join(' / ');
        document.getElementById('p3').innerHTML = '"' + del + '" supprimé de ages';

    /*
        La méthode slice()
    */

        /**
         * La méthode slice() renvoie un tableau créé en découpant un tableau de départ.
         * Cette méthode va prendre en premier argument facultatif la position de départ où doit commencer la découpe de notre tableau de départ. 
         * Si la position passée est un nombre négatif, alors le début de la découpe sera calculé à partir de la fin du tableau de départ. Si aucune position de départ n’est passée, la découpe commencera depuis le début du tableau de départ.
         * 
         * On va également pouvoir lui passer en second argument facultatif la position où doit s’arrêter la découpe du tableau de départ. Si la position passée est un nombre négatif, alors la fin de la découpe sera calculé à partir de la fin du tableau de départ. 
         * Si aucune position de fin n’est passée, alors on récupèrera le tableau de départ jusqu’à la fin pour créer notre nouveau tableau.
         */

        // Exemple 9
        let prenoms = ['Pierre', 'Mathilde', 'Thomas', 'Manon', 'Florian', 'Camille'];
        let ages = [29, 27, 28, 30];

        let sliceprenoms = prenoms.slice(2, 4);
        let sliceages = ages.slice(2);

        document.getElementById('p1').innerHTML = sliceprenoms.join(' - ');
        document.getElementById('p2').innerHTML = sliceages.join(' / ');

    /*
        Méthode concat 
    */

        /**
         * La méthode concat() va nous permettre de fusionner différents tableaux entre eux pour en créer un nouveau qu’elle va renvoyer.
         * Cette méthode va prendre en arguments les tableaux que l’on souhaite concaténer à un premier de départ qu’on va pouvoir choisir arbitrairement.
         * Notez que l’on peut fusionner autant de tableaux que l’on veut entre eux. Les tableaux de départ ne sont pas modifiés.
         */
    
        // Exemple 100
        let prenoms = ['Pierre', 'Mathilde', 'Thomas', 'Manon', 'Florian', 'Camille'];
        let ages = [29, 27, 28, 30];
        let sports = ['Trail', 'Triathlon', 'Natation'];

        let tbglobal = prenoms.concat(ages, sports);

        document.getElementById('p1').innerHTML = tbglobal.join (' - ');

    /*
        La méthode includes()
    */

        /**
         * La méthode includes() permet de déterminer si un tableau contient une valeur qu’on va passer en argument. Si c’est le cas, includes() renvoie true. Dans le cas contraire, cette méthode renvoie false.
         * Cette méthode est sensible à la casse (une majuscule est considérée comme une entité différente d’une minuscule).
         */

        // Exemple 11
        let prenoms = ['Pierre', 'Mathilde', 'Thomas', 'Manon', 'Florian', 'Camille'];

        if(prenoms.includes('Mathilde')){
            document.getElementById('p1').innerHTML = 'Mathilde est dans le tableau';
        }

        if(prenoms.includes('mathilde')){
            document.getElementById('p2').innerHTML = 'mathilde est dans le tableau';
        }