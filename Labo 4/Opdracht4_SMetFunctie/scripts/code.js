const setup = () => {
    const spatiesButton = document.getElementById("spaties");
    spatiesButton.addEventListener("click", addSpaties);
}

const addSpaties = () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    if (input && output) {
        const input = input.value;
        let nieuweString = "";

        for (let i = 0; i < input.length; i++) {
            nieuweString += input.charAt(i) + " ";
        }

        output.textContent = nieuweString;
        console.log(nieuweString);
    }
}

window.addEventListener("load", setup);