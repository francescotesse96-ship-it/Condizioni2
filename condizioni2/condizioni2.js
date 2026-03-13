// let temperatura=Number(prompt (`inserisci la temperatura`));


// if ( temperatura < 20 ){

//     console.log ( `non ci sono più le mezze stagioni` );

// }else if ( temperatura >= 30 ){
//     console.log ( `lu mare, lu sole, lu ientu` );
    
// }else if ( temperatura < 30 ){
//     console.log( `mi dia una peroni ghiacciata` );
    
// }else if ( temperatura < 0 ){
//     console.log( `non è tanto il freddo quanto l'umidità`);
    
// }else if( temperatura < -10 ){
//     console.log( `copriti...ancora ti raffreddi` );
    
// }


let temperatura=Number(prompt (`inserisci la temperatura`));

let descrizione;

switch (true) {

    case temperatura <= -10:
        descrizione = `copriti...ancora ti raffreddi`;
         break;

 case temperatura <= 0:
        descrizione = `non è tanto il freddo quanto l'umidità`;
         break;


    case temperatura < 20:
        descrizione = `non ci sono più le mezze stagioni`;
         break;

       case temperatura >= 30:
        descrizione = `lu mare, lu sole, lu ientu`;
         break;

         case temperatura < 30:
        descrizione = `mi dia una peroni ghiacciata`;
         break;

}
console.log(descrizione);

