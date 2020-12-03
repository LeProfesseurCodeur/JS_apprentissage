/*
    La concaténation
*/

let x = 28 + 1; //Le signe "+" est ici un opérateur arithmétique
let y = 'Bonjour';
let z = x + ' ans'; //Le signe "+" est ici un opérateur de concaténation


//Code commenté pour éviter l'apparition intempestive de la boite d'alerte
alert(y + ', je m\'appelle Pierre, j\'ai ' + z);

/*
    Les littéraux de gabarits - cas utilisé pour les dev confirmés
*/

let x = 5;
let y = 5;

alert('x contient ' + x +
      '\ny contient ' + y +
      '\nLeur somme vaut ' + (x + y));

alert(`x contient ${x}
       y contient ${y}
       Leur somme vaut ${x + y}`);