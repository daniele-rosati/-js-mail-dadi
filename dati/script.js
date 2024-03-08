function lancioDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function determinaVincitore(punteggioGiocatore, punteggioComputer) {
    if (punteggioGiocatore > punteggioComputer) {
        return "Giocatore";
    } else if (punteggioComputer > punteggioGiocatore) {
        return "Computer";
    } else {
        return "Pareggio";
    }
}

function gioca() {
    const dadoGiocatore = lancioDado();
    const dadoComputer = lancioDado();

    console.log("Il giocatore ha ottenuto: " + dadoGiocatore);
    console.log("Il computer ha ottenuto: " + dadoComputer);

    const vincitore = determinaVincitore(dadoGiocatore, dadoComputer);
    console.log("Il vincitore è: " + vincitore);
}

gioca();
