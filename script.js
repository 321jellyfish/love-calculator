const submitNames = document.querySelector('.submitNames');
const equationResult = document.querySelector('#equationResult');

let magicAlphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
}

submitNames.addEventListener("click", checkCompatibility);

function checkCompatibility(){
    let firstName = document.getElementById("yourNameField").value;
    let crushName = document.getElementById("crushNameField").value;

    //make names lower case to ensure case insensitivity
    firstName = firstName.toLowerCase();
    crushName = crushName.toLowerCase();

    let matchingLetters = [];

    for(let i = 0; i < firstName.length; i++){
        for(let j = 0; j < crushName.length; j++){
            if((firstName[i] !== " ")&&(firstName[i] === crushName[j])){
                matchingLetters.push(firstName[i]);
            }
        }
    }

    let magicNumberArray = matchingLetters.map(x => magicAlphabet[x]);
    
    const initialValue = 0;
    let sumOfMagicNumberArray = magicNumberArray.reduce(
        (a, b) => a + b, initialValue);
   
    //return sumOfMagicNumberArray;
    if ((sumOfMagicNumberArray % 10 >= 0)&&(sumOfMagicNumberArray % 10 < 4)){
        equationResult.textContent = "100% Perfect match! ❤️";
    } else if ((sumOfMagicNumberArray % 10 > 3)&&(sumOfMagicNumberArray % 10 < 7)){
        equationResult.textContent = "Quite a good match";
    } else if ((sumOfMagicNumberArray % 10 > 6)&&(sumOfMagicNumberArray % 10 < 10)){
        equationResult.textContent = "Not too sure..."
    }

}