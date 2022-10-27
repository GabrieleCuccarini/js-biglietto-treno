const kmDaPercorrere = prompt("Inserisci i chilometri da percorrere")
const age = prompt("Inserisci la tua età")

if ( isNaN( kmDaPercorrere )) {
    alert( "Il numero inserito non è valido" );
}


if ( isNaN( age ))  {
    alert( "Il numero inserito non è valido" );
  }

console.log(kmDaPercorrere, age)

let prezzoDelBiglietto = kmDaPercorrere * 0.21

console.log(prezzoDelBiglietto)

if ( age < 18 ) {
    let scontoMinorenni = prezzoDelBiglietto * 0.80 ;
    const scontoMinorDeci = scontoMinorenni.toFixed(2)
    console.log(scontoMinorDeci)
  }

if ( age > 64 ) {
    let scontoOver = prezzoDelBiglietto * 0.60 ;
    const scontoOverDeci = scontoOver.toFixed(2);
    console.log(scontoOverDeci)
}

