// 1. Definire un array contenente un "database" di email già registrate
const databaseEmail = ['pippo@gmail.com', 'franco@gmail.com', 'mia@gmail.com', 'tua@gmail.com'];
console.log(databaseEmail)
// 2. Chiedi all’utente la sua email,
const userEmail = prompt('Inserisci la tua e-mail');
// 3. Crea una variabile "flag" che permetta di determinare la ricerca della mail nel database
let isEmailIn = false;
// 4. controlla che sia nella lista di chi può accedere attraverso un (ciclo for)
for (let i = 0; i < databaseEmail.length; i++) {
    if (databaseEmail[i] === userEmail) {
        isEmailIn = true;
    }
}
// 5. SE l'email è stata trovata stampa un messaggio appropriato sull’esito del controllo
//      ALTRIMENTI stampa un messaggio di errore
if (isEmailIn) {
    alert('Sei già registrato!');
} else {
    alert('La tua email non è stata trovata, riprova');
}