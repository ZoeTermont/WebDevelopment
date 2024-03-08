const setup = () => {
    const spaties=document.getElementById("spaties");
    spaties.addEventListener("click",addSpaties);
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
let inputElement = document.getElementById("input");
const addSpaties=()=>{

if (inputElement) {
    let input = inputElement.value;
    let nieuweString = "";
    for (let i = 0; i < input.length; i++) {
        nieuweString += input.charAt(i) + " ";
    }
    document.getElementById("output").textContent = nieuweString;
    console.log(nieuweString);
}

}

window.addEventListener("load", setup);