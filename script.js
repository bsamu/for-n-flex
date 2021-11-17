const loadEvent = function() {
    console.log("Az oldal betöltődött.");

    const root = document.getElementById("root");
    const list = generateArray(input);

    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div>${item}</div>`)
        }
    }
}

/* 
const generateArray = function(amount) {
    let returnArray = [];

    amount = parseInt(amount);

    if (!Number.isNaN(amount)) {
        for (let i = 0; i < amount; i++) {
            if (i > 1000) {
                returnArray.push(`${i}`);
            } else if (i > 100) {
                returnArray.push(`0${i}`);
            } else if (i > 10) {
                returnArray.push(`00${i}`);
            } else {
                returnArray.push(`000${i}`);
            }
        }
    } else {
        returnArray.push("error");
    }

    return returnArray;
}
*/

const input = 10000;
var lengthOfInput = input.toString().length;
console.log(lengthOfInput);

const generateArray = function(amount) {
    let returnArray = [];

    amount = parseInt(amount);

    if (amount % 10) {
        lengthOfInput = lengthOfInput;
        console.log(lengthOfInput);
    } else {
        lengthOfInput = lengthOfInput - 1;
        console.log(lengthOfInput);
    }

    if (!Number.isNaN(amount)) {
        for (let i = 0; i < amount; i++) {
            let j = i.toString().padStart(lengthOfInput, "0");
                returnArray.push(`${j}`);
        }
    } else {
        returnArray.push("error");
    }

    return returnArray;
}

window.addEventListener("load", loadEvent);