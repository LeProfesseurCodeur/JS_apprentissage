/**
 * Dans cette nouvelle leçon, nous allons étudier l’interface Navigator à travers l’objet JavaScript Navigator et voir les propriétés et méthodes intéressantes de cet objet, notamment la propriété geolocation qui va nous permettre d’utiliser la géolocalisation.
*/

// Présentation de l'objet Navigator
/**
 * L’objet Navigator va nous donner des informations sur le navigateur de vos visiteurs en soi ainsi que sur les préférences enregistrées (langue, etc.). C’est également ce qu’on appelle le « user agent ».
 * 
 * Attention cependant ici aux informations récupérées : celles-ci proviennent de l’utilisateur et ne sont donc jamais totalement fiables.
 * 
 * De plus, vous devrez demander une autorisation à l’utilisateur avant de récupérer certaines de ces informations.
 * 
 * On va pouvoir récupérer un objet Navigator en utilisant la propriété navigator de Window.
*/

// Les propriétés et méthodes de Navigator
/**
 * On va pouvoir utiliser différentes propriétés définies dans d’autres objets à partir de l’objet Navigator. Ces propriétés vont nous donner des informations utiles sur le user agent de nos visiteurs.
 * 
 * Les propriétés les plus intéréssantes vont être les suivantes :
 *      - language : retourne la langue définie dans le navigateur;
 *      - geolocation : retourne un objet Geolocation qui peut être utilisé pour définir la localisation de l'utilisateur;
 *      - cookieEnabled : détermine si les cookies sont autorisés ou non et retourne true ou false
 *      - platform : retourne la plateforme utilisée par le navigateur
 */

 // Exemple 1 

//  document.getElementById('p1').innerHTML =
//  'Langue du navigateur : ' + navigator.language  +
//  '<br>Cookies autorisés : ' + navigator.cookieEnabled +
//  '<br>Plateforme utilisée : ' + navigator.platform; 

 /**
  * Navigator possède également des propriétés suivantes :
  * 
  * appName : retourne le nom du navigateur;
  * appCodeName : retourne le nom de code du navigateur;
  * appVersion : retourne la version du navigateur utilisée;
  * userAgent : retourne l'en-tête du fichier user-agent envoyé par le navigateur
  * 
  * Cependant, ces propriétés ont longtemps été utilisés par des sites pour s’ajuster en fonction des navigateurs et notamment pour interdire à certains navigateurs d’accéder à certains contenus. Les navigateurs ont ainsi commencé à renvoyer des informations erronées pour que les utilisateurs les utilisant puissent accéder à tous les sites sans problème.
  */

// L'interface et l'objet Géolocation
/**
 * L’interface Geolocation nous permet de géolocaliser (obtenir la position) d’un appareil (ordinateur, tablette ou smartphone).
 * 
 * On va pouvoir utiliser cette interface à travers un objet Geolocation qu’on va obtenir à partir de la propriété geolocation de l’objet Navigator.
 * 
 * L’interface Geolocation n’implémente et n’hérite d’aucune propriété. En revanche, elle met trois méthodes à notre disposition qui ne sont disponibles que dans des contextes sécurisés (contextes utilisant l’HTTPS) pour des raisons de sécurité :
 * 
 *      - La méthode getCurrentPosition() permet d’obtenir la position actuelle de l’appareil en retournant un objet Position ;
 *      - La méthode watchPosition() permet de définir une fonction de retour qui sera appelée automatiquement dès que la position de l’appareil change. Cette méthode retourne une valeur (un ID) qui va pouvoir être utilisé par la méthode clearWatch() pour supprimer la fonctoin de retour définie avec watchPosition() ;
 *      - La méthode clearWatch() est utilisée pour supprimer la fonction de retour passée à watchPosition().
 * 
 * La méthode getCurrentPosition() retourne un objet Position. L'interface Position ne dispose d'aucune méthode mais implémente deux propriétés :
 * 
 *      - Une propriété coords qui retourne un objet Coordinates avec les cordonnées de position de l'appareil;
 *      - Une propriété timestamp qui représente le moment où la position de l'appareil a été récupérée.
 * 
 * L'interface Coordinates ne possède pas de méthodes mais implémente les propriétés suivantes : 
 * 
 *      - latitude qui rpz la lattitude de l'appareil;
 *      - longitude qui rpz la longitude de l'appareil;
 *      - altitude qui rpz l'altitude de l'appareil; 
 *      - accuracy qui rpz le degré de précision (exprimé en mètres) des valeurs renvoyées par les propriétés latitude et longitude;
 *      - altitudeAccuracy qui rpz le degré de précision de la valeur renvoyée par la propriété altitude;
 *      - heading qui rpz la direction dans lequelle l'appareil se déplace. La valeur renvoyée est une valeur en degrés exprimée par rapport au Nord;
 *      - speed qui rpz la vitesse de déplacement de l'appareil; vitesse exprimée en mètres par seconde.
 */

function coordonnees(pos) {
    let crd = pos.coords;
  
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    
    document.getElementById('p1').innerHTML= 'Latitude : ' + latitude.toFixed(2);
    document.getElementById('p2').innerHTML= 'Longitude : ' + longitude.toFixed(2);
}
navigator.geolocation.getCurrentPosition(coordonnees);

/**
 * On utilise ici la propriété navigator de Window pour obtenir un objet Navigator à partir duquel on peut utiliser la propriété geolocation qui nous donne elle-même accès à un objet Geolocation à partir duquel on peut utiliser la méthode getCurrentPosition().
 * 
 * La méthode getCurrentPosition() prend une fonction de rappel en argument qui doit elle-même prendre un objet Position comme seule valeur d’entrée.
 * 
 * Ici, on appelle notre fonction de rappel coordonnees(). On définit notre fonction en lui passant un argument pos qui va représenter notre objet position.
 * 
 * Cette fonction va avoir pour rôle de récupérer les coordonnées d’un appareil. Pour cela, on va avoir besoin d’un objet Coordinates qu’on obtient avec pos.coords (la propriété coords de l’objet Position retourne un objet Coordinates).
 * 
 * On va ainsi pouvoir utiliser les différentes propriétés de Coordinates en utilisant notre objet crd.
 * 
 * Note : Dans mon cas, j’arrondi les valeurs renvoyées par ces propriétés avec la méthode toFixed() de l’objet Number pour ne pas dévoiler mon adresse précise à tout le monde !
 */