/**
 * Dans cette nouvelle partie, nous allons définir ce qu’est une API et expliquer en détail comment fonctionnent certaines API et notamment celles intégrées dans les navigateurs qui vont nous permettre, entre autres, de manipuler le code HTML ou les styles d’une page.
*/

/*
    Définition et présentation des API JS
*/

/**
 *  Une API (Application Programming Interface ou Interface de Programmation Applicative en français) est une interface, c’est-à-dire un ensemble de codes grâce à laquelle un logiciel fournit des services à des clients.
 * 
 * Le principe et l’intérêt principal d’une API est de permettre à des personnes externes de pouvoir réaliser des opérations complexes et cachant justement cette complexité.
 * 
 * En effet, le développeur n’aura pas besoin de connaître les détails de la logique interne du logiciel tiers et n’y aura d’ailleurs pas accès directement puisqu’il devra justement passer par l’API qui va nous fournir en JavaScript un ensemble d’objets et donc de propriétés et de méthodes prêtes à l’emploi et nous permettant de réaliser des opérations complexes.
 * 
 * Une API peut être comparée à une commande de voiture (pédale d’accélération, essuie-glace, etc.) : lorsqu’on accélère ou qu’on utilise nos essuies glace, on ne va pas se préoccuper de comment la voiture fait pour effectivement avancer ou comment les essuies glace fonctionnent. On va simplement se contenter d’utiliser les commandes (l’API) qui vont cacher la complexité des opérations derrière et nous permettre de faire fonctionner la voiture (le logiciel tiers).
 * 
 * Les API JavaScript vont pouvoir être classées dans deux grandes catégories :
 * 
 *      - Les API intégrées aux navigateurs web et qu’on va donc pouvoir utiliser immédiatement pour du développement web comme l’API DOM (Document Object Model) qui va nous permettre de manipuler le HTML et le CSS d’une page, l’API Geolocation qui va nous permettre de définir des données de géolocalisation ou encore l’API Canvas qui permet de dessiner et de manipuler des graphiques dans une page ;
 *      - Les API externes, proposées par certains logiciels ou sites comme la suite d’API Google Map qui permettent d’intégrer et de manipuler des cartes dans nos pages web ou encore l’API Twitter qui permet d’afficher une liste de tweets sur un site par exemple ou bien l’API YouTube qui permet d’intégrer des vidéos sur un site.
 * 
 * Dans ce cours, nous allons nous concentrer sur les API générales et qui n’ont pas besoin de passer par des services tiers, c’est-à-dire sur les API intégrées aux navigateurs web qui sont rassemblées dans ce qu’on appelle le BOM (Browser Object Model).
 * 
 * Les API vont fonctionner en définissant un ou plusieurs objets qui vont nous fournir des propriétés et des méthodes nous permettant de réaliser des opérations complexes.
*/

/*
    Introduction au Browser Object Model (BOM) et à l'objet Window
*/

/**
 * La BOM est une sorte d "super API" elle-même composée de plusieur API dont certaines sont elles mêmes composées de plusieurs API etc
 * 
 * A la base du BOM, nous avons l'interface Window qui représente une fenêtre de navigateur contenant une page ou un document
 * 
 * L'objet Window implémente l'interface Window. Cet objet est supporté par tous les navigateurs et tous les objets globaux, variable globales et fonction globales appartiennet automatiquement à cet objet (ie sont des enfants de cet objet)
 * 
 * Dans un navigateur utilisant des onglets, comme Firefow, chaque onglet contient son propre objet Window
 * 
 * Cet objet window est un objet dit implicite : nous n'aurons généralement pas besoin de le mentionner de explicite pour utiliser les méthodes (ou fonction globales) et propriété (ou variables globales) lui appartenant
 * 
 * La BOM est composé de différentes interfaces qu'on va pouvoir utiliser via des objets. Dans la suite de cette partie, nous ne parlerons plus que d'"objets" par simplicité même si ce terme ne sera pas toujours strictement exact
 * 
 * Les objets suivant appartiennet au BOM et sont tous des enfants de Window :
 *  
 *      - l'objet Navigator qui rpz l'état et l'identitéé du navigateur et qu'on va utiliser avec l'API Geolocation;
 *      - L'objet History qui permet de manipuler l'historique de navigation du navigateur
 *      - L'objet Location qui fournit des informations relatives à l'URL de la page courante;
 *      - L'objet Screen qui nous permet d'examiner les propirétés de l'écran qui affiche la fenêtre courante
 *      - L'objet Document et le DOM dans son ensemble que nous étudierons en détail dans la suite
*/

