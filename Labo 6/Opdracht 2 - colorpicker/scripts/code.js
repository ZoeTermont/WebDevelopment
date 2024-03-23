const setup = () => {
    // swatch waarden rgb + samenvoegen + backgroundColor op samenvoeging zetten
    const updateSwatch = () => {
        const roodWaarde = roodS.value;
        const groenWaarde = groenS.value;
        const blauwWaarde = blauwS.value;
        const rgbKleur = `rgb(${roodWaarde}, ${groenWaarde}, ${blauwWaarde})`;
        origineleSwatch.style.backgroundColor = rgbKleur;
    }

    // gecopieerde kleuren
    // = als boven en gebruik om in copied te steken --> create element div + classlist doen
    // fix x
    const kopieerKleur = () => {
        const roodValue = roodS.value;
        const groenValue = groenS.value;
        const blauwValue = blauwS.value;
        const rgbKleur = `rgb(${roodValue}, ${groenValue}, ${blauwValue})`;

        const gekopieerdeKleur = document.createElement('div');
        gekopieerdeKleur.classList.add('copied-color');
        gekopieerdeKleur.style.backgroundColor = rgbKleur;

        const deleteButton = document.createElement('span');
        deleteButton.innerText = 'x';
        deleteButton.addEventListener('click', function () {
            gekopieerdeKleur.remove();
        });

        gekopieerdeKleur.appendChild(deleteButton);
        copiedcolors.appendChild(gekopieerdeKleur);

        gekopieerdeKleur.addEventListener('click', function () {
            origineleSwatch.style.backgroundColor = rgbKleur;
        });
    }
    //sliders (id: rood, groen, blauw) swatch (queryselector(.swatch)) copies id(copykleurenlijst)
    const roodS = document.getElementById('rood');
    const groenS = document.getElementById('groen');
    const blauwS = document.getElementById('blauw');
    const origineleSwatch = document.querySelector('.swatch');
    const copyButton = document.getElementById('copykleur');
    const copiedcolors = document.getElementById('copykleurenlijst');

    // eventlisteners voor d sliders (updateswatch) en d button
    roodS.addEventListener('input', updateSwatch);
    groenS.addEventListener('input', updateSwatch);
    blauwS.addEventListener('input', updateSwatch);
    copyButton.addEventListener('click', kopieerKleur);
}

    window.addEventListener("load", setup);
