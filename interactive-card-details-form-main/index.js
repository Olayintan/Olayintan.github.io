// form
const yourName = document.getElementById('cardholder-name');
const yourCardNum = document.getElementById('card-number');
const endMonth = document.getElementById('exp-month');
const endYear = document.getElementById('exp-year');
const backCvc = document.getElementById('cvc');
//const fillForm = document.getElementById('form');
//const thankYou = document.getElementById('thank-you');
const continueBtn = document.getElementById('continue-btn')



// card
const displayName = document.getElementById('card-name');
const displayNumber = document.getElementById('card-num');
const displayExpMonth = document.getElementById('month');
const displayExpYear = document.getElementById('year');
const displayCvc = document.getElementById('back-cvc');
const confirmBtn = document.getElementById('confirm-btn')

// errors

const nameError = document.getElementById('name-error');
const numberError = document.getElementById('number-error');
const monthError = document.getElementById('error-month');
const yearError = document.getElementById('error-year');
const cvcError = document.getElementById('error-cvc');

// inputs

yourName.onkeyup = function () {
    if (yourName.value !== "") {
        displayName.innerHTML = yourName.value;
    }
    else{
        displayName.innerHTML = "Jane Appleseed"
    }
};

yourCardNum.onkeyup = function () {
    if (yourCardNum.value !== ""){
        displayNumber.textContent = yourCardNum.value;
    }
    else {
        displayNumber.innerHTML = "0000 0000 0000 0000"
    }
};

endMonth.onkeyup = function () {
    if (endMonth.value !== ""){
        displayExpMonth.innerHTML = endMonth.value;
    }
    else{
        displayExpMonth.innerHTML = "00"
    }
};

endYear.onkeyup = function () {
    if (endYear.value !== ""){
        displayExpYear.innerHTML = endYear.value;
    }
    else{
        displayExpYear.innerHTML = "00"
    }
};

backCvc.onkeyup = function () {
    if (backCvc.value !== ""){
        displayCvc.innerHTML = backCvc.value;
    }
    else{
        displayCvc.innerHTML = "000"
    }
};

// Error message
confirmBtn.addEventListener('click', function (){
    if (/\s+/gi.test(yourName.value ) == false){
        nameError.style.display ="block"
    }
    else{
        nameError.style.display = "none"
    };

    if (/\d{16}/gi.test(yourCardNum.value ) == false){
        numberError.style.display ="block"
    }
    else{
        numberError.style.display = "none"
};

if (/\d{2}/gi.test(endMonth.value ) == false){
    monthError.style.display ="block"
}
else{
    monthError.style.display = "none"
};

if (/\d{2}/gi.test(endYear.value ) == false){
    yearError.style.display ="block"
}
else{
    yearError.style.display = "none"
};

if (/\d{3}/gi.test(backCvc.value ) == false){
    cvcError.style.display ="block"
}
else{
    cvcError.style.display = "none"
};

if (
    nameError.style.display != "block" &&
    numberError.style.display != "block" &&
    monthError.style.display != "block" &&
    yearError.style.display != "block" &&
    cvcError.style.display != "block" 
){
    document.getElementById("form").style.display = "none"
    document.getElementById("thank-you").style.display = "block"
    
};
});

continueBtn.addEventListener('click', function(){
    document.getElementById("form").style.display = "block"
    document.getElementById("thank-you").style.display = "none"
    window.location.reload();
})
