const setup = () => {
    const knop = document.getElementById("button");
    knop.addEventListener("click", addGemeente);
    //const dd = document.getElementsByTagName("gemeentes");


    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}

const addGemeente = () => {
    let stop = false;
    const gemeentes = [];

    while (stop !== true) {
        let add = window.prompt("Toe te voegen gemeente:", "Gemeente");

        if (add === "stop") {
            stop = true;
        } else {
            gemeentes.push(add);
        }
    }

    //sorteren + lijst
    gemeentes.sort();
    console.log(gemeentes.toString());
    let lijst = document.getElementById("lijst");

    for (let i = 0; i < gemeentes.length; i++) {
        lijst.innerHTML += "<option value=" + gemeentes[i] + ">" + gemeentes[i] + "</option>";
    }

}


window.addEventListener("load", setup);