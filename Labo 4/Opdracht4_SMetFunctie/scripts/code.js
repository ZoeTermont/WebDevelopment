const setup = () => {
    const spatiesn = document.getElementById("spaties");
    spaties.addEventListener("click", addSpaties);
}

const addSpaties = () => {
    const inputString = document.getElementById("input");
    const outputString = document.getElementById("output");

    if (inputString && outputString) {
        const input = inputString.value;
        let nieuweString = "";

        for (let i = 0; i < input.length; i++) {
            nieuweString += input.charAt(i) + " ";
        }

        outputString.textContent = nieuweString;
        console.log(nieuweString);
    }
}

window.addEventListener("load", setup);