/*
    Propriétés, méthodes et fonctionnement de l'objet Window
*/

/**
 * L’objet Window représente la fenêtre du navigateur actuellement ouverte. Pour les navigateurs qui supportent les onglets, chaque onglet va posséder son propre objet Window.
 * 
 * Certaines propriétés et méthodes de l’objet Window vont tout de même ne pouvoir s’appliquer qu’à la fenêtre globale et pas à l’onglet en particulier, et notamment celles liées à la taille de la fenêtre.
 */

 // Les propriétés de l'objet Window 

 /**
  * L’objet Window possède de nombreuses propriétés dont notamment des propriétés document, navigator, location qui retournent des références aux objets du même nom.
  * 
  * Pour le moment, nous allons simplement nous intéresser aux propriétés innerHeight, innerWidth, outerHeight et outerWidth.
  * 
  * Les propriétés outerHeight et outerWidth vont retourner la hauteur et la largeur de la fenêtre du navigateur en comptant les options du navigateur.
  * 
  * Les propriétés innerHeight et innerWidth vont retourner la hauteur et la largeur de la partie visible de la fenêtre de navigation (la partie dans laquelle le code est rendu).
  */

// Exemple 1
    // document.getElementById('p1').innerHTML = 'Taille de la fenêtre (ext) : ' + window.outerWidth + '*' + window.outerHeight;
    // document.getElementById('p2').innerHTML = 'Taille de la fenêtre (int) : ' + window.innerWidth + '*' + window.innerHeight;

/**
 * Ces propriétés vont donc nous permettre d'obtenir la taille de la fenêtre active ou du navigateur. On va ensuite pouvoir effectuer différentes actions en fonction de la taille récupérée.  
*/

// Les méthodes de Window 

/**
 * L'objet Window possède également de nombreuse méthodes. 
 * 
 * Dans ce cours, nous allons simplement nous intéresser aux méthodes les plus courantes permettant de manipuler la fenêtre et à celles permettant d'afficher des boites de dialogue
 * 
 * Ouvrir, fermer, redimensionner ou déplacer une fenêtre
 * 
 * La méthode open() nous permet d'ouvrir une ceraine ressource dans une fenêtre, un onglet ou au sein d'un élément iframe.
 * 
 * On va passer en argument de cette méthode une URL qui correspond à la ressource à charger.
 * 
 * On va également pouvoir lui passer une chaine permettant d’identifier la nouvelle fenêtre. Si le nom existe déjà, la ressource sera chargée au sein de la fenêtre, de l’onglet ou de l’iframe correspondant. Dans le cas contraire, une nouvelle fenêtre sera créée. Notez que pour ouvrir une nouvelle fenêtre à chaque appel de open(), on pourra renseigner la valeur _blank ici.
 * 
 * Enfin, on va encore pouvoir passer à open() une suite d’arguments précisant les fonctionnalités de la nouvelle fenêtre, notamment sa position (avec left et top), sa taille (avec width et height ou outerWidth et outerHeight), si elle peut être redimensionnée, etc.
 * 
 * La méthode open() va également renvoyer une référence pointant vers la fenêtre créée qu’on va pouvoir utiliser ensuite avec d’autres méthodes.
*/

// Exemple 2

    // let b1 = document.getElementById('b1'); //On accède au bouton #b1
    // let winSize = 'width=500, height=500';

    // /*Nous verrons addEventListener() plus tard dans ce cours. Ici, on l'utilise pour
    //  *exécuter openWindow() dès qu'un utilisateur clique sur #b1*/
    // b1.addEventListener('click', openWindow);

    // //On définit notre fonction openWindow()
    // function openWindow(){
    //     //On recupère l'information renvoyée par open() dans une variable "fenetre"
    //     fenetre = window.open('https://www.codepen.io', '', winSize);
    // }

/**
 * on utilise dans le code ci-dessus une notion qu'on n'a pas encore vu : la gestion des évènements avec addEventListener(). Nous étudierons cela plus tard. pour le moment, nous devons simplement avoir une vision générale de ce que fait ce code. 
 * 
 * Ici, on commence par récupérer une référence à notre élément HTML button id='b1' pour pouvoir le manipuler en JavaScript. Ensuite, on attache un gestionnaire d’évènement click à ce bouton. L’idée est la suivante : la fonction openWindow() sera exécutée dès qu’une personne clique sur button id='b1'. Finalement, on définit openWindow() qui contient notre méthode open().
 * On va passer à open() une URL qui devra être chargée dans la nouvelle fenêtre ainsi que la taille de la fenêtre. Ici, on ne donne pas de nom à notre fenêtre.
 * Une fois une nouvelle fenêtre créée, on va pouvoir la redimensionner en ajoutant ou en enlevant à sa taille actuelle un certain nombre de pixels grâce à la méthode resizeBy() ou en lui passant une nouvelle taille avec resizeTo().
 * Chacune de ces deux méthodes va prendre deux arguments : une largeur et une hauteur et elles devront être appliquées sur la référence renvoyée par open().
 */

