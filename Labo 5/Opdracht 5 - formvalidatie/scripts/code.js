const setup = () => {
    const validatie = document.getElementById("validatie");
    validatie.addEventListener("click", validator);
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}

const validator = () => {
    // Voornaam
    let vn = document.getElementById("voornaam").value;
    let vnlen = vn.length;
    let vnError = document.getElementById("voornaamError");

    if (vnlen > 30) {
        vnError.textContent = "Voornaam mag max 30 karakters hebben. Huidige lengte: " + vnlen;
        document.getElementById("voornaam").classList.add("error");
    } else {
        vnError.textContent = "";
        document.getElementById("voornaam").classList.remove("error");
    }

    // Familienaam
    let an = document.getElementById("familienaam").value;
    let anlen = an.length;
    let anError = document.getElementById("familienaamError");

    if (anlen > 50) {
        anError.textContent = "Familienaam mag max 50 karakters hebben. Huidige lengte: " + anlen;
        document.getElementById("familienaam").classList.add("error");
    } else if (anlen === 0) {
        anError.textContent = "Familienaam mag niet leeg zijn.";
        document.getElementById("familienaam").classList.add("error");
    } else {
        anError.textContent = "";
        document.getElementById("familienaam").classList.remove("error");
    }

    // Geboortedatum
    let gebd = document.getElementById("gebdat").value;
    let gebdSplit = gebd.split("-");
    let gebdError = document.getElementById("gebdatError");

    if (gebd.length === 0) {
        gebdError.textContent = "Geboortedatum mag niet leeg zijn.";
        document.getElementById("gebdat").classList.add("error");
    } else if (gebdSplit[0].length < 4 || gebdSplit[1] > 12) {
        gebdError.textContent = "Formaat is niet jjjj-mm-dd.";
        document.getElementById("gebdat").classList.add("error");
    } else {
        gebdError.textContent = "";
        document.getElementById("gebdat").classList.remove("error");
    }

    // Email
    let emailadr = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let splitemail = emailadr.split("@");

    if (splitemail[0].length < 1 || splitemail[1].length < 1) {
        emailError.textContent = "Ongeldig emailadres.";
        document.getElementById("email").classList.add("error");
    } else {
        emailError.textContent = "";
        document.getElementById("email").classList.remove("error");
    }

    // Aantal kinderen
    let kids = document.getElementById("kinderen").value;
    let kidsError = document.getElementById("kinderenError");

    if (kids < 0) {
        kidsError.textContent = kids + " kinderen? Serieus? Probeer opnieuw.";
        document.getElementById("kinderen").classList.add("error");
    } else if (kids > 99) {
        kidsError.textContent = kids + " kinderen? Hoe vruchtbaar kan iemand zijn?! Probeer opnieuw";
        document.getElementById("kinderen").classList.add("error");
    } else {
        kidsError.textContent = "";
        document.getElementById("kinderen").classList.remove("error");
    }

    // Controleer of er geen enkele foutmelding is
    if (
        vnError.textContent === "" &&
        anError.textContent === "" &&
        gebdError.textContent === "" &&
        emailError.textContent === "" &&
        kidsError.textContent === ""
    ) {
        window.alert("Proficiat! Alle velden zijn correct ingevuld.");
    }
}

window.addEventListener("load", setup);
