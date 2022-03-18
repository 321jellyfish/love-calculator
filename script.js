const submitNames = document.querySelector('.submitNames');
const equationResult = document.querySelector('#equationResult');

submitNames.addEventListener("click", checkCompatibility);

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

function checkCompatibility(){
    let firstName = document.getElementById("yourNameField").value;
    let crushName = document.getElementById("crushNameField").value;

    //make names lower case to ensure case insensitivity
    firstName = firstName.toLowerCase();
    crushName = crushName.toLowerCase();

    let matchingLetters = [];

    for(let i = 0; i < firstName.length; i++){
        for(let j = 0; j < crushName.length; j++){
            if(firstName[i] === crushName[j]){
                matchingLetters.push(firstName[i]);
            }
        }
    }
    console.log(matchingLetters);
    let magicNumberArray = matchingLetters.map(x => magicAlphabet[x]);
    console.log(magicNumberArray);

    const initialValue = 0;
    let sumOfMagicNumberArray = magicNumberArray.reduce(
        (a, b) => a + b, initialValue);
    console.log(sumOfMagicNumberArray);
    
    //return sumOfMagicNumberArray;
    if ((sumOfMagicNumberArray % 10 > 0)&&(sumOfMagicNumberArray % 10 < 4)){
        equationResult.textContent = "100% Perfect match! ❤️";
    } else {
        equationResult.textContent = "Not too sure...";
    }

}