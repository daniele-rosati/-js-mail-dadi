
  // Funzione per generare un numero casuale tra min e max inclusi
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Funzione per giocare
  const playGame = () => {
    // Genera un numero casuale per il giocatore e per il computer
    const playerScore = getRandomNumber(1, 6);
    const computerScore = getRandomNumber(1, 6);

    // Determina il vincitore
    let winner;
    if (playerScore > computerScore) {
      winner = "Giocatore";
    } else if (playerScore < computerScore) {
      winner = "Computer";
    } else {
      winner = "Nessun vincitore, pareggio";
    }

    // Mostra il risultato in pagina
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <h2>Risultato:</h2>
      <p>Il giocatore ha ottenuto: ${playerScore}</p>
      <p>Il computer ha ottenuto: ${computerScore}</p>
      <p>Vincitore: ${winner}</p>
    `;
  };

