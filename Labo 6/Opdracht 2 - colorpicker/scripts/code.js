document.addEventListener("DOMContentLoaded", function() {
    const roodS = document.getElementById('rood');
    const groenS = document.getElementById('groen');
    const blauwS = document.getElementById('blauw');
    const gecopkleuren = document.querySelector('.swatch');
    const copybtn = document.getElementById('copykleur');
    const copiedlijst = document.getElementById('copykleurenlijst');

    function updateColor() {
        const roodget = roodS.value;
        const groenget = groenS.value;
        const blauwget = blauwS.value;
        const rgbColor = `rgb(${roodget}, ${groenget}, ${blauwget})`;
        gecopkleuren.style.backgroundColor = rgbColor;
    }

    roodS.addEventListener('input', updateColor);
    groenS.addEventListener('input', updateColor);
    blauwS.addEventListener('input', updateColor);

    copybtn.addEventListener('click', function() {
        const redValue = roodS.value;
        const greenValue = groenS.value;
        const blueValue = blauwS.value;
        const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

        const copiedColor = document.createElement('div');
        copiedColor.classList.add('copied-color');
        copiedColor.style.backgroundColor = rgbColor;

        const deleteButton = document.createElement('span');
        deleteButton.innerText = 'x';
        deleteButton.addEventListener('click', function() {
            copiedColor.remove();
        });

        copiedColor.appendChild(document.createTextNode(rgbColor));
        copiedColor.appendChild(deleteButton);
        copiedlijst.appendChild(copiedColor);

        copiedColor.addEventListener('click', function() {
            gecopkleuren.style.backgroundColor = rgbColor;
        });
    });
});
