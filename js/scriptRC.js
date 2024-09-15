function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
window.onscroll = function () {
    var footer = document.querySelector('.footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = 'block';
    }
};
// Array di 30 recensioni inventate
const reviews = [
    { text: "Locale fantastico! L'atmosfera è davvero unica e i cocktail sono deliziosi.", source: "Google" },
    { text: "Il servizio è impeccabile, tornerò sicuramente.", source: "TripAdvisor" },
    { text: "Pizza molto buona e ambiente molto accogliente.", source: "Google" },
    { text: "Adoro l'innovazione nei piatti, un'esperienza culinaria indimenticabile.", source: "TripAdvisor" },
    { text: "Un posto ideale per rilassarsi e gustare ottimi drink.", source: "Google" },
    { text: "Cocktail straordinari, e il personale è davvero gentile!", source: "TripAdvisor" },
    { text: "La pizza qui è la migliore della zona, da provare assolutamente.", source: "Google" },
    { text: "Serata fantastica, ottima musica e atmosfera perfetta.", source: "TripAdvisor" },
    { text: "Il personale è stato molto accogliente e professionale.", source: "Google" },
    { text: "Locale molto curato e moderno, ideale per serate in compagnia.", source: "TripAdvisor" },
    { text: "Il cibo è di altissima qualità, sono rimasto piacevolmente sorpreso.", source: "Google" },
    { text: "Ottima selezione di vini e cocktail, lo consiglio vivamente.", source: "TripAdvisor" },
    { text: "Ambiente sofisticato ma allo stesso tempo accogliente.", source: "Google" },
    { text: "Ogni dettaglio del locale è curato alla perfezione.", source: "TripAdvisor" },
    { text: "Posto ideale per un aperitivo con gli amici. Consigliatissimo!", source: "Google" },
    { text: "Personale gentile e competente, cibo e drink di qualità.", source: "TripAdvisor" },
    { text: "La vista dalla terrazza è splendida, ci tornerò sicuramente.", source: "Google" },
    { text: "Una delle migliori esperienze culinarie che abbia mai avuto.", source: "TripAdvisor" },
    { text: "Molto più che un semplice locale, un vero punto di riferimento in città.", source: "Google" },
    { text: "La combinazione di drink innovativi e piatti ricercati è perfetta.", source: "TripAdvisor" },
    { text: "Consiglio vivamente di provare i loro cocktail, incredibili!", source: "Google" },
    { text: "Servizio impeccabile e atmosfera unica, assolutamente da visitare.", source: "TripAdvisor" },
    { text: "Il locale ha uno stile unico, ci tornerò sicuramente.", source: "Google" },
    { text: "Ottima musica e ottimi drink, la serata è stata perfetta.", source: "TripAdvisor" },
    { text: "La qualità del cibo e dei drink è imbattibile in tutta la zona.", source: "Google" },
    { text: "Atmosfera rilassante e servizio al top, super consigliato.", source: "TripAdvisor" },
    { text: "Uno dei migliori locali in cui sono stato, da provare assolutamente.", source: "Google" },
    { text: "Cibo squisito e drink innovativi, il locale perfetto per una serata fuori.", source: "TripAdvisor" },
    { text: "Ho passato una serata fantastica, i cocktail erano sublimi.", source: "Google" },
    { text: "Un'esperienza indimenticabile, consiglio di provarlo almeno una volta.", source: "TripAdvisor" }
];

// Indice corrente per la navigazione
let currentIndex = 0;

// Funzione per aggiornare le recensioni mostrate
function updateReviews() {
    const review1 = document.getElementById('review-1');
    const review2 = document.getElementById('review-2');
    
    // Mostra le recensioni correnti
    review1.innerText = `${reviews[currentIndex].text} - ${reviews[currentIndex].source}`;
    if (reviews[currentIndex + 1]) {
        review2.innerText = `${reviews[currentIndex + 1].text} - ${reviews[currentIndex + 1].source}`;
    } else {
        review2.innerText = ''; // Se non ci sono più recensioni, pulisci il campo
    }
}

// Event listener per il pulsante Successivo
document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < reviews.length - 2) {
        currentIndex += 2;
        updateReviews();
    }
});

// Event listener per il pulsante Precedente
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 2;
        updateReviews();
    }
});

// Caricamento delle recensioni all'avvio
updateReviews();


