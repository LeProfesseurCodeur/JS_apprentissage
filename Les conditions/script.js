// var demo = "Hello world !"
// console.log(demo);

/*
    Les conditions
*/

// rappel :
/*
    OPERATEUR D'EGALITE : 

        == -> égalité simple. Convertit les deux opérandes s'ils ne sont pas du même type, ensuite la comparaison stricte est appliqué
              Si les deux opérandes sont des objets, le moteur JavaScript comparera les références internes pour voir si elles réfèrent 
              au même objet en mémoire.

        != -> inégalité simple. Renvoie true si les deux opérandes ne sont pas égaux. Sil les deux opérandes ne sont pas du même type,
              une conversion sera effectuée vers un type adéquat. Si les deux opérandes sont des objets, le moteur JS comparera les
              références internes pour voir si elles réfèrent à des objets différents en mémoire.

        === -> égalité stricte. Renvoie true si les opérandes sont strictement égaux (voir ci-avant), aucune conversion de type n'est 
               effectuée.

        !== -> Inégalité strice. Renvoie true si les opérandes sont de types différents ou ne sont pas égaux.

    OPERATEURS RELATIONNELS :
        
        > ->  renvoie true si l'opérande gauche est strictement supérieur à l'opérande droit.

        >= -> renvoie true si l'opérande gauche est supérieur ou égal à l'opérande droit

        < ->  renvoie true si l'opérande gauche est strictement inférieur à l'opérande droit

        <= -> renvoie true si l'opérande gauche est inférieur ou égal à l'opérande droit

    OPERATEUR D'EGALITE :

        Voir lien : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_de_comparaison

*/
var marc = {
    nom: 'Marc',
    age: '25',
    moyenne: '15',
}

// exécution

/*
    Exemple 1
*/

// if (marc.age >= 18) {
//     console.log('Tu es majeur')
// } else {
//     console.log('Tu es mineur')
// }

/*
    Exemple 2 
*/

// if(marc.age >= 18) {
//     console.log('Tu peux passer ton permis de conduire')
// } else if(marc.age >= 15) {
//     console.log('Tu peux passer la conduite accompagnée')
// } else {
//     console.log('Tu ne peux pas encore conduire')
// }

/*
    Exemple 3
    Si age => 18 ET age <= 25 ALORS //opérateur booléan (ET - OU -> && - ||)
    bravo ! tu as le droit au tarilf étudiant
*/

// Méthode &&

    // if(marc.age >= 18 && marc.age <= 25) {
    //     console.log('Bravo ! vous avez le droit au tarif jeune')
    // } else {
    //     console.log("Désolé, vous n'avez pas accès aux tarifs jeune")
    // }

// Méthode ||

    // if (marc.age < 18 || marc.age > 25) {
    //     console.log("Désolé, vous n'avez pas accès aux tarifs jeune")
    // } else {
    //     console.log("Bravo ! Vous avez le droit au tarif jeune")
    // }

/* 
    Exemple 4
     Si age => 18 ET age <= 25 OU age > 70 ALORS 
*/

    // if((marc.age >= 18 && marc.age <= 25) || marc.age > 70) { // faire attention au placement de ces () qui peut changer la condition
    //     console.log("Vous avez accès au tarif réduit")
    // } else {
    //     console.log("Vous n'avez pas accès au tarif réduit")
    // }

    // if((marc.age < 18 || marc.age > 25) && marc.age <= 70) { // faire attention au placement de ces () qui peut changer la condition
    //     console.log("Vous n'avez pas accès au tarif réduit")

    // } else {
    //     console.log("Vous avez accès au tarif réduit")
    // }

/* 
    Exemple 5
*/

    // if(marc.age == 18) {
    //     console.log("Bravo ! tu as 18 ans")
    // }


/*
    Exemple 6 - Switch case
*/

    // if(marc.age === 18) {
    //     console.log("Bravo ! >Tu as 18 ans")
    // } else if(marc.age === 25) {
    //     console.log("Bravo ! >Tu as 25 ans")
    // } else if(marc.age === 50) {
    //     console.log("Bravo ! >Tu as 50 ans")
    // }

    // On fait plutôt un switch

    // switch(marc.age) {
    //     case 18:
    //         console.log("Bravo ! Tu as 18 ans")
    //         break
    //     case 25:
    //         console.log("Bravo ! Tu as 18 ans")
    //         break
    //     case 50:
    //         console.log("Bravo ! Tu as 18 ans")
    //         break
    //     default: 
    //         console.log("Bon anniversaire")
    // }

    // Exemple 7 - Le ternaire

    // if(marc.age >= 18) {
    //     console.log('Tu es majeur')
    // } else {
    //     console.log('Tu es mineur')
    // }

    console.log(marc.age >= 18 ? 'Tu es majeur' : 'Tu es mineur')