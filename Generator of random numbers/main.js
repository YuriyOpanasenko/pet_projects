// 1. Ввести число.
// let vvedeneChyslo = document.querySelector('.number').value;

// 2. Тиць на
// document.querySelector('.button').onclick = function ninja () {
// };

// 3.1 Як прораховується визначення випадкового числа.
// let result = Math.ceil(Math.random()* vvedeneChyslo)

// 3.2 На середньому екрані з'явиться від 0 до введеного числа (не включаючи саме число).
// document.querySelector('.resultP').value = result;

function clickOnButton(){
    let vvedeneChyslo = document.querySelector('.number').value;
    vvedeneChyslo = +vvedeneChyslo;
    let result = Math.ceil(Math.random()* (vvedeneChyslo));
    let resultFontSize = document.querySelector('.resultP');
    document.querySelector('.resultP').innerText = result;
    if (vvedeneChyslo > 99999){
        resultFontSize.style.fontSize = '30px';
        resultFontSize.style.color = '#F326AC';
        resultFontSize.innerText = 'max 99 999';
    }
    else if (isNaN(vvedeneChyslo)) {
        resultFontSize.style.fontSize = '27px';
        resultFontSize.style.color = '#F326AC';
        resultFontSize.innerText = 'only number!'
    }
    else {
        resultFontSize.style.fontSize = '64px';
        resultFontSize.style.color = '#ffffff';
    }


    console.log(typeof (vvedeneChyslo));
    console.log(vvedeneChyslo);

}

document.querySelector('.button').onclick = function ninja () {
    clickOnButton();
};

document.querySelector('.button').addEventListener('keydown', (event) => {
    if(event.key === "Enter" ){
        clickOnButton();
    }

})
document.querySelector('.number').addEventListener('keydown', (event) => {
    if(event.key === "Enter" ){
        clickOnButton();
    }

})
// eventTarget.addEventListener("keydown", (event) => {
//     if (event.isComposing || event.keyCode === 229) {
//         return;
//     }
//     // do something
// });