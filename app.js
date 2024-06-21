
/*

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10' 

*/

let secretNumber = 0;
let attempts = 0;
let listaNumerosSorteados = [];
let maxNumber = 10;

function asignarTextoElemento(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);

    elementoHTML.innerHTML = texto;


}



function generateNumberSecret() {

    let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;


    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length === maxNumber) {
        
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

    } else{
        //esta en la lista este numero generado?
        if (listaNumerosSorteados.includes(generatedNumber)) {
            return  generateNumberSecret();
    
        } else {
            listaNumerosSorteados.push(generatedNumber);
            return generatedNumber;
        }

    }
}
// anatomia de una funcion - forma tradicional

//Declarando la función
function verificarIntento() {

    let userNumber = parseInt(document.getElementById('userValue').value);
    console.log(typeof (userNumber));
    console.log(secretNumber);
    console.log(userNumber);
    console.log(userNumber === secretNumber);

    if (userNumber == secretNumber) {
        asignarTextoElemento('p', `¡Felicidades! Has acertado el número en ${attempts} ${(attempts === 1) ? 'vez' : 'veces'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (userNumber > secretNumber) {
            asignarTextoElemento('p', 'El número secreto es menor que ' + userNumber);
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor que ' + userNumber);
        }

        attempts++;
        cleanBox();
    }

}

function cleanBox() {
    document.querySelector('#userValue').value = '';
}

function initialConditions() {

    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${maxNumber}`);

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
