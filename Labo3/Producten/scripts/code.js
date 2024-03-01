const setup = () => {
    const btn = document.getElementById("berekenTotaal");
    btn.addEventListener("click", calc);
    calc();
}
const calc = () =>
{
    const hoev = document.getElementsByClassName("hoev")
    const prijs = document.getElementsByClassName("prijs");
    const btw = document.getElementsByClassName("btw");
    const subTot = document.getElementsByClassName("subTot");

    for(let i = 0; i<hoev.length; i++)
    {
        let sub = parseFloat(prijs[i].textContent) * parseFloat(hoev[i].value);
        subTot[i].innerHTML = (sub + (parseInt(btw[i].textContent)/100.00)*sub).toFixed(2) + " euro";
    }

    let totalCount = 0;
    const total = document.getElementById("totaal");
    for(let i = 0; i<subTot.length; i++)
    {
        totalCount += parseFloat(subTot[i].textContent);
    }
    total.innerHTML = totalCount.toFixed(2) + " euro";
}


window.addEventListener("load", setup);