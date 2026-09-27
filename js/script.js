// Husk fra dag 1: skriv "use strict" herunder


// Eksempel: vi henter teksten "word" ved hjælp af dens id-attribut
const getWordElem = document.getElementById("word");

// Eksempel: vi lytter efter klik på selve teksten (bemærk: der er ingen knap i denne opgave)
// og kører en anonym function - ligesom i de tidligere opgaver
getWordElem.addEventListener("click", function() {

    // Skriv if/else-strukturen selv herinde, ligesom i de tidligere opgaver.
    //
    // Nyt i dag: this.innerHTML kan indsætte HTML-kode (fx <strong>...</strong>),
    // hvor this.textContent kun kan indsætte ren tekst.
    //
    // Hvis this.textContent er "Det ta'r kun 5 minutter", så:
    //   - sæt this.innerHTML til "<strong>og så er du i Netto.</strong>"
    // Ellers:
    //   - sæt this.innerHTML til "Det ta'r kun 5 minutter"

});
