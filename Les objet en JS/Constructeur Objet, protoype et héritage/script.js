/*
    L'utilisation d'un constructeur et la plateforme
*/

// Exemple précédent

//Utilisateur() est une fonction constructeur
    function Utilisateur(n, a, m){
        this.nom = n;
        this.age = a;
        this.mail = m;

        this.bonjour = function() {
            alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
        }
    }

    // Crée deux objects pierre et mathilde en utilisant le constructeur
    let pierre = new Utilisateur(['Pierre', 'Giraud'], 29, 'test@gmail.com');
    let mathilde = new Utilisateur(['Mathilde', 'test'], 44, 'test2@gmail.com');

//Ici, on commence par définir une fonction constructeur puis on crée deux variables qui vont stocker deux objets créés à partir de ce constructeur. 
//En procédant comme cela, chaque objet va disposer de sa propre copie des propriétés et méthodes du constructeur ce qui signifie que chaque objet créer va posséder trois propriétés nom, age et mail et une méthode bonjour() qui va lui appartenir.

// Sous forme littéral voir ci-dessous :

//On crée deux objets littéraux 
    let pierre = {
        nom : ['Pierre', 'Giraud'],
        age : 29,
        mail : 'pierre.giraud@gmail.com',
        bonjour : function(){
            alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
        }
    };

    let mathilde = {
        nom : ['Math', 'ML'],
        age : 27,
        mail : 'test@gmail.com',
        bonjour : function(){
            alert('Bonjour, je suis ' + this.nom[0] + 'j\'ai ' + this.age + ' ans');
        }
    }

/**
 *  L’un des enjeux principaux en tant que développeurs doit toujours être la performance de nos codes. 
    Dans le cas présent, notre code n’est pas optimal puisqu’en utilisant notre constructeur plusieurs fois on va copier à chaque fois la méthode bonjour() qui est identique pour chaque objet.
    Ici, l’idéal serait de ne définir notre méthode qu’une seule fois et que chaque objet puisse l’utiliser lorsqu’il le souhaite. Pour cela, nous allons recourir à ce qu’on appelle des prototypes.
*/

/*
    Le prototype en JS orienté objet
*/

    //Utilisateur() est une fonction constructeur
    function Utilisateur(n, a, m) {
        this.nom = n;
        this.age = a;
        this.email = m;
    }

    //On ajoute des propriétés et méthodes au prototype de Utilisateur de la même façon que pour n'importe quel objet 
    Utilisateur.prototype.taille = 170;
    Utilisateur.prototype.bonjour = function() {
        alert('Bonjour, je suis ' + this.nom[0] + 'j\'ai ' + this.age + ' ans');
    };

    //Crée deux objets pierre et mathilde en utilisant le constructeur
    let pierre = new Utilisateur(['Pierre', 'Giraud'], 29, 'test@gmail.com');
    let mathilde = new Utilisateur(['Mathilde', 'test'], 44, 'test2@gmail.com');

/**
 * Ici on ajoute une propriété taille et une méthode bonjour() à la propriété prototype du constructeur Utilisateur(). Chaque objet créé à partir de ce constructeur va avoir accès à cette propriété et à cette méthode.
*/

/*
    La chaine des prototypes ou chaine de prototypage et l'objet Object
*/

// Voir sur le site le résumé 

/*
    Mise en place d'une hiérarchie d'objets avec héritage en js 
*/

// Dans un premeir temps, créer un constructeur qui sera notre constructeur parent
// 2nd temps, créer un constructeur enfant qui va appeler le parent 
// 3rd temps, modifier la __proto__ de la propriété prototype de l'enfant pour qu'elle soit égale au parent

function Ligne(longeur){
    this.longeur = longeur;
}

//méthode
Ligne.prototype.taille = function(){
    document.getElementById('p1').innerHTML = 'Longueur : ' + this.longueur};

function Rectangle(longueur, largeur){
    Ligne.call(this, longueur); // call : permet d'appeler une fonction rattachée à un objet donné sur un autre objet. La méthode call() est une méthode prédéfinie qui appartient au prototype de l'objet natif function
    this.largeur = largeur;
}
Rectangle.prototype = Object.create(Ligne.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.aire = function(){
    document.getElementById('p2').innerHTML =
    'Aire : ' + this.longueur * this.largeur};

function Parallelepipede(longueur, largeur, hauteur){
    Rectangle.call(this, longueur, largeur);
    this.hauteur = hauteur;
}
Parallelepipede.prototype = Object.create(Rectangle.prototype);
Parallelepipede.prototype.constructor = Parallelepipede;
Parallelepipede.prototype.volume = function(){
    document.getElementById('p3').innerHTML =
    'Volume : ' + this.longueur * this.largeur * this.hauteur};

let geo = new Parallelepipede(5, 4, 3);
geo.volume();
geo.aire();
geo.taille();

/**
 * Explication du code
 */

 /*
    Nous définissons 3 constructeurs : Ligne(), Rectangle() et Parallelepipede().
    On veut que Rectangle() hérite de Ligne() et que Parallelepipede() hérite de Rectangle() (et donc par extension de Ligne()).

    Notre premier constructeur Ligne() possède une propriété longeur. Ce constructeur prend en argument la valeur relative à la propriété longueur d'un objet en particulier lorsqu'on crée un objet à partir de celui-ci 

    On ajoute ensuite une première méthode dans le prototype de notre constructeur. Cette méthode appartient au constructeur et sera partagée par tous les objets créés à partir de celui-ci.

    On crée ensuie un deuxième constructeur Rectangle(). Dans ce constructeur, nous pouvons remarquer la ligne Ligne.call(this, longeur)
    call : permet d'appeler une fonction rattachée à un objet donné sur un autre objet. La méthode call() est une méthode prédéfinie qui appartient au prototype de l'objet natif function

    On l'utilise ici pour faire appel au constructeur Ligne() dans notre constructeur Rectangle(). le mot clef this permet de faire référence à l'objet courant et de passer la valeur de l'objet relative à sa propriété longeur

    Ensuite on va créer un objet en utilisant le prototype de Ligne grâce à la méthode create() qui est une méthode de l'objet Object() et on va assigner cet objet au prototype de Rectangle

    Le prototype de Rectangle() possède donc en valeur un objet crée à partir du prototype de Ligne. Cela permet à Rectangle d'hériter des propriété et méthodes définies dans le protoype de Ligne.

    Il nous reste cependant une chose à régler ici: il va nous falloir rétablir la valeur de la propriété constructor de prototype de Rectangle car la ligne précédente a eu pour effet de définir Rectangle.prototype.constructor comme étant égal à celui de Ligne()

    On ajoute finalement une méthode aire() au prototype de Rectangle. 

    On repète l'opération en création un deuxième niveau d'héritage avec le constructeur Parallélepipede() qui va hériter Rectangle().

    Enfin, on crée un objet geo à partir du constructeur Parallélépipède(). Cet objet va pouvoir utiliser les méthodes définies dans les prototypes de Parallelepiede(), de rectangle et de Ligne()
    
 */