// Exemple 3 
// let b1 = document.getElementById('b1');
// let b2 = document.getElementById('b2');
// let b3 = document.getElementById('b3');
// let b4 = document.getElementById('b4');
// let b5 = document.getElementById('b5');
// let b6 = document.getElementById('b6');
// let b7 = document.getElementById('b7');
// let b8 = document.getElementById('b8'); 
// let winSize = 'width=500, height=500';

// b1.addEventListener('click', openWindow);
// b2.addEventListener('click', resizeWindowBy);
// b3.addEventListener('click', resizeWindowTo);

// function openWindow(){
//     //On recupère l'information renvoyée par open() dans une variable "fenetre"
//     fenetre = window.open('', '', winSize);
// }
// function resizeWindowBy(){
//     fenetre.resizeBy(200, 100);
// }
// function resizeWindowTo(){
//     fenetre.resizeTo(960, 720);
// }

/**
 * Notez que ces méthodes ne fonctionneront pas dans certains navigateurs lorsque le code est exécuté en local (c’est-à-dire depuis un fichier hébergé sur notre ordinateur) et lorsqu’on tente de redimensionner une fenêtre contenant un vrai site.
 * En effet, la plupart des navigateurs dont Chrome bloquent ce genre de requêtes considérées comme Cross-origin pour des raisons de sécurité. Pour contourner cette limitation et voir le résultat de ces méthodes, il suffit de ne pas renseigner d’URL dans la méthode open().
 * 
 * Nous allons également pouvoir de la même façon déplacer la fenêtre sur un espace de travail avec les méthodes moveBy() qui va déplacer la fenêtre relativement à sa position de départ et moveTo() qui va la déplacer de manière absolue, par rapport à l’angle supérieur gauche de l’espace de travail.
 * 
 * Ces deux méthodes vont à nouveau prendre deux arguments qui correspondent au déplacement horizontal et vertical de la fenêtre.
 */

 // Exemple 4 
//  let b1 = document.getElementById('b1');
// let b2 = document.getElementById('b2');
// let b3 = document.getElementById('b3');
// let b4 = document.getElementById('b4');
// let b5 = document.getElementById('b5');
// let b6 = document.getElementById('b6');
// let b7 = document.getElementById('b7');
// let b8 = document.getElementById('b8'); 
// let winSize = 'width=500, height=500';

// b1.addEventListener('click', openWindow);
// b2.addEventListener('click', resizeWindowBy);
// b3.addEventListener('click', resizeWindowTo);
// b4.addEventListener('click', moveWindowBy);
// b5.addEventListener('click', moveWindowTo);

// function openWindow(){
//     //On recupère l'information renvoyée par open() dans une variable "fenetre"
//     fenetre = window.open('', '', winSize);
// }
// function resizeWindowBy(){
//     fenetre.resizeBy(200, 100);
// }
// function resizeWindowTo(){
//     fenetre.resizeTo(960, 720);
// }
// function moveWindowBy(){
//     fenetre.moveBy(100, 100);//Déplace la fenêtre 100px à droite et 100px en bas
// }
// function moveWindowTo(){
//     fenetre.moveTo(0, 0);//Place la fenêtre contre le bord supérieur gauche
// }

/**
 * De la même manière et pour les mêmes raisons que pour les méthodes précédentes, ces méthodes ne s’exécuteront pas dans certains navigateurs lors d’une exécution en local sur une fenêtre contenant un site.
 * On va encore pourvoir faire défiler le document dans la fenêtre ouverte de manière relative ou absolue en utilisant les méthodes scrollBy() et scrollTo() qui vont prendre en argument le défilement horizontal et vertical à appliquer au document dans la fenêtre.
 * Bien évidemment, pour que ces deux méthodes aient un effet, il faut que le document soit plus grand que la fenêtre qui le contient c’est-à-dire qu’il y ait une barre de défilement dans celui-ci.
 */

