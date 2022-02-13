
const yourNameSubmit = document.querySelector('.yourNameSubmit');
const crushNameSubmit = document.querySelector('.crushNameSubmit');
const equationResult = document.querySelector('#equationResult');

crushNameSubmit.addEventListener("click", checkCrushName);

function checkCrushName(){
    let firstName = document.getElementById("yourNameField").value;
    let crushName = document.getElementById("crushNameField").value;
        if ((firstName.length === 4)&&(crushName.length === 9)){
            equationResult.textContent = "100% Perfect match! ❤️";
        } else {
            equationResult.textContent = "Not too sure...";
        }
    return true;
}
