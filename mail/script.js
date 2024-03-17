
  // Array delle email autorizzate
  const allowedEmails = ["esempio1@example.com", "esempio2@example.com", "esempio3@example.com"];

  // Funzione per controllare l'email inserita dall'utente
  const checkEmail = () => {
    // Ottieni l'email inserita dall'utente
    const userEmail = document.getElementById('emailInput').value.trim();

    // Verifica se l'email è nella lista di chi può accedere
    let isAllowed = false;
    for (let i = 0; i < allowedEmails.length; i++) {
      if (allowedEmails[i] === userEmail) {
        isAllowed = true;
        break;
      }
    }

    // Mostra il risultato del controllo in pagina
    const resultDiv = document.getElementById('result');
    if (isAllowed) {
      resultDiv.textContent = "Accesso consentito. Benvenuto!";
    } else {
      resultDiv.textContent = "Accesso negato. La tua email non è autorizzata.";
    }
  };

