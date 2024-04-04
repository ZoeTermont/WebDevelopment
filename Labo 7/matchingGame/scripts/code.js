
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
        card.classList.add('memory-card', 'achterkantKaart');
        card.dataset.image = image; // Attribuut 'image' instellen als kaartnummer
        card.addEventListener('click', () => {

            if (!twoCardsClicked && !gekozenKaarten.includes(card)) {
                card.classList.remove('achterkantKaart');
                card.style.backgroundImage = `url('images/${image}.jpg')`;
                gekozenKaarten.push(card);

                if (gekozenKaarten.length === 2) {
                    twoCardsClicked = true;
                    setTimeout(checkMatch, 1000);
                }
            }
        });
        return card;
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
                card1.classList.add('achterkantKaart');
                card1.style.backgroundImage = '';
                card2.classList.add('achterkantKaart');
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