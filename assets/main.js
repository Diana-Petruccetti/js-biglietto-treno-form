
/* TRACCIA */
/* Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Nota 2:
Le milestone vanno seguite in ordine. Non passate alla richiesta della m2 se non avete prima completato la m1. */


/* Fase 1: Raccolta Dati */

// Seleziono la forma
const formEl = document.getElementById('ticket-form');
console.log(formEl);

/* Seleziono il bottone reset */
const resetBtnEl = document.querySelector('[type="reset"]')
/* Seleziono l'area del biglietto */
const ticketSectionEl = document.getElementById('ticket')
/* Definisci il prezzo per chilometro */
/* Crea una variabile dove mettere il costo per chilometro */
const pricePerKm = 0.21


/* Fase 2: Elaborazione Dati */

formEl.addEventListener('submit', function (e) {
    e.preventDefalut()

    /* Leggi la value di input fullname */
    const fullName = e.target.fullname.value;
    /* Leggi la value di input km */
    const km = Number(e.target.km.value);
    console.log(km);

    /* Leggi la value di age range selection */
    const ageRange = e.target.ageRange.value;
    console.log(ageRange);

    /* Calcola il prezzo standard moltiplicando il prezzo per km e la value di km */
    let finalPrice = pricePerKm * km
    console.log(finalPrice);

    let discount;
    let offerType = 'Biglietto standard';

    /* Controllo l'età del user */
    
    /* Se l'user è minorenne */
    if (ageRange === 'minorenne'){
        /* Applica 20% di sconto sul prezzo standard */
        discount = 0.2
        finalPrice -= finalPrice * discount
        offerType = 'Biglietto Minorenni'
    } else if (ageRange === 'senior'){
        /* se l'user è un senior */
        /* Applica 40% di sconto sul prezzo standard */
        discount = 0.4
        finalPrice -= finalPrice * discount
        offerType = 'Biglietto Senior'
    }

    /* Altrimenti se l'user è un adulto, nessuno sconto */
    /* Applicare prezzo standard */

    /* toFixed restituisce una stringa. Convertila nuovamemte in un numero se necessario */
    const roundedFinalPrice = parseFloat(finalPrice.toFixed(2));
    console.log(roundedFinalPrice);

    /* Genera un numero random per il numero del vagone */
    const wagon = generateRandomInteger(1, 10);
    /* Genera un numero random per il cp_code */
    const cp_code = generateRandomInteger(80000, 99000);

    /* Aggiorna/Update il DOM per stampare il biglietto generato */
    /* Genera biglietto */

    /* Genera il markup del biglietto da inserire nella sezione biglietto */
    const markup = generateTicketMarkup (fullName, offerType, roundedFinalPrice, wagon, cp_code);

    /* [multiple tickets] aggiorna il DOM aggiungendo più di un biglietto per volta */
    ticketSectionEl.insertAdjacentHTML('afterbegin', markup);
})

console.log('After the listener');

/* 
* Questa funzione genera un markup per il biglietto
 * @param {string} fullName the fullname
 * @param {string} offertType the offer name
 * @param {float} finalPrice the final price
 * @param {number} wagon the wagon number
 * @param {number} cp_code the cp code
 * @returns string
*/

function generateTicketMarkup(fullName, offerType, finalPrice, wagon = 4, cp_code = 1234) {
    return `
        <div class="card">
    <div>
        <div class="passenger">
            <h2>Nome del Passeggero</h2>
            <h4>${fullName}</h4>
        </div>
        <div>
            <div>
                <h6>Offerta</h6>
                <div>
                    ${offerType}
                </div>
            </div>
            <div>
                <h6>Vagone</h6>
                <div>
                    ${wagon}
                </div>
            </div>
             <div>
                <h6>Cp code</h6>
                <div>
                    ${cp_code}
                </div>
             </div>
             <div>
                <h6>Prezzo</h6>
                <div>
                    ${finalPrice}
                </div>
             </div>
        </div>
    </div>
</div>
`
}

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



















/* // Seleziono il nome
const fullnameInputEl = document.getElementById('fullname');
console.log(fullnameInputEl)

// Seleziono i chilometri
const kmInputEl = document.getElementById('km');
console.log(kmInputEl)

// Seleziono l'età
const ageRange = document.getElementById('age-range');

// Seleziono il pulsante
const resetBtnEl = document.querySelector('[type="reset"]');
console.log(resetBtnEl);

// Seleziono la sezione biglietto
const ticketSectionEl = document.getElementById('ticket');
console.log(ticketSectionEl);
 */

/* formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.fullname.value, e.target.km.value, e.target.age-Range.value);

    console.log(kmInputEl.value, age-range.value);
} */