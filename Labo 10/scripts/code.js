/*
to be fixed:
kaarten layout is wonky
geen ruimte tussen 2 rijen kaarten
kaarten worden toegevoegd als 1 3 2 (figure out y)
 */
const saveHistoryToLocalStorage = () => {
    localStorage.setItem("history", JSON.stringify(global.HISTORY));
}

const clearHistory = () => {
    global.HISTORY = [];
    saveHistoryToLocalStorage();
}

window.addEventListener("beforeunload", clearHistory);

const loadHistoryFromLocalStorage = () => {
    const history = localStorage.getItem("history");
    if (history) {
        global.HISTORY = JSON.parse(history);

        global.HISTORY.forEach(item => {
            console.log("Loaded history item:", item);
            creerCard(item)
        });
    }
}


const setup = () => {
    const button = document.getElementById("GO");
    button.addEventListener("click", start);

    loadHistoryFromLocalStorage();
}

let global = {
    PREFIXES: ["/g", "/y", "/t", "/i"],
    VERTALINGPREFIX: ["Google", "YouTube", "Twitter", "Instagram"],
    HISTORY: [],
}

const start = () => {
    const input = document.getElementById("search").value.trim();
    const gezochteprefix = input.slice(0, 2);

    if (gezochteprefix.charAt(0) === "/") {
        let found = false;
        for (let i = 0; i < global.PREFIXES.length; i++) {
            if (global.PREFIXES[i] === gezochteprefix) {
                creerURL(input);
                found = true;
                break;
            }
        }
        if (!found) {
            window.alert("Unknown command prefix: " + gezochteprefix);
            console.log("niet gevonden")
        }
    } else {
        window.alert("Invalid command: " + input);
    }
}

const creerURL = () => {
    const input = document.getElementById("search").value.trim();
    const gezochtePrefix = input.slice(0, 2);
    const zoekopdracht = input.slice(3);

    let url;
    if (gezochtePrefix === "/g") {
        url = "https://www.google.com/search?q=" + encodeURIComponent(zoekopdracht);
    } else if (gezochtePrefix === "/y") {
        url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(zoekopdracht);
    } else if (gezochtePrefix === "/i") {
        url = "https://www.instagram.com/explore/tags/" + encodeURIComponent(zoekopdracht);
    } else if (gezochtePrefix === "/t") {
        url = "https://twitter.com/hashtag/" + encodeURIComponent(zoekopdracht);
    }

    window.open(url, "_blank");

    const historyItem = {
        title: global.VERTALINGPREFIX[global.PREFIXES.indexOf(gezochtePrefix)],
        text: zoekopdracht,
        url: url
    };

    const existingURLs = global.HISTORY.map(item => item.url);
    if (!existingURLs.includes(url)) {
        global.HISTORY.push(historyItem);
        saveHistoryToLocalStorage();
        creerCard(historyItem, gezochtePrefix);
    }
}

const creerCard = (item, gezochtePrefix) => {
    let newCardContainer = document.createElement("div");
    newCardContainer.classList.add("card", "col-3");
    newCardContainer.style.height = "150px";
    newCardContainer.style.borderRadius = "4px";
    let newCardBody = document.createElement("div");
    newCardBody.classList.add("card-body");

    let titel = document.createElement("h3");
    titel.classList.add("card-title");
    titel.innerText = item.title;
    titel.style.color = "white";
    titel.style.fontSize = "15px";

    let cardtext = document.createElement("p");
    cardtext.classList.add("card-text");
    cardtext.innerText = item.text;
    cardtext.style.color = "white";

    let cardbutton = document.createElement("button");
    cardbutton.classList.add("card-button");
    cardbutton.innerText = "Go!";
    cardbutton.style.height = "40px";
    cardbutton.style.width = "50px";
    cardbutton.style.borderRadius = "7px";
    cardbutton.addEventListener("click", function () {
        window.open(item.url, "_blank");
    });

    if (gezochtePrefix === "/g") {
        newCardContainer.style.background = "#4285F4";
        cardbutton.style.background = "orangered"
        cardbutton.style.color = "orange";
        cardbutton.style.border = "1ps solid orangered";
    } else if (gezochtePrefix === "/y") {
        newCardContainer.style.background = "#FF0000";
        cardbutton.style.background = "black";
        cardbutton.style.color = "white";
        cardbutton.style.border = "1ps solid black";
    } else if (gezochtePrefix === "/i") {
        newCardContainer.style.background = "#c32aa3";
        cardbutton.style.background = "darkorange";
        cardbutton.style.color = "orange";
        cardbutton.style.border = "1ps solid darkorange";
    } else if (gezochtePrefix === "/t") {
        newCardContainer.style.background = "#1da1f2";
        cardbutton.style.background = "black";
        cardbutton.style.color = "white";
        cardbutton.style.border = "1ps solid black";
    }
    let gezochtePrefix1 = item.url.split('/')[2];
    if (gezochtePrefix1 === "www.google.com") {
        newCardContainer.style.background = "#4285f4";
        cardbutton.style.background = "orangered"
        cardbutton.style.color = "orange";
        cardbutton.style.border = "1ps solid orangered";
    } else if (gezochtePrefix1 === "www.youtube.com") {
        newCardContainer.style.background = "#FF0000";
        cardbutton.style.background = "black";
        cardbutton.style.color = "white";
        cardbutton.style.border = "1ps solid black";
    } else if (gezochtePrefix1 === "www.instagram.com") {
        newCardContainer.style.background = "#c32aa3";
        cardbutton.style.background = "darkorange";
        cardbutton.style.color = "orange";
        cardbutton.style.border = "1ps solid darkorange";
    } else if (gezochtePrefix1 === "twitter.com") {
        newCardContainer.style.background = "#1da1f2";
        cardbutton.style.background = "black";
        cardbutton.style.color = "white";
        cardbutton.style.border = "1ps solid black";
    }


    newCardBody.appendChild(titel);
    newCardBody.appendChild(cardtext);
    newCardBody.appendChild(cardbutton);
    newCardContainer.appendChild(newCardBody);
    let historyCardsContainer = document.getElementById("historycards");
    historyCardsContainer.appendChild(newCardContainer);
}


window.addEventListener("load", setup);
