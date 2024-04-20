const setup = () => {
    const start=document.getElementById('calculate');
    start.addEventListener('click',dagen);
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}

const dagen=()=> {
    let input = document.querySelector('input').value;
    const tday = new Date();


    if (input == "") {
        window.alert("I'm amazing but even I need smth to calculate with...");
    }
    input = new Date(input);
    if (input > tday) {
        window.alert("Time travel is real!\n No but fr, check date pls");
    } else {
        const verschil = tday - input;
        const alive = Math.floor(verschil / (1000 * 60 * 60 * 24));
        //output
        document.getElementById('output').innerHTML = "Number of days breathing: " + alive;
        console.log(alive);
    }
}


window.addEventListener("load", setup);