//wil geen contact updaten


let personen = [
    {
        Voornaam: 'Jan',
        Familienaam: 'Janssens',
        GeboorteDatum: '2010-10-10',
        Email: 'jan@example.com',
        AantalKinderen: 0
    },
    {
        Voornaam: 'Mieke',
        Familienaam: 'Mickelsen',
        GeboorteDatum: '1980-01-01',
        Email: 'mieke@example.com',
        AantalKinderen: 1
    },
    {
        Voornaam: 'Piet',
        Familienaam: 'Pieters',
        GeboorteDatum: '1970-12-31',
        Email: 'piet@example.com',
        AantalKinderen: 2
    }
];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {

    const persoonlijst = document.querySelector("#lstPersonen");
    const index = persoonlijst.options.selectedIndex;
    console.log("Klik op de knop bewaar");

    //check corr
    if(valideer()) {

        let person = {};
        const inputs = document.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type !== "button") {
                person[inputs[i].id.slice(3)] = inputs[i].value;
            }
        }

        if (index === -1) {
            personen.push(person);
            let naam = person.Voornaam + " " + person.Familienaam;
            persoonlijst.innerHTML += `<option>${naam}</option>`;
        } else {
            personen[index] = person;
            let naam
                = person.Voornaam + " " + person.Familienaam;
            persoonlijst.options[index].innerHTML = `${naam}`;
        }
    }
};


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    const lstpers = document.querySelector("#lstPersonen");
    const inputs = document.querySelectorAll("input");

    lstpers.options.selectedIndex = -1;

     for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].type !== "button") {
            inputs[i].value = "";
        }
    }
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};



const persoonGegevens = () =>{
    let index = document.getElementById("lstPersonen").options.selectedIndex;
    let inputs = document.querySelectorAll(`input`);

    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type !== "button") {
            let id = inputs[i].id.slice(3);
            inputs[i].value = personen[index][`${id}`];
        }
    }

}

// onze setup functie die de event listeners registreert
const setup = () => {

    const lstpersoon = document.querySelector("#lstPersonen");
    for(let i = 0; i < personen.length; i++) {
        let person = personen[i];
        let txt = person.Voornaam + " " + person.Familienaam;
        lstpersoon.innerHTML += `<option>${txt}</option>`;
    }

    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", persoonGegevens);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);