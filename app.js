
/*

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10' 

*/

let secretNumber = 0;
let attempts = 0;
let drawnNumbersList = [];
let maxNumber = 10;

function assingTextElement(element, text) {

    let elementHTML = document.querySelector(element);

    elementHTML.innerHTML = text;


}



function generateNumberSecret() {

    let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;


    //si ya sorteamos todos los numeros
    if (drawnNumbersList.length === maxNumber) {
        
        assingTextElement('p', 'Ya se sortearon todos los números posibles');

    } else{
        //esta en la lista este numero generado?
        if (drawnNumbersList.includes(generatedNumber)) {
            return  generateNumberSecret();
    
        } else {
            drawnNumbersList.push(generatedNumber);
            return generatedNumber;
        }

    }
}
// anatomia de una funcion - forma tradicional

//Declarando la función
function verifyAttempt() {

    let userNumber = parseInt(document.getElementById('userValue').value);
    console.log(typeof (userNumber));
    console.log(secretNumber);
    console.log(userNumber);
    console.log(userNumber === secretNumber);

    if (userNumber == secretNumber) {
        assingTextElement('p', `¡Felicidades! Has acertado el número en ${attempts} ${(attempts === 1) ? 'vez' : 'veces'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (userNumber > secretNumber) {
            assingTextElement('p', 'El número secreto es menor que ' + userNumber);
        } else {
            assingTextElement('p', 'El número secreto es mayor que ' + userNumber);
        }

        attempts++;
        cleanBox();
    }

}

function cleanBox() {
    document.querySelector('#userValue').value = '';
}

function initialConditions() {

    assingTextElement('h1', 'Juego del número secreto');
    assingTextElement('p', `Indica un número del 1 al ${maxNumber}`);

    //generar numero aleatorio
    secretNumber = generateNumberSecret();

    attempts = 1;


}

function restartGame() {

    //limpiar la caja
    cleanBox();

    //indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    // INicializa el numero de intentos
    initialConditions();

    //Deshabilitar el boton de juego nuevo
    document.getElementById('reiniciar').setAttribute('disabled', 'true');



}

initialConditions();
