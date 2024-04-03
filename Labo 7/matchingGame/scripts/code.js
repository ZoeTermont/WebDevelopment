let AANTAL_HORIZONTAAL = 4;
let AANTAL_VERTICAAL = 3;
let AANTAL_KAARTEN = 6;

let kaarten = ['0', '1', '2', '3', '4', '5'];

let speelveld = document.getElementById('speelveld');
let gekozenKaarten = [];
let isBusy = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCard(image) {
    let card = document.createElement('div');
    card.classList.add('memory-card', 'card-back');
    card.dataset.image = image;
    card.addEventListener('click', () => {
        if (!isBusy && !gekozenKaarten.includes(card)) {
            card.classList.remove('card-back');
            card.style.backgroundImage = `url('images/${image}.jpg')`;
            gekozenKaarten.push(card);
            if (gekozenKaarten.length === 2) {
                isBusy = true;
                setTimeout(checkMatch, 1000);
            }
        }
    });
    return card;
}

function checkMatch() {
    let [card1, card2] = gekozenKaarten;
    if (card1.dataset.image === card2.dataset.image) {
        setTimeout(() => {
            card1.style.visibility = 'hidden';
            card2.style.visibility = 'hidden';
            gekozenKaarten = [];
            isBusy = false;
        }, 500);
    } else {
        setTimeout(() => {
            card1.classList.add('card-back');
            card1.style.backgroundImage = '';
            card2.classList.add('card-back');
            card2.style.backgroundImage = '';
            gekozenKaarten = [];
            isBusy = false;
        }, 500);
    }
}

function initGame() {
    kaarten = shuffle(kaarten.concat(kaarten));
    for (let i = 0; i < AANTAL_VERTICAAL; i++) {
        for (let j = 0; j < AANTAL_HORIZONTAAL; j++) {
            let card = createCard(kaarten[i * AANTAL_HORIZONTAAL + j]);
            speelveld.appendChild(card);
        }
        speelveld.appendChild(document.createElement('br'));
    }
}

function startGame() {
    document.getElementById('start-knop').style.display = 'none';
    document.getElementById('speelveld').style.display = 'block';
    initGame();
}

document.getElementById('start-button').addEventListener('click', startGame);
