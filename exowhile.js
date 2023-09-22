"use strict";

let a=3;// créer une variable a égale à 3
while(a<9){ // tant que a est inférieur à 9
    a++ // ajouter 1
    if(a==7){
        continue
    }
    if(a==8){ // quand a est égal à 8, arrêter la boucle
        break
    }
    console.log(a);
}
console.log('Jai cassé la boucle au bout de '+a+" tours");