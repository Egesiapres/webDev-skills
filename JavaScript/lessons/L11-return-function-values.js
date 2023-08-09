console.log('------ %c11: Return function values 🪢', 'font-weight: bold');

let minusBtn = document.getElementById('minus-btn');
let minusTitle = document.getElementById('minus-h1');
let numberInput = document.getElementById('number-input');

// RETURN: prende un valore e lo rimanda a schermo
// la funzione esegue
// produce un risultato (che potrebbe essere perso)
// tramite il return il risultato ci viene ridato indietro
// per manipolarlo, mandarlo a schermo etc

// a schermo stampa undefined
// il valore viene stampato solo nella console
// questo perché il risultato rimane dentro alla funzione
// allora metto il return, e si esce
// è l'ULTIMA COSA che devo scrivere in una funzione
// se dopo il return aggiungo qualcosa, quel qualcosa non viene eseguito
function cubo(number) {
  let result = number * number * number;
  console.log(result);
  return result;
  console.log('hi');
}

// quando si attiva?, cosa eseguo?
minusBtn.addEventListener('click', () => {
  cubo(numberInput.value);
  minusTitle.innerHTML = cubo(numberInput.value);
});

// HELPER FUNCTIONS
// return di una f (con qualche modifica) all'interno di un'altra f
function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

getFahrenheit(15); // Returns 59
