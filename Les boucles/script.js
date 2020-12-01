// https://www.pierre-giraud.com/javascript-apprendre-coder-cours/operateur-incrementation-decrementation/

// https://www.pierre-giraud.com/javascript-apprendre-coder-cours/boucle-while-do-for-in/
/*
    boucles : while ; do... while et for 
*/

/* 
    Exemple 1 - boucle while 
*/

// initialisation de notre varaible 
    // let x = 0;

    // // tant que
    // while(x < 10) {
    //     //on exécute le code 
    //     document.getElementById("p1").innerHTML += 'x stocke la valeur ' + x + ' lors du passage n°' + (x + 1) + ' dans la boucle<br>';

    //     x++
    // }

/*
    Exemple 2 - do... while
*/

    // let x = 0, a = 0;
    // let y = 10, b = 10;

    // // tant que 
    // while(x < 10){
    //     document.getElementById('p1').innerHTML += 'x stocke la valeur ' + x + ' lors du passage n°' + (x + 1) + ' dans la boucle <br>';
    //     x++;
    // }

    // // Faire tant que
    // do {
    //     document.getElementById('p2').innerHTML += 'a stocke la valeur ' + a + ' lors du passage n°' + (a + 1) + ' dans la boucle<br>';
    //     a++;
    // }
    // while(a < 10);

    // while(y < 10) {
    //     document.getElementById('p3').innerHTML += 'y stocke la valeur ' + y + ' lors du passage n°' + (y + 1) + ' dans la boucle<br>';
    //     y++;
    // }

    // do {
    //     document.getElementById('p4').innerHTML += 'b stocke la valeur ' + b + ' lors du passage n°' + (b + 1) + ' dans la boucle<br>';
    //     b++;
    // }
    // while(b < 10);

/* 
    Exemple 3 - boucle for
*/

for(let i = 0; i < 10; i++) {
    document.getElementById('p1').innerHTML += 'i stocke la valeur ' + i + ' lors du passage n°' + (i + 1) + ' dans la boucle<br>';
}

