const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let substringBtn = document.getElementById("substring");
    substringBtn.addEventListener("click", substring);

}

const substring = () => {
    let userInput = document.getElementById("fullWord");
    let beginIndexTekst = document.getElementById("beginIndex");
    let eindIndexTekst = document.getElementById("eindIndex");
    let output = document.getElementById("txtOutput");

    let word = userInput.value;
    let beginIndex = parseInt(beginIndexTekst.value, 10);
    let eindIndex = parseInt(eindIndexTekst.value, 10);

    output.innerHTML = word.substring(beginIndex, eindIndex);
}

window.addEventListener("load", setup);