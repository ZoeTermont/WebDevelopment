const setup = () => {
    let lis=document.querySelectorAll('li');
    let style=document.getElementsByClassName("listitem");
 for(let i=0;i<lis.length;i++){
     lis[i].classList.add('listitem');
     style[i].style.color='red';
 }


 let img=document.createElement('img');
 img.src="images/ZoeT.jpg"; img.alt="foto";
 img.height="300";
 document.body.appendChild(img);



	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}


window.addEventListener("load", setup);