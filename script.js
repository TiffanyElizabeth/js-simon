/* Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array */
// DOM ELEMENTS 
const numsElm = document.getElementById("nums");


// DOM EVENTS
// 1. stampa 5 numeri casuali (max 2 digits each) - array
    // function - get random numbers (10-99)
    function getRndInteger(min,max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    // array 5 random numbers
    const fiveRandomNums = [];

    for(let i = 1; i <=5; i++) {
        const randomNum = getRndInteger(10,99);
        fiveRandomNums.push(randomNum);
    }

    console.log(fiveRandomNums);

    // make array appear in page
    let nums = '';
    for(let i = 0; i < fiveRandomNums.length; i++) {
        nums += `<li>${fiveRandomNums[i]}<li>`;
    }
    numsElm.innerHTML = nums;


// 2. parte un timer di 30 secondi

// 3. quando finisce il timer, i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente 

// 4. dopo l'utente clicca "conferma", il software dice quanti e quali dei numeri da indovinare sono stati individuati 