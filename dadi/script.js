// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1. generare randomicamente un numero da 1 a 6 per la CPU
const numCpu = Math.floor(Math.random() * 6) + 1;
console.log(numCpu)
// 2. generare randomicamente un numero da 1 a 6 per l'user
const numUser = Math.floor(Math.random() * 6) + 1;
// 3    SE numCpu > numUser vince la CPU
//          ALTRIMENTI SE numUser > numCpu vince user
//          ALTRIMENTI SE numUser = numCpu pareggio
if (numUser > numCpu) {
    alert(`Hai vinto! Tu: ${numUser}, Computer: ${numCpu}`);
} else if (numUser < numCpu) {
    alert(`Hai perso! Tu: ${numUser}, Computer: ${numCpu}`);
} else {
    alert(`Pareggio! Tu: ${numUser}, Computer: ${numCpu}`);
}
