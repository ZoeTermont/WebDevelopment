const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    //array van 5
    let familie = ["Zoe", "Alex", "Greet", "Francois", "Minou"];
    console.log(`eerste element: ${familie[0]}, derde element: ${familie[2]}, vijfde element: ${familie[4]}`);
    //extra naam
    let voegNaamToe=window.prompt("Geef een zesde naam.", "Bob");
    familie.push(voegNaamToe);
    console.log(familie.join());

    window.alert("Dit is een mededeling");
    let confirm=window.confirm("Weet u het zeker?");
    console.log(confirm);
    let prompt=window.prompt("Wat is uw naam", "onbekend");
    console.log(prompt);




}
window.addEventListener("load", setup);