// Exemple 5
// let b1 = document.getElementById('b1');
// let b2 = document.getElementById('b2');
// let b3 = document.getElementById('b3');
// let b4 = document.getElementById('b4');
// let b5 = document.getElementById('b5');
// let b6 = document.getElementById('b6');
// let b7 = document.getElementById('b7');
// let b8 = document.getElementById('b8'); 
// let winSize = 'width=500, height=500';

// b1.addEventListener('click', openWindow);
// b2.addEventListener('click', resizeWindowBy);
// b3.addEventListener('click', resizeWindowTo);
// b4.addEventListener('click', moveWindowBy);
// b5.addEventListener('click', moveWindowTo);
// b6.addEventListener('click', scrollWindowBy);
// b7.addEventListener('click', scrollWindowTo);

// function openWindow(){
//     //On recupère l'information renvoyée par open() dans une variable "fenetre"
//     fenetre = window.open('', '', winSize);
// }
// function resizeWindowBy(){
//     fenetre.resizeBy(200, 100);
// }
// function resizeWindowTo(){
//     fenetre.resizeTo(960, 720);
// }
// function moveWindowBy(){
//     fenetre.moveBy(100, 100);//Déplace la fenêtre 100px à droite et 100px en bas
// }
// function moveWindowTo(){
//     fenetre.moveTo(0, 0);//Place la fenêtre contre le bord supérieur gauche
// }
// function scrollWindowBy(){
//     fenetre.scrollBy(0, 200);//Défile de 200px vers le bas
// }
// function scrollWindowTo(){
//     fenetre.scrollTo(0, 0);//Remonte en haut de la page
// }

/**
 * Enfin, on va pouvoir fermer une fenêtre avec la méthode close()
*/ 

// Exemple 6

// let b1 = document.getElementById('b1');
// let b2 = document.getElementById('b2');
// let b3 = document.getElementById('b3');
// let b4 = document.getElementById('b4');
// let b5 = document.getElementById('b5');
// let b6 = document.getElementById('b6');
// let b7 = document.getElementById('b7');
// let b8 = document.getElementById('b8'); 
// let winSize = 'width=500, height=500';

// b1.addEventListener('click', openWindow);
// b2.addEventListener('click', resizeWindowBy);
// b3.addEventListener('click', resizeWindowTo);
// b4.addEventListener('click', moveWindowBy);
// b5.addEventListener('click', moveWindowTo);
// b6.addEventListener('click', scrollWindowBy);
// b7.addEventListener('click', scrollWindowTo);
// b8.addEventListener('click', closeWindow);

// function openWindow(){
//     //On recupère l'information renvoyée par open() dans une variable "fenetre"
//     fenetre = window.open('', '', winSize);
// }
// function resizeWindowBy(){
//     fenetre.resizeBy(200, 100);
// }
// function resizeWindowTo(){
//     fenetre.resizeTo(960, 720);
// }
// function moveWindowBy(){
//     fenetre.moveBy(100, 100);//Déplace la fenêtre 100px à droite et 100px en bas
// }
// function moveWindowTo(){
//     fenetre.moveTo(0, 0);//Place la fenêtre contre le bord supérieur gauche
// }
// function scrollWindowBy(){
//     fenetre.scrollBy(0, 200);//Défile de 200px vers le bas
// }
// function scrollWindowTo(){
//     fenetre.scrollTo(0, 0);//Remonte en haut de la page
// }
// function closeWindow(){
//     fenetre.close();
// }

/**
 * Afficher des boites de dialogue dans une fenêtre
 * 
 * L’objet Window possède également des méthodes qui vont nous permettre d’afficher des boites d’alerte, de dialogue ou de confirmation dans la fenêtre.
 * 
 * Nous connaissons déjà bien les fonctions alert() et prompt() qui sont en fait des méthodes de l’objet Window. Comme ces deux méthodes sont très utilisées, et comme l’objet Window est implicite, nous les utiliserons généralement sans préciser window. avant la méthode.
 * 
 * Pour rappel, la méthode alert() permet d’afficher une boite d’alerte tandis que prompt() affiche une boite de dialogue permettant aux utilisateurs de nous envoyer du texte.
 * 
 * La méthode confirm(), quant-à-elle, ouvre une boite avec un message (facultatif) et deux boutons pour l’utilisateur : un bouton Ok et un bouton Annuler.
 * 
 * Si l’utilisateur clique sur « Ok », le booléen true est renvoyé par la fonction ce qui va donc nous permettre d’effectuer des actions en fonction du choix de l’utilisateur.
 */

// Exemple 7 
if(confirm("Ouvrir une fenêtre Google ? ")) {
    fenetre = window.open('https://www.google.com');
}