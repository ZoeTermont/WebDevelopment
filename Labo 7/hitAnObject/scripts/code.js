// TO BE FIXED
// verspringt te snel na aanklikken (een keer, erna is ok)

const setup = () => {
    const startbutton = document.getElementById("start");
    startbutton.addEventListener("click", startspel);

    const img = document.querySelector("#speelveld img");
    img.style.display="none";

    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    // Stap 6: Elke seconde een bericht op de console weergeven
    setInterval(() => {
        console.log("Elke seconde een bericht op de console!");
    }, 1000); // 1000 milliseconden is gelijk aan 1 seconde

    global.timeoutId = setInterval(randomImg, 2000);
}

let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const startspel = () => {

    const startbutton = document.getElementById("start");
    startbutton.style.display = "none";

    //image dingen
    const img = document.querySelector("#speelveld img");
    const getimg = Math.floor(Math.random() * global.IMAGE_COUNT);
    const randomX = Math.ceil(Math.random() * (600 - global.IMAGE_SIZE + 5));
    const randomY = Math.ceil(50 + Math.random() * (800 - global.IMAGE_SIZE + 5));
    img.src = `${global.IMAGE_PATH_PREFIX}${getimg}${global.IMAGE_PATH_SUFFIX}`;
    img.style.position = "absolute";
    img.style.top = randomY + "px";
    img.style.left = randomX + "px";
    img.style.display = "block";
    imgInterval();
    //bij klikken geen interval, anders wel
    img.addEventListener("click", (event) => {
        // Controleren of er geklikt is op de afbeelding
        if (event.target === img) {
            img.addEventListener("click", checkklik);
        }
        else{
            imgInterval();
        }
    });
}
//interval functie hier
const imgInterval=()=>{
    setInterval(() => {
        changeimg()
    }, global.MOVE_DELAY);
}

const changeimg = () => {
    const img = document.querySelector("#speelveld img");

    const getimg = Math.floor(Math.random() * global.IMAGE_COUNT);
    const randomX = Math.ceil(global.IMAGE_SIZE+Math.random() * (600 - global.IMAGE_SIZE + 5));
    const randomY = Math.ceil(global.IMAGE_SIZE + Math.random() * (800 - global.IMAGE_SIZE + 5));

    img.src = `${global.IMAGE_PATH_PREFIX}${getimg}${global.IMAGE_PATH_SUFFIX}`;
    img.style.position = "absolute";
    img.style.top = randomY + "px";
    img.style.left = randomX + "px";
}

const checkklik = () => {
    console.log("klik!");
    const img = document.querySelector("#speelveld img");
    const scoreElement = document.getElementById("score");

    if (img.src.includes("0.png")) {
        gameOver();
    } else {
        changeimg();
        global.score++;
        scoreElement.innerHTML = `Huidige score: ${global.score}`;
    }
}

const gameOver = () => {
    clearTimeout(global.timeoutId);
    window.alert(`game over, je score was ${global.score}`);
    global.score=0;
}

window.addEventListener("load", setup);
