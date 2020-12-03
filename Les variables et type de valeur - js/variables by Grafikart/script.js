/* les varibales : élément qui permet de stocker temporairement une valeur qu'on va
   utiliser dans notre algo

   Type de valeur qu'on peut assigner : 
    - un entier : 2, 33
    - un réel : 4.5
    - Chaine de caractère : "test"
*/

// Exemple
var demo = "Salut les gens";

var eleves = ["jean", "jacques", "marion"]
// eleves[0] => jean

var eleve = ["jean", 12, 15];
// -> renvoie :
eleve = {
    nom: "jean", 
    age: 12, 
    moyenne: 15
}

// Une fois objet créer alors :
// eleve.nom => "jean"
// eleve.age => 12
// eleve.moyenne => 15

//rajout d'une clé si on le définit de cette façon :
eleve.taille = 150
// si on tape eleve, ça nous renvoie l'objet avec la taille en plus