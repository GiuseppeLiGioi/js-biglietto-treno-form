/*TASK

1. inizializzare e assegnare le variabili e costanti
2. individuazione della condizione: se il passeggero è minorenne, 20% di sconto. Se è over 65, 40% di sconto.
  2.1 BONUS visualizzare sia prezzo totale che scontato.
3. Mostrare il prezzo finale con max due cifre dopo la virgola (output)*/


//FASE DI PREPARAZIONE (dichiarazione delle variabili e costanti)
let etaPasseggero= parseInt(document.getElementById('eta').value);
let kmDaPercorrere= parseFloat(document.getElementById('km').value); 
const prezzoKm=0.21;

let nomePasseggero = document.getElementById('name').value;

let bottone = document.getElementById('btn_main');

//FASE DI ELABORAZIONE
let prezzoTot=kmDaPercorrere * prezzoKm;
let sconto;
let prezzoScontato;





//FASE DI OUTPUT
//MILESTONE 1:

bottone.addEventListener("click" , function(){
  if(etaPasseggero < 18){
    sconto= (prezzoTot * 20) / 100;
    prezzoScontato = prezzoTot - sconto;

    document.getElementById('costo_span').textContent = prezzoScontato.toFixed(2);
    document.getElementById('name_span').textContent = nomePasseggero.value;
    }

    else if(etaPasseggero > 65){
    sconto= (prezzoTot * 40) / 100;
    prezzoScontato = prezzoTot - sconto;
    

    document.getElementById('costo_span').textContent = prezzoScontato.toFixed(2);
    document.getElementById('name_span').textContent = nomePasseggero.value;

    }
    else{

      document.getElementById('costo_span').textContent = prezzoTot.toFixed(2);
      document.getElementById('name_span').textContent = nomePasseggero.value;
        
    }
})

