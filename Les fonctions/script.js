// let i = "hello world";
// alert(i);

/*
    Les fonctions
    https://www.pierre-giraud.com/javascript-apprendre-coder-cours/presentation-fonction/
/*
    Exemple 1(vidéo) - multiplication
*/

    // function multiplication(x,y){
    //     alert(x*y);
    // }

    // multiplication(5,10);
    // multiplication(-12,10);

/*
    Exemple 2(vidéo) - Return
*/

    // function multiplication(x,y) {
    //     return x * y;
    // }

    // // multiplication(5,10);
    // // multiplication(-12,10);

    // var res1 = multiplication(5,10);
    // var res2 = multiplication(-12,10);

    // res1 += 2;
    // alert(res1);

/*
    Exemple 3(cours en ligne)
*/

    // let prez = "Bonjour, je suis Dylan";
    // document.getElementById('p1').innerHTML = Math.random();

    // let prez2 = prez.replace('Dylan', 'Test');
    // document.getElementById('p2').innerHTML = prez2;


/*
    Exemple 4 - Les fonctions personnalisées
*/

    /*
        On définit deux fonctions personnalisées.
        La fonction aleatoire() se sert de la fonction (méthode) random()
        La fonction multiplication multiplie deux nombres entre eux
        On utilise une instruction return pour que nos fonctions, une fois appelées, 
        retournent le résultat de leur calcul afin qu'on puisse utiliser ce résultat
    */

    function aleatoire() {
        return Math.random() * 100
    }

    function multiplication(nombre1, nombre2) {
        return nombre1 + ' * ' + nombre2 + ' = ' + (nombre1 * nombre2);
    }

    /*
        On appelle, invoque ou exécute nos fonctions et on place les résultats retournés
        dans les paragraphes p id="p1 et p2" de notre fichier HTML
        On fournit ici 2 arg à mulitplication() pour que la fonction s'exécute normalement. 
        Ces arg vont prendre la place des paramètres
    */

    document.getElementById('p1').innerHTML = aleatoire();
    document.getElementById('p2').innerHTML = multiplication(5, 10);
