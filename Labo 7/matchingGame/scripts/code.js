
const setup = () => {
    document.getElementById('start-button').addEventListener('click', startGame);
}




function startGame() {
    // Verberg de startknop
    document.getElementById('start-button').style.display = 'none';
    // Toon het speelveld
    document.getElementById('speelveld').style.display = 'block';
    // Start het spel
    start();
}




function start() {
    let kaarten = ['0', '1', '2', '3', '4', '5'];
    let speelveld = document.getElementById('speelveld');
    let gekozenKaarten = [];
    let twoCardsClicked = false;

    // Functie om een nieuwe kaart aan te maken
    function maakNieuweKaart(image) {
        let card = document.createElement('div');
        card.classList.add('memory-card', 'card-back'); // Nieuwe classes toevoegen
        card.dataset.image = image; // Attribuut 'image' instellen als kaartnummer
        card.addEventListener('click', () => {
            // Controleren of het spel bezig is en of de gekozen kaart nog niet is gekozen
            if (!twoCardsClicked && !gekozenKaarten.includes(card)) {
                card.classList.remove('card-back'); // Achterkant van de kaart verwijderen
                card.style.backgroundImage = `url('images/${image}.jpg')`; // Afbeelding toevoegen
                gekozenKaarten.push(card); // Gekozen kaart toevoegen aan het array van gekozen kaarten
                // Als er twee kaarten zijn gekozen, controleer dan of ze overeenkomen na een korte vertraging
                if (gekozenKaarten.length === 2) {
                    twoCardsClicked = true; // Variabele instellen op true om te voorkomen dat er meer kaarten worden gekozen
                    setTimeout(checkMatch, 1000); // Overeenkomst controleren na 1 seconde vertraging
                }
            }
        });
        return card; // Aangemaakte kaart retourneren
    }

    // PANIEK
    //checkkaarten hier doe als laatste cuz ???
    // haal kaarten op, check op dataset (check sticky notes), als ok, visibility="hidden" !! zet in timeout
    function checkMatch() {
        let [card1, card2] = gekozenKaarten;
        // Controleren of de dataset 'image' van beide kaarten overeenkomt
        if (card1.dataset.image === card2.dataset.image) {
            setTimeout(() => {
                card1.style.visibility = "hidden";
                card2.style.visibility = "hidden";
                gekozenKaarten = [];
                twoCardsClicked = false;
            }, 50);
        } else {
            setTimeout(() => {
                card1.classList.add('card-back');
                card1.style.backgroundImage = '';
                card2.classList.add('card-back');
                card2.style.backgroundImage = '';
                gekozenKaarten = [];
                twoCardsClicked = false;
            }, 50);
        }
    }

    // kaarten op speelveld
    function setupgame() {
        // Kaarten verdubbelen en schudden
        kaarten = randomizer(kaarten.concat(kaarten));
        // Loop om kaarten toe te voegen aan het speelveld
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                let card = maakNieuweKaart(kaarten[i * 4 + j]);
                speelveld.appendChild(card);
            }
            //fix de br br zodatie naar een nieuwe regel gaat
            speelveld.appendChild(document.createElement('br'));
        }
    }
    //Doofenshmitz randomizer hier (schud kaarten in every sense of the word)
    function randomizer(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Elementen op positie i en j verwisselen
        }
        return array;
    }


    setupgame();
}
window.addEventListener("load", setup);

// hour count: depressie