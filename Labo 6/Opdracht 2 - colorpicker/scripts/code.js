    const setup = () => {
        // variabelen hier (sliders, swatch, button, kleuren (?)
        const roodS = document.getElementById('rood');
        const groenS = document.getElementById('groen');
        const blauwS = document.getElementById('blauw');
        const origineleSwatch = document.querySelector('.swatch');
        const copyButton = document.getElementById('copykleur');
        const copiedcolors = document.getElementById('copykleurenlijst');
        //eventlisteners input, update (sliders) en dannog 'click', kopieerkleur (button)
        roodS.addEventListener('input', updateSwatch);
        groenS.addEventListener('input', updateSwatch);
        blauwS.addEventListener('input', updateSwatch);
        copyButton.addEventListener('click', kopieerKleur);
    };

    // update swatch (sliders van boven .value) --> swatchkleur = `rgb(${roodNaam}, ${groenNaam}, ${blauwNaam})`
    const updateSwatch = () => {
        const roodWaarde = roodS.value;
        const groenWaarde = groenS.value;
        const blauwWaarde = blauwS.value;
        const rgbKleur = `rgb(${roodWaarde}, ${groenWaarde}, ${blauwWaarde})`;
        origineleSwatch.style.backgroundColor = rgbKleur;
    }

    // copied colors
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
        deleteButton.addEventListener('click', function() {
            gekopieerdeKleur.remove();
        });

        gekopieerdeKleur.appendChild(deleteButton);
        copiedcolors.appendChild(gekopieerdeKleur);

        gekopieerdeKleur.addEventListener('click', function() {
            origineleSwatch.style.backgroundColor = rgbKleur;
        });
    }
    window.addEventListener("load", setup);

