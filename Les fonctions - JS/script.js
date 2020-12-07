// let i = "hello world";
// alert(i);

/*
    Les fonctions
    https://www.pierre-giraud.com/javascript-apprendre-coder-cours/presentation-fonction/
/*
    Exemple 1(vidéo) - multiplication
*/

    function multiplication(x,y){
        alert(x*y);
    }

    multiplication(5,10);
    multiplication(-12,10);

/*
    Exemple 2(vidéo) - Return
*/

    function multiplication(x,y) {
        return x * y;
    }

    // multiplication(5,10);
    // multiplication(-12,10);

    var res1 = multiplication(5,10);
    var res2 = multiplication(-12,10);

    res1 += 2;
    alert(res1);

/*
    Exemple 3(cours en ligne)
*/

    let prez = "Bonjour, je suis Dylan";
    document.getElementById('p1').innerHTML = Math.random();

    let prez2 = prez.replace('Dylan', 'Test');
    document.getElementById('p2').innerHTML = prez2;


/*
    Exemple 4 - Les fonctions personnalisées
*/

    // /*
    //     On définit deux fonctions personnalisées.
    //     La fonction aleatoire() se sert de la fonction (méthode) random()
    //     La fonction multiplication multiplie deux nombres entre eux
    //     On utilise une instruction return pour que nos fonctions, une fois appelées, 
    //     retournent le résultat de leur calcul afin qu'on puisse utiliser ce résultat
    // */

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

/*
    Exemple 5 - La notion de portée des variables
*/

    // // déclaration de variable globale
    // let x = 5;
    // let y = 10;

    // // On définit une première fonction qui utilise les variables globales
    // function portee1() {
    //     document.getElementById('p1').innerHTML = 'Depuis portee1() : <br>x = ' + x + '<br>y = ' + y;
    // }

    // // On définit une deuxième fonction qui définit des varibales locales 
    // function portee2() {
    //     let a = 1;
    //     let b = 2;
    //     document.getElementById('p2').innerHTML = 'Depuis portee2() : <br> a = ' + a + '<br>b = ' + b;
    // }

    // // On définit une 3e fonction qui définit également des varibales locales 
    // function portee3() {
    //     let x = 20;
    //     let y = 40;

    //     document.getElementById('p3').innerHTML = 'Depuis portee3() : <br>x = ' + x + '<br>y = ' + y;
    // }

    // // Exécution de nos fonctions
    // portee1();
    // portee2();
    // portee3();

    // // Affichage des variables globales puis locales depuis l'espace gobal
    // document.getElementById('p4').innerHTML = 'Depuis l\'espace global : <br>x = ' + x + '<br>y = ' + y;

    // document.getElementById('p5').innerHTML = 'Depuis l\'esapce global : <br>a = ' + a + '<br>b = ' + b;

/*
    Exemple 6 - Les différences de portée entre les variables var et let en JS en
*/

    // function portee1() {
    //     let x = 1;
    //     var y = 2;
    //     if(true) {
    //         let x = 5; // variable différente 
    //         var y = 10; // Même variable qu'au dessus 
    //         document.getElementById('p1').innerHTML = 'x (dans if) = ' + x;
    //         document.getElementById('p2').innerHTML = ' y (dans if) = ' + y;
    //     }
    //     document.getElementById('p3').innerHTML = 'x (hors if) = ' + x;
    //     document.getElementById('p4').innerHTML = 'y (hors if) = ' + y;
    // }
    // portee1();

/*
    Exemple 7 - Les valeurs de retour des fonctions
*/

    // let prez = "Bonjour, je suis Dylan";

    // /*
    //     On récupère la valeur renvoyée par replace() qu'on place dans une variable 
    //     nommée let resultatReplace 
    // */
    // let resultatReplace = prez.replace('jour', 'soir');

    // // On peut ensuite utiliser notre variable pour différentes opérations 
    // document.getElementById('p1').innerHTML = resultatReplace + ' LUCHMUN';

    // /*
    //     La fonction div() accepte deux nombres en arguents et retourne le résultat de 
    //     la division de l'un par l'autre ou le message "Division par 0 impossible" si 
    //     le deuxième nombre est égal à 0
    // */
    // function div(a, b) {
    //     if(b == 0) {
    //         return 'Division par 0 impossible';
    //     } else {
    //         return a / b;
    //         alert('Ce message ne s\'affiche jamais !');
    //     }
    // }

    // /*
    //     La fonction prompt() ouvre une boite de dialogue qui permet à l'utilisateur 
    //     d'envoyer des données. Ici, on demande deux nombres à l'utilisateur et on les 
    //     places dans les variables nombre1 et nombre2. On les utilises ensuite comme 
    //     arguments de notre fonction div()
    // */  

    // let nombre1 = prompt('Entrez un premier nombre');
    // let nombre2 = prompt('Entrez un deuxième nombre');

    // /*
    //     On exécute notre fonction en lui passant les nombres envoyés en argument et on 
    //     affiche le résultat dans le paragraphe p id="p2"
    // */

    // let resultatDiv = div(nombre1, nombre2);
    // document.getElementById('p2').innerHTML = resultatDiv;

/*
    Exemple 8 - Fonctions anonymes, auto-invoquées et récursives en JS 
*/  

    // /*
    //     pour faire face à une fonction anonyme, nous avons trois cas : 
    //     - enfermer le code dans une varibale et utiliser la variable comme une 
    //     fonction

    //     - auto-invoquer notre fonction anonyme 

    //     - Utiliser un évènement pour déclencher l'exécution de notre fonction
    // */
    // let alerte = function(){
    //     alert('petit test');
    // }
    // alerte(); // () -> dite appelantes car elles servent à exécuter la fonction qui les
    //         //  précèdes

    /*
        Auto-invoquer 
    */

    // // function anonyme auto-invoquée
    // (function(){
    //     alert('test')
    // })();

    // // function nommée auto-invoquée
    // (function bonjour(){
    //     alert('bonjour')
    // })();

    /*
        Exécuter une fonction anonyme
    */

    // Représentent nos paragraphes p id="p1 et p2"
    //     let para1 = document.getElementById('p1');
    //     let para2 = document.getElementById('p2');

    //     /*
    //         On utilise la fonction addEventListener() qui sert de gestionnaire 
    //         d'événement. Ici on demande à exécuter la fonction anonyme passé en deuxième
    //         argument lors de l'événement "click" (clic) que l'élément p id="p1 ou p2"
    //     */

    //    para1.addEventListener('click', function(){alert('Clic sur p id=p1');});
    //    para2.addEventListener('click', function(){alert('Clic sur p id=p2');});

    /*
        Fonction récursive
    */

    function decompte(t) {
        if(t > 0) {
            document.getElementById('p1').innerHTML += t + '<br>';
            return decompte(t - 1);
        } else {
            return t;
        }
    };
    decompte(7);
