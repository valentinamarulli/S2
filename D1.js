/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/ 

//ci sono tre tipi principali di datatype: string, number e boolean. sono dei contenitori, in ogni contenitore puoi mettere un solo tipo di contenuto, o "dato".
// in string puoi inserire lettere e numeri, in number puoi inserire numeri e in boolean puoi inserire vero o falso.



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/ 

let name = "Valentina";
/*console.log (name);*/


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/ let n1 = 12;
let n2 = 20;
let somma = (n1 + n2);
console.log ("somma: " + somma);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.

*/
/*let name = "Marulli";*/
/*const myname = "Valentina";*/
/*console.log (name);*/ //riporta l'errore Uncaught SyntaxError: Identifier 'name' has already been declared (at D1.js:45:5)
/*console.log (myname);*/
const myname = "Marulli"; // riporta l'errore Uncaught SyntaxError: Identifier 'myname' has already been declared (at D1.js:49:7)
var mioname = "Valentina";
var mioname = "Marulli"; // riporta il secondo inserimento "Marulli" in quanto var è modificabile
console.log (mioname);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
 let n3 = 4;
 let diff = (x - n3);
 console.log ("differenza:" + diff );


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*let name1 = "john";
let name2 = "John";
let uguaglianza = (name1 !== name2);
console.log(uguaglianza); // riporta true D1.js:73
console.log(name1 === name2); //riporta false D1.js:74 false*/ 

//EXTRA

/*const name1Lowercase = name1.toLowerCase;
const name2Lowercase = name2.toLowerCase;

if (name1Lowercase === name2Lowercase) {
  console.log("Le stringhe sono uguali in lowercase");
} else {
  console.log("Le stringhe non sono uguali in lowercase");   // riporta Le stringhe sono uguali in lowercase D1.js:81 
}
*/
