const setup = () => {

	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
const zin = "De man van An geeft geen hand aan ambetante verwanten".toLowerCase();
const zoek = "an";

// indexOf
let countIndexOf = 0;
let index = zin.indexOf(zoek);
while (index !== -1) {
    countIndexOf++;
    index = zin.indexOf(zoek, index + 1);
}

// lastIndexOf
let countLastIndexOf = 0;
let lastIndex = zin.lastIndexOf(zoek);
while (lastIndex !== -1) {
    countLastIndexOf++;
    lastIndex = zin.lastIndexOf(zoek, lastIndex - 1);
}

console.log(`"an" komt met indexOf: ${countIndexOf} keer voor.`);
console.log(`Met lastIndexOf komt "an" ${countLastIndexOf} keer voor.`);



window.addEventListener("load", setup);