const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

}
let startW="onoorbaar";
let output="";

    for(let i=0;i<startW.length;i++){
        if(i<startW.length-2){
        let woord=startW.slice(i,i+3);
        output+=woord+" ";
    }

    }

console.log(output);


window.addEventListener("load", setup);