const saveHistoryToLocalStorage = () => {
    localStorage.setItem("history", JSON.stringify(global.HISTORY));
}

const loadHistoryFromLocalStorage = () => {
    const history = localStorage.getItem("history");
    if (history) {
        global.HISTORY = JSON.parse(history);
        // Na het laden van de geschiedenis, de kaarten opnieuw maken
        global.HISTORY.forEach(item => {
            creerCard(item);
        });
    }
}

const setup = () => {
    const button = document.getElementById("GO");
    button.addEventListener("click", start);
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
                creerURL(input); // Doorgeven van de hele input
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

const creerURL = (input) => {
    const gezochtePrefix = input.slice(0, 2);
    const zoekopdracht = input.slice(3); // Correcte index voor de zoekopdracht

    let url;
    if (gezochtePrefix === "/g") {
        url = "https://www.google.com/search?q=" + encodeURIComponent(zoekopdracht);
    } else if (gezochtePrefix === "/y") {
        url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(zoekopdracht);
    } else if (gezochtePrefix === "/i") {
        url = "https://www.instagram.com/explore/tags/" + encodeURIComponent(zoekopdracht);
    } else if (gezochtePrefix === "/t") {
        url = "https://twitter.com/search?q=" + encodeURIComponent(zoekopdracht);
    }

    window.open(url, "_blank");
    global.HISTORY.push({ title: global.VERTALINGPREFIX[global.PREFIXES.indexOf(gezochtePrefix)], text: zoekopdracht, url });
    creerCard(global.HISTORY[global.HISTORY.length - 1], gezochtePrefix); // Doorsturen van gezochtePrefix
}

const creerCard = (item, gezochtePrefix) => { // Ontvangen van gezochtePrefix
    const history = document.getElementById("history");

    let newCardContainer = document.createElement("div");
    newCardContainer.classList.add("card");
    newCardContainer.style.width = "18rem";
    newCardContainer.style.padding="30px";
    if (gezochtePrefix === "/g") {
        newCardContainer.style.background = "#4285F4";
    } else if (gezochtePrefix === "/y") {
        newCardContainer.style.background = "#FF0000";
    } else if (gezochtePrefix === "/i") {
        newCardContainer.style.background = "#E4405F";
    } else if (gezochtePrefix === "/t") {
        newCardContainer.style.background = "#1da1F2";
    }

    let newCardBody = document.createElement("div");
    newCardBody.classList.add("card-body");

    let titel = document.createElement("h5");
    titel.classList.add("card-title");
    titel.innerText = item.title;
    titel.style.color="white";

    let cardtext = document.createElement("p");
    cardtext.classList.add("card-text");
    cardtext.innerText = item.text;
    cardtext.style.color="white";

    let cardbutton = document.createElement("a");
    cardbutton.classList.add("card-button");
    cardbutton.href = item.url;
    cardbutton.target = "_blank";
    cardbutton.innerText = "Go!";
    cardbutton.style.background="#000000";
    cardbutton.style.color = "#FFFFFF";



    newCardBody.appendChild(titel);
    newCardBody.appendChild(cardtext);
    newCardBody.appendChild(cardbutton);

    newCardContainer.appendChild(newCardBody);
    history.appendChild(newCardContainer);
}

window.addEventListener("load", setup);
