const generateArray = function(amount) {
    let returnArray = [];

    /*
    let amountConverted = parseInt(amount)
    amount = amountConverted; // ua, mint lenti
    */

    amount = parseInt(amount); // ha nem szám = NaN, de a NaN (Not a Number) is egy szám
    //console.log(amount);

    if (!Number.isNaN(amount)) {
        //console.log("Az amount egy szám.");
        for (let i = 0; i < amount; i++) {
            if (i > 999) {
                returnArray.push(`${i}`);
            } else if (i > 99) {
                returnArray.push(`0${i}`);
            } else if (i > 9) {
                returnArray.push(`00${i}`);
            } else {
                returnArray.push(`000${i}`);
            }
        }
    } else {
        // console.log("Az amount NEM egy szám.");
        returnArray.push("error");
    }

    return returnArray;
}

const loadEvent = function() {
    console.log("Az oldal betöltődött.");

    // console.log(generateArray(100));
    // console.log(generateArray(15));
    // console.log(generateArray("stringelt kiskutya"));
    // console.log(generateArray(true));
    // console.log(generateArray([2, 5]));
    // console.log(generateArray(15e3)); // hehe

    const root = document.getElementById("root");
    const list = generateArray(1e3);

    // const length = 

    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div>${item}</div>`)
        }
    }
}

window.addEventListener("load", loadEvent);

/* 
window.addEventListener("load", function() {
    ez is ugyanaz kb, mint a fenti, ált a loadEventet nem akarjuk többször meghívni
});
*/

/* 
window.addEventListener("load", () => {
    ez is ugyanaz kb, mint a fenti, ált a loadEventet nem akarjuk többször meghívni
});
*/