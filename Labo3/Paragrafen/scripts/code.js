const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

const paragrafen=document.getElementsByTagName("belangrijk");

   for(let i=paragrafen.length;i>0;i--)
   {
      important[i].classList.add("opvallend")
   }
}
window.addEventListener("load", setup);