/*
Entonces,
guardar values y cargar values
no es muy difícil, verdad? estás muy muy equivocado ... (˘･_･˘) ...

array voor opgeslagen swatches + methode die ze toont (haal dingen van save??)
in save: check of swatch al opgeslagen werd (zoniet smijt in array & smijt al d dingen voor t ° daarin)
opslaan sliders .value ofc + localStorage.setItem + stringify
bij herladen:: idk figure it out someway somehow
 */

const setup = () => {
    const sliderrood = document.getElementById('sliderrood');
    const slidergroen = document.getElementById('slidergroen');
    const sliderblauw = document.getElementById('sliderblauw');
    const savebtn = document.getElementById("savebtn");

    loadSettings();

    sliderrood.addEventListener('change', update);
    slidergroen.addEventListener('change', update);
    sliderblauw.addEventListener('change', update);
    savebtn.addEventListener("click", save);
}

// Array om opgeslagen kleurswatches bij te houden
let savedSwatches = [];

const update = () => {
    let slider = document.getElementsByClassName("slider");
    let labelslider = document.getElementsByClassName("rgb");
    let rgb = "rgb(";

    for(let i=0;i<slider.length;i++) {

        if (i === 0) {
            labelslider[i].innerHTML = slider[i].value;
            rgb += slider[i].value + ",";
        } else if (i === 1) {
            labelslider[i].innerHTML = slider[i].value;
            rgb += slider[i].value + ",";
        } else {
            labelslider[i].innerHTML = slider[i].value;
            rgb += slider[i].value + ")";
        }
    }

    let prev = document.getElementById("swatch");
    prev.style.background = rgb;

    saveColorAndSliderPositions(rgb);
}

const save = () => {
    let slider = document.getElementsByClassName("slider");
    let rgb = "rgb(";

    for(let i=0;i<slider.length;i++){

        if(i===0){
            rgb+=slider[i].value+",";
        }
        else if(i===1){
            rgb+=slider[i].value+",";
        }
        else{
            rgb+=slider[i].value+")";
        }
    }

    // Controleer of de kleurswatch al is opgeslagen
    if (!isColorAlreadySaved(rgb)) {
        savedSwatches.push(rgb);
        saveSwatchesToLocalStorage(savedSwatches);

        let newsaved = document.createElement('div');
        newsaved.style.background = rgb;
        newsaved.classList.add("savedswatch");
        let container = document.getElementById("saved");
        container.appendChild(newsaved);
        newsaved.addEventListener("click", function(event) { clickedswatch(event, savedSwatches.length - 1) });

        let close = document.createElement("button");
        close.classList.add("close");
        close.innerHTML = "x";
        newsaved.appendChild(close);
        close.addEventListener("click", function () { removeSwatch(savedSwatches.length - 1) });
    }
}

const clickedswatch = (event, index) => {
    let current = event.currentTarget;
    let prev = document.getElementById("swatch");
    prev.style.background = current.style.background;

    let rgb = current.style.background.split(",");
    let rgbrood = rgb[0].trim().substring(4);
    let rgbgroen = rgb[1].trim();
    let rgbblauw = rgb[2].trim().substring(0, rgb[2].length - 2);

    let sliderrood = document.getElementById('sliderrood');
    sliderrood.value = rgbrood;
    let slidergroen = document.getElementById('slidergroen');
    slidergroen.value = rgbgroen;
    let sliderblauw = document.getElementById('sliderblauw');
    sliderblauw.value = rgbblauw;

    let labelslider = document.getElementsByClassName("rgb");
    labelslider[0].innerHTML = rgbrood;
    labelslider[1].innerHTML = rgbgroen;
    labelslider[2].innerHTML = rgbblauw;
}

const saveColorAndSliderPositions = (color) => {
    localStorage.setItem('selectedColor', color);

    let sliderrood = document.getElementById('sliderrood').value;
    let slidergroen = document.getElementById('slidergroen').value;
    let sliderblauw = document.getElementById('sliderblauw').value;
    //rood = key; sliderrood = value;
    localStorage.setItem('sliderPositions', JSON.stringify({ rood: sliderrood, groen: slidergroen, blauw: sliderblauw }));
}

const loadSettings = () => {
    const selectedColor = localStorage.getItem('selectedColor');
    const sliderPositions = JSON.parse(localStorage.getItem('sliderPositions'));
    const savedSwatchesJSON = localStorage.getItem('savedSwatches');

    if (selectedColor) {
        let prev = document.getElementById("swatch");
        prev.style.background = selectedColor;
    }

    if (sliderPositions) {
        let sliderrood = document.getElementById('sliderrood');
        let slidergroen = document.getElementById('slidergroen');
        let sliderblauw = document.getElementById('sliderblauw');

        sliderrood.value = sliderPositions.rood;
        slidergroen.value = sliderPositions.groen;
        sliderblauw.value = sliderPositions.blauw;

        let labelslider = document.getElementsByClassName("rgb");
        labelslider[0].innerHTML = sliderPositions.rood;
        labelslider[1].innerHTML = sliderPositions.groen;
        labelslider[2].innerHTML = sliderPositions.blauw;
    }

    if (savedSwatchesJSON) {
        savedSwatches = JSON.parse(savedSwatchesJSON);
        showSavedSwatches(savedSwatches);
    }
}

const isColorAlreadySaved = (color) => {
    return savedSwatches.includes(color);
}

const saveSwatchesToLocalStorage = (swatches) => {
    localStorage.setItem('savedSwatches', JSON.stringify(swatches));
}

const showSavedSwatches = (swatches) => {
    let container = document.getElementById("saved");
    container.innerHTML = ""; // Leeg de container eerst om dubbele weergave te voorkomen
    swatches.forEach((rgb, index) => {
        let newsaved = document.createElement('div');
        newsaved.style.background = rgb;
        newsaved.classList.add("savedswatch");
        container.appendChild(newsaved);
        newsaved.addEventListener("click", function(event) { clickedswatch(event, index) });

        let close = document.createElement("button");
        close.classList.add("close");
        close.innerHTML = "x";
        newsaved.appendChild(close);
        close.addEventListener("click", function () { removeSwatch(index) });
    });
}

const removeSwatch = (index) => {
    savedSwatches.splice(index, 1);
    saveSwatchesToLocalStorage(savedSwatches);
    showSavedSwatches(savedSwatches);
}

window.addEventListener("load", setup);
