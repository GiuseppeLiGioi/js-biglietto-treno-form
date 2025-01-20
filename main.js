/*TASK

1. inizializzare e assegnare le variabili e costanti
2. individuazione della condizione: se il passeggero è minorenne, 20% di sconto. Se è over 65, 40% di sconto.
  2.1 BONUS visualizzare sia prezzo totale che scontato.
3. Mostrare il prezzo finale con max due cifre dopo la virgola (output)*/


//FASE DI PREPARAZIONE (dichiarazione delle variabili e costanti)
let etaPasseggero=prompt("inserisci la tua età");
let kmDaPercorrere=prompt("inserisci i km che devi percorrere");
const prezzoKm=0.21;

let bottone = document.getElementById("btn");

//FASE DI ELABORAZIONE
let prezzoTot=kmDaPercorrere * prezzoKm;
let sconto;
let prezzoScontato;

console.log(`${prezzoTot}`);



//FASE DI OUTPUT
//MILESTONE 1:

bottone.addEventListener("click" , function(){
  if(etaPasseggero < 18){
    sconto= (prezzoTot * 20) / 100;
    prezzoScontato = prezzoTot - sconto;
    
    console.log(`visto che sei minorenne hai diritto al 20% di sconto, ecco il prezzo scontato! ${prezzoScontato.toFixed(2)} euro. Altrimenti avresti pagato ${prezzoTot.toFixed(2)} euro.`)
    }
    else if(etaPasseggero > 65){
    sconto= (prezzoTot * 40) / 100;
    prezzoScontato = prezzoTot - sconto;
    console.log(`visto che hai più di 65 anni, hai diritto al 40% di sconto, ecco il prezzo scontato! ${prezzoScontato.toFixed(2)} euro. Altrimenti avresti pagato ${prezzoTot.toFixed(2)} euro.`)
    }
    else{
        console.log(`il prezzo ammonta a: ${prezzoTot.toFixed(2)} euro.`);
    }
})


//MILESTONE 2