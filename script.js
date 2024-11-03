// MOTIVAZIONE UTILIZZO JAVASCRIPT

// Nel mockup fornito, nella versione mobile, i 3 span di: data, puntino e tempo di lettura secondo il mio parere si sarebbero dovuti adattare
// alla lunghezza del titolo.
// Nel caso in cui il titolo sia troppo corto, avrebbe avuto una lunghezza di default.
// Io ho preferito dare in caso di titolo troppo corto, la lunghezza di default è quella dell'autore (che sarà quasi sicuramente più lunga).
// Probabilmente con flexbox questa cosa avrebbe potuto avere miglior soluzione, ma dopo 4/5 ore in cui ero bloccato su questo, ho preferito
// trovare questo stratagemma.

// Se poi è sbagliato e c'era un modo migliore/più facile con flex, ti prego di dirmelo, perché questa cosa non la so fare. Grazie in anticipo.

// Definisci la media query per larghezza massima di 768px (per smartphone)
const mediaQueryMax768 = window.matchMedia("(max-width: 768px)");

// Funzione per eseguire il codice solo se la media query è attiva
const applyArticleItemStyles = function() {
    if (mediaQueryMax768.matches) {
        // Seleziona tutti gli elementi .article-item
        const articleItems = document.querySelectorAll('.article-item');

        articleItems.forEach(item => {
            // Seleziona gli elementi per author-name e article-title
            const authorNameElement = item.querySelector('.author-name');
            const articleTitleElement = item.querySelector('.article-title');
            const articleMetaElement = item.querySelector('.article-meta');

            // Lunghezza del titolo dell'articolo
            const articleTitleLength = articleTitleElement ? articleTitleElement.textContent.length : 0;

            // Imposta la larghezza di article-meta in base alla nuova condizione
            if (articleTitleLength > 15) {
                // Larghezza di article-meta uguale a quella di article-title
                articleMetaElement.style.width = `${articleTitleElement.offsetWidth}px`;
            } else {
                // Larghezza di article-meta uguale a quella di author-name
                articleMetaElement.style.width = `${authorNameElement.offsetWidth}px`;
            }
        });
    }
}

// NOTA PER L'ANIMAZIONE
// NON AVENDO TROVATO SOLUZIONE MIGLIORE, HO DECISO DI USARE QUELLO CHE CONOSCO MEGLIO, OVVERO JS.
// SONO CONSCIO DEL FATTO CHE NON FUNZIONI PROPRIO PERFETTAMENTE, PERÒ È IL RISULTATO PIÙ SIMILE A QUELLO MOSTRATO SU DISCORD.
// COME SOPRA, SE C'ERA UN MODO MIGLIORE (SICURAMENTE C'È), TI PREGO DI FARMELO NOTARE, PERCHÉ NON SAPREI COME ALTRO FARE.
// L'ANIMAZIONE FUNZIONA, PERÒ È FATTO IN MODO STUPIDO E NON COMPLETO, LO AMMETTO.

// Applico lo stile inizialmente se la media query è attiva
applyArticleItemStyles();

// Riascolta i cambiamenti della media query (se si cambia orientamento o si ridimensiona)
mediaQueryMax768.addEventListener("change", applyArticleItemStyles);

const attivaAnimazione = function() {
    const svg = document.querySelector('.SVGOdioso');
    const textElements = Array.from(svg.querySelectorAll('g'));

    // Attiva l'SVG rendendolo visibile
    svg.style.opacity = '1';

    // Funzione per nascondere casualmente un certo numero di elementi
    const randomVisibilityToggle = function() {
        // Rimuove tutte le classi 'invisibile' per farli tornare visibili
        textElements.forEach(el => el.classList.remove('invisibile'));

        // Ottieni un numero casuale di elementi da nascondere (tra 5 e 20)
        const numToHide = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

        // Scelgo casualmente gli elementi da nascondere
        for (let i = 0; i < numToHide; i++) {
            const randomIndex = Math.floor(Math.random() * textElements.length);
            textElements[randomIndex].classList.add('invisibile');
        }
    }

    // Ripete l'animazione ogni mezzo secondo
    setInterval(randomVisibilityToggle, 500);
}

// Attivo l'animazione al caricamento della pagina
window.onload = attivaAnimazione;

// Funzione per il reindirizzamento in base alla dimensione dello schermo
const checkScreenSize = function() {
    if (window.innerWidth <= 315) {
       /* window.location.href = "https://www.google.com"; // Sostituisci con il link desiderato
    */}
};

// Controlla la dimensione dello schermo al caricamento della pagina
checkScreenSize();

// Controlla anche quando la finestra viene ridimensionata
window.addEventListener('resize', checkScreenSize);

// SCRIPT PER LA NAVBAR DA ARANCIONE A BIANCA
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.SectionHeaderNav');
    const button = document.querySelector('.ButtonStarted'); // Seleziona il bottone
    const mainSection = document.querySelector('main'); // Seleziona la sezione main
    
    // Controlla se main esiste nella pagina
    if (mainSection) {
        // Ottieni la distanza di main dall'inizio della pagina
        const mainPosition = mainSection.getBoundingClientRect().top + window.scrollY;

        // Condizione per attivare solo su schermi più larghi di 1024px
        if (window.innerWidth > 1023) {
                if (window.scrollY >= mainPosition) {
                    navbar.classList.add('scrolled');
                    button.classList.add('scrolled-button');
                } else {
                    navbar.classList.remove('scrolled');
                    button.classList.remove('scrolled-button');
                }
            }
        } else {
            // Rimuovi le classi se lo schermo è inferiore a 1024px
            navbar.classList.remove('scrolled');
            button.classList.remove('scrolled-button');
        }
    }
);


