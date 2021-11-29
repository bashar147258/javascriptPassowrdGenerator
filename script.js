var themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
var currentTheme = localStorage.getItem('theme'); 
var generateBtn = document.getElementById("generate");
const passLenAmount = document.getElementById("passLen");
const passLenSlider = document.getElementById("passLenNum");


function writePassword() {
    let password =''
    let length = passLenAmount.value

    let lowerCase= document.getElementById("lowercase").checked;
    let upperCase=document.getElementById("uppercase").checked;
    let number =document.getElementById("numbers").checked;
    let symbol=document.getElementById("special").checked;

    //Boolean true also equals 1. If none of the options are selected, the result will be 0
    if (lowerCase + upperCase + number + symbol === 0) {
        return document.getElementById("password").textContent ="INVALID SELECTION";
    }
    
    //Iterate over the length
    for (i=0;i < length; i++) {
        //Will randomly generate a value between 1 and 3
        const r = (Math.floor(Math.random() * 4))
        
        if (lowerCase && r===0) {
            password += generateRandomLower();
        } else if (upperCase && r===1) {
            password += generateRandomUpper();
        } else if (number && r===2) {
            password += generateRandomNumber();
        } else if (symbol && r===3) {
            password += generateRandomSymbol();
        } else {
            //If none of the conditions are true, it will decrement i essentially reseting until the above condition is met
            i--; 
        }
    }
    document.getElementById("password").textContent = password;
}

passLenAmount.addEventListener('input', syncPassValue);
passLenSlider.addEventListener('input', syncPassValue);
generateBtn.addEventListener('click', writePassword);

function syncPassValue(e) {
    //Syncs the numerical value aswell as the slider
    const value = e.target.value
    passLenAmount.value = value;
    passLenSlider.value = value;
}

function generateRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function generateRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function generateRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function generateRandomSymbol() {
    const symbols =  "~*$%@#^&!?*'-=/,.{}()[]<>"
    return symbols[Math.floor(Math.random() * symbols.length)];
}
