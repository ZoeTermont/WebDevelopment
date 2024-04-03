const setup = () => {
    const start = document.getElementById("start");
    start.addEventListener("click", setboard);
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}

let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    CARD_SUFFIX: ".jpg",
    CARD_PREFIX: "images/",
    TRIES: 0,
    ACHTERKANT: "images/achterkant.jpg",
    CARDSARRAY: [],
    geklikteKaarten: [], // Array om de indexen van geklikte kaarten bij te houden
};

const setboard = () => {
    const start = document.getElementById("start");
    start.style.display="none";
    let cardsdiv = document.getElementById("cards");

    for (let i = 0; i <= 1; i++) {
        for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
            global.CARDSARRAY.push(global.CARD_PREFIX + i + global.CARD_SUFFIX);
            let imgElement = document.createElement("img");
            imgElement.src = global.ACHTERKANT;

            imgElement.dataset.index = i; // Steek nr (van positie array) bij image --> ophalen dmv parseInt(xx.dataset.index)

            // Listener hier voor imgElement wanneer geklikt wordt
            imgElement.addEventListener("click", klik);
            cardsdiv.appendChild(imgElement);
        }
    }
}

const klik = (event) => {
    console.log("I have been clicked");
    const img = event.target;

    // Controleer of de geklikte afbeelding een kaart is
    if (img.tagName === 'IMG') {
        const index = parseInt(img.dataset.index); // Haal de index van de geklikte kaart op uit de dataset

        // Controleer of de kaart al is omgedraaid
        if (!global.geklikteKaarten.includes(index)) {
            img.src = global.CARDSARRAY[index]; // Draai de kaart om

            global.geklikteKaarten.push(index);

            // Controleer of er 2 kaarten zijn omgedraaid
            if (global.geklikteKaarten.length === 2) {
                vergelijkKaarten(global.geklikteKaarten[0], global.geklikteKaarten[1]);
                global.geklikteKaarten = [];
            }
        }
    }
}

const vergelijkKaarten = (eersteIndex, tweedeIndex) => {
    const eersteKaart = document.querySelector(`[data-index="${eersteIndex}"]`);
    const tweedeKaart = document.querySelector(`[data-index="${tweedeIndex}"]`);

    console.log("Eerste kaart src:", eersteKaart.src);
    console.log("Tweede kaart src:", tweedeKaart.src);

    if (global.CARDSARRAY[eersteIndex] === global.CARDSARRAY[tweedeIndex-global.AANTAL_KAARTEN]) {
        console.log("Kaarten komen overeen!");
        eersteKaart.style.display = "none";
        tweedeKaart.style.display = "none";
    } else {
        console.log("Kaarten komen niet overeen!");
        setTimeout(() => {
            eersteKaart.src = global.ACHTERKANT;
            tweedeKaart.src = global.ACHTERKANT;
            console.log("tweedekaart= "+tweedeKaart.src);

        }, 1000); // Wacht 1 seconde voordat de kaarten worden teruggedraaid
    }
}


window.addEventListener("load", setup);

/*
2.1 check hoe kaart vergelijken met plaats in array & haal zo src uit -->dataset.index
2.2 hoe 2 AANGEKLIKTE kaarten vergelijken (url?) Google: data-index
 */