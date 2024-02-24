const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";

// Elementen selecteren
    let tekstElement = document.getElementById('tekst');
    let wijzigKnop = document.getElementById('wijzigKnop');

// Eventlistener toevoegen aan de wijzigknop
    wijzigKnop.addEventListener('click', function() {
        // Tekst wijzigen
        tekstElement.textContent = "Welkom!";
    });
}

window.addEventListener("load", setup);