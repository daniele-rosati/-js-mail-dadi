// Lista di email consentite
const listaEmailConsentite = ["esempio1@email.com", "esempio2@email.com", "esempio3@email.com"];

// Funzione per controllare se l'email è nella lista consentita
function controllaAccesso(email) {
    if (listaEmailConsentite.includes(email)) {
        return true;
    } else {
        return false;
    }
}

// Chiedi all'utente la sua email
const emailUtente = prompt("Inserisci la tua email:");

// Controlla se l'email è nella lista consentita e stampa un messaggio appropriato
if (controllaAccesso(emailUtente)) {
    console.log("Accesso consentito. Benvenuto!");
} else {
    console.log("Accesso negato. La tua email non è autorizzata.");
}
