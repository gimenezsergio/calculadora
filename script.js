function agregarNumeroUno() {
    document.querySelector('.display').innerText += '1'
}

function agregarNumeroDos() {
    document.querySelector('.display').innerText += '2'
}

function agregarNumeroTres() {
    document.querySelector('.display').innerText += '3'
}

function agregarNumeroCuatro() {
    document.querySelector('.display').innerText += '4'
}

function agregarNumeroCinco() {
    document.querySelector('.display').innerText += '5'
}

function agregarNumeroSeis() {
    document.querySelector('.display').innerText += '6'
} 

function agregarNumeroSiete() {
    document.querySelector('.display').innerText += '7'
}

function agregarNumeroOcho() {
    document.querySelector('.display').innerText += '8'
}

function agregarNumeroNueve() {
    document.querySelector('.display').innerText += '9'
}

function agregarNumeroCero() {
    document.querySelector('.display').innerText += '0'
}


function limpiar() {
    document.querySelector('.display').innerText = ''
}

function porcentaje(){
    document.querySelector('.display').innerText += '%'
}

function dividir(){
    document.querySelector('.display').innerText += '/'
}

function multiplicar(){
    document.querySelector('.display').innerText += '*'
}

function resta(){
    document.querySelector('.display').innerText += '-'
}

function suma() {
    document.querySelector('.display').innerText += '+'
}


function dosCeros() {
    document.querySelector('.display').innerText += '00'
}

function punto() {
    document.querySelector('.display').innerText += '.'
}

function igual() {
    //variable
    var cuenta = document.querySelector('.display').innerText
    console.log(cuenta)
    console.log(cuenta + 3) //solucionar que pueda hacer la cuenta con un tipo de dato numerico
    console.log(cuenta + 78) 
    console.log(eval(cuenta))
    document.querySelector('.display').innerText = eval(cuenta)
     
}