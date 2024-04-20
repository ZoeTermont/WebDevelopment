const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
let student={
    voornaam:"Zoe",
    achternaam:"Termont",
    geboorteDatum:new Date("2002/07/12"),
    adres:{
        straat:"letterstraat 26",
        postcode:"1234",
        gemeente:"alfabetstad"
    },
    favorieteshow:"pingu",
    identityCrisis:"false",
    hobbies:["slapen", "dragrace", "dutten", "lezen", "irriteren","pingu kijken"],
}

let tekst=JSON.stringify(student);
console.log(tekst);

let student1=JSON.parse(JSON.stringify(student));
console.log(student1);

window.addEventListener("load", setup);