/*
// original version, ~77. sor, loadEventben 1 sor kell + ba
const generateArray = function(amount) {
    let returnArray = [];
    
    // let amountConverted = parseInt(amount)
    // amount = amountConverted; // ua, mint lenti
    
    amount = parseInt(amount); // ha nem szám = NaN, de a NaN (Not a Number) is egy szám
    //console.log(amount);
    if (!Number.isNaN(amount)) {
        //console.log("Az amount egy szám.");
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);
        }
    } else {
        // console.log("Az amount NEM egy szám.");
        returnArray.push("error");
    }
    return returnArray;
}
*/

// ----------------------------------------------------------

/*
//alpha verzió

const input = 1000;

const generateArray = function(amount) {
    let returnArray = [];

    
    // let amountConverted = parseInt(amount)
    // amount = amountConverted; // ua, mint lenti
    

    amount = parseInt(amount); // ha nem szám = NaN, de a NaN (Not a Number) is egy szám
    //console.log(amount);

    if (!Number.isNaN(amount)) {
        //console.log("Az amount egy szám.");
        
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
        // console.log("Az amount NEM egy szám.");
        returnArray.push("error");
    }

    return returnArray;
}
*/

// ----------------------------------------------------------

// const input = 1000;
// let lengthOfInput = input.toString().length;
// console.log(lengthOfInput);

// const generateArray = function(amount) {
//     let returnArray = [];

//     amount = parseInt(amount);

//     if (amount % 10) {
//         lengthOfInput = lengthOfInput;
//         console.log(lengthOfInput);
//     } else {
//         lengthOfInput = lengthOfInput - 1;
//         console.log(lengthOfInput);
//     }

//     if (!Number.isNaN(amount)) {
//         for (let i = 0; i < amount; i++) {
//             let j = i.toString().padStart(lengthOfInput, "0");
//                 returnArray.push(`${j}`);
//         }
//     } else {
//         returnArray.push("error");
//     }

//     return returnArray;
// }

// ----------------------------------------------------------

// már tanult módszerekkel

// const input = 1000;
// let lengthOfInput = input.toString().length;
// console.log(lengthOfInput);

// const generateArray = function(amount) {
//     let returnArray = [];

//     amount = parseInt(amount);

//     if (amount % 10) {
//         lengthOfInput = lengthOfInput;
//         console.log(lengthOfInput);
//     } else {
//         lengthOfInput = lengthOfInput - 1;
//         console.log(lengthOfInput);
//     }

//     if (!Number.isNaN(amount)) {
//         for (let i = 0; i < amount; i++) {
//             // const j = i.toString().padStart(lengthOfInput, "0");
//             const currentLength = i.toString().length;
//             const noOfZeros = lengthOfInput - currentLength;
//             const zeros = "0".repeat(noOfZeros);
//             // const iInString = zeros + i;
//             // const iInNum = parseInt(iInString);

//             // console.log(typeof iInString);
//             // console.log(typeof iInNum);
//             // console.log(iInNum);
//             // console.log(iInString);
//             // console.log(zeros);
//             // console.log(noOfZeros);
//             // console.log(currentLength);
//             returnArray.push(`${zeros + i}`);
//         }
//     } else {
//         returnArray.push("error");
//     }

//     return returnArray;
// }

// ----------------------------------------------------------

// minden 100% tanult anyag

const input = 1000;
let lengthOfInput = input.toString().length;
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
            const currentLength = i.toString().length;
            const noOfZeros = lengthOfInput - currentLength;

            let element = '';

            for (let j = 0; j < noOfZeros; j++) {
                element = element + "0";
            }
            returnArray.push(`${element + i}`);
        }
    } else {
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
    const list = generateArray(input);
    //const list = generateArray(1000); // original verziónál így kell

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