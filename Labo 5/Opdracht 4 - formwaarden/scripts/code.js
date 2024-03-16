const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("resultaat");
    button.addEventListener("click", print);
}


const print = () => {
    //roker
    let roker = document.getElementById("roker");
    if (roker.checked) {
        console.log("is een roker");
    } else if (!roker.checked) {
        console.log("is geen roker");
    }

    //moedertaal
    let nlknop = document.getElementById("nl");
    let frknop = document.getElementById("fr");
    let engknop = document.getElementById("en");

    let moederTaal = "";

    if (nlknop.checked) {
        moederTaal = nlknop.id;
    } else if (frknop.checked) {
        moederTaal = frknop.id;
    } else if (engknop.checked) {
        moederTaal = engknop.id;
    }
    console.log("Moedertaal is: " + moederTaal);

    //buurland
    let buurland = document.getElementById("buurland");
    console.log("Favoriete buurland: " + buurland.value);


    //bestelling
    let bestelling = document.getElementById("bestelling");
    let bestellingen = [];
    for (let i = 0; i < bestelling.options.length; i++) {
        if (bestelling.options[i].selected === true) {
            bestellingen.push(bestelling.options[i].value);
        }
    }
    console.log("Bestelling: " + bestellingen.join(", "));
}

window.addEventListener("load", setup);