/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let num1 = prompt ('Inserisci il primo numero');
let num2 = prompt ('inserisci il secondo numero');

  if (num1 > num2) {

    console.log(num1 +' è maggiore di '+ num2);
  } else if (num1==num2) {
    console.log('i due numeri sono uguali');
  } else if (num1 < num2) {
    console.log (num1 +' è minore di '+ num2);
  }*/
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* let num1 = prompt ('Inserisci il primo numero');
let num2 = 5;

  if (num1 != num2) {
    console.log(num1 +' è diverso da '+ num2);
  } else if (num1==num2) {
    console.log (num1 +' è uguale a '+ num2);
  }
*/
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/*let num1 = prompt ('Inserisci un numero');
if (num1 % 5 === 0) {
  console.log(num1 + " è divisibile per 5! :D ");
} else {
  console.log(num1 + " non è divisibile per 5! :C ");
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*num1 = prompt ('inserisci un numero');
num2 = prompt ('inserisci un altro numero');

  if (num1 == 8) {
      console.log(num1 + " è uguale a 8");
  } else if (num2 == 8) {
      console.log(num2 + " è uguale a 8");
  } else if (num1 + num2 == 8) {
    console.log( "la somma di ", num1 , '+' , num2 , "è di 8")
  } else if (num1 - num2 == 8) {
    console.log( "la sottrazione di ", num1, '-' , num2 , "è di 8")
  } else if (num2 - num1 == 8) {
    console.log( "la sottrazione di ", num2 , '-' , num1 , "è di 8")
  }*/


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*let totaleCarrello = prompt ('totale carrello');
let costoSpedizione = 10;
let totaleConSpedizione = (parseFloat(totaleCarrello) + parseFloat(costoSpedizione));

if (totaleCarrello > 50) {
    console.log("acquisto totale ", totaleCarrello, 'con spedizione gratuita!');
} else if (totaleCarrello < 50)  {
    console.log("acquisto totale ", totaleConSpedizione , " inclusi 10 euro di spedizione");
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* let totaleCarrello = prompt ('totale carrello');
let costoSpedizione = 10;
let sconto = totaleCarrello * 0.2 ;
let totaleScontatoConSpedizione = ((parseFloat(totaleCarrello) - parseFloat(sconto)) + parseFloat(costoSpedizione));
let totaleScontato = (parseFloat(totaleCarrello) - parseFloat(sconto));

if (totaleCarrello > 50) {
  console.log("acquisto totale ", totaleScontato, 'con spedizione gratuita + sconto del 20% !');
} else if (totaleCarrello < 50)  {
  console.log("acquisto totale ", totaleScontatoConSpedizione , " inclusi 10 euro di spedizione, con sconto del 20% nel totale del carrello");
}*/


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/*
let num1 = prompt ('inserisci il primo numero');
let num2 = prompt ('inserisci il secondo numero');
let num3 = prompt ('inserisci il terzo numero');

let numero1 = parseInt(num1);
let numero2 = parseInt(num2);
let numero3 = parseInt(num3);


let serieNumerica = [numero1, numero2, numero3];

serieNumerica.sort((a, b) => b - a);
console.log ('dal più grande al più piccolo', serieNumerica);


let num1 = prompt('Inserisci il primo numero');
let num2 = prompt('Inserisci il secondo numero');
let num3 = prompt('Inserisci il terzo numero');

// L'AVEVO FATTO SENZA BLOCCO CONDIZIONALE, SONO STUPIDA :D

let numero1 = parseInt(num1);
let numero2 = parseInt(num2);
let numero3 = parseInt(num3);

if (numero1 >= numero2 && numero1 >= numero3) {
    if (numero2 >= numero3) {
        console.log('Dal più grande al più piccolo:', numero1, numero2, numero3);
    } else {
        console.log('Dal più grande al più piccolo:', numero1, numero3, numero2);
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    if (numero1 >= numero3) {
        console.log('Dal più grande al più piccolo:', numero2, numero1, numero3);
    } else {
        console.log('Dal più grande al più piccolo:', numero2, numero3, numero1);
    }
} else {
    if (numero1 >= numero2) {
        console.log('Dal più grande al più piccolo:', numero3, numero1, numero2);
    } else {
        console.log('Dal più grande al più piccolo:', numero3, numero2, numero1);
    }
} */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/*
let datoUtente = prompt("inserisci un dato");
let numero = parseFloat(datoUtente);

if (typeof numero === 'number' && numero === numero) {
    console.log(datoUtente, " è un numero");
} else {
    console.log(datoUtente, " non è un numero");
}
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/*
let num = parseInt(prompt("inserisci un numero"));

if (num % 2 === 0) {
    console.log(num + " è un numero pari");
} else {
    console.log(num + " è un numero dispari");
}
*/
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = prompt('inserisci un numero');
let valNum = parseInt(val);

if (valNum < 5) {
    console.log("Meno di 5");
} else if (valNum < 10) {
    console.log("Meno di 10");
} else {
    console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city: 'Toronto';
*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* delete me.city;
*/
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/*
let endVal =arr.pop();
*/
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/*
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
*/
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/*
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeri.pop();
numeri.push(100);
*/