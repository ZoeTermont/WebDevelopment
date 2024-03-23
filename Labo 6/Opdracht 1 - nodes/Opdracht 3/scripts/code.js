const setup = () => {
    let button=document.getElementById("button");
    button.addEventListener("click",paragraph)
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
const paragraph=()=>{
    let p=document.createElement("p");
    p.textContent="lorem ipsum dingen";
    document.getElementById('myDIV').appendChild(p);
}

window.addEventListener("load", setup);