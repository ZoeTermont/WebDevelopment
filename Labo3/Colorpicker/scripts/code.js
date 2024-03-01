const setup = () => {
    const roodS = document.getElementById("roodS");
    const groenS = document.getElementById("groenS");
    const blauwS = document.getElementById("blauwS");
    update();
    roodS.addEventListener("change", update);
    groenS.addEventListener("change", update);
    blauwS.addEventListener("change", update);
}
const update = () =>{
    const values = document.getElementsByClassName("Value");
    const sliders = document.getElementsByClassName("sliders");
    let rgb = "rgb(";
    for(let i = 0; i<sliders.length; i++){
        values[i].innerHTML = sliders[i].value;
        rgb += sliders[i].value;
        if(i === (sliders.length - 1)){
            rgb += ")";
        }else{
            rgb += ", ";
        }
    }
    const preV = document.getElementById("preV");
    preV.style.backgroundColor = rgb;
}
window.addEventListener("load", setup);