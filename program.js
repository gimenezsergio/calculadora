let asignar = function () {
    let numeros = document.querySelectorAll('.numero')
    numeros.forEach(element => {
        element.setAttribute("onclick", "valor_btn(this)")
    })

    let operadores = document.querySelectorAll('.operador')
    operadores.forEach(element => {
        element.setAttribute("onclick", "valor_btn(this)")
    });

    let borrar = document.querySelectorAll('.borrar')
    borrar.forEach(element => {
        element.setAttribute("onclick", "borrar()")
    });

    let calcular = document.querySelectorAll('.calcular')
    calcular.forEach(element => {
        element.setAttribute("onclick", "calcular()")
    });
}

let valor_btn = function (boton) {
    document.querySelector('.display').innerText += boton.innerText
}

let borrar = function () {
    document.querySelector('.display').innerText = ""
}

let calcular = function () {
    let datos = document.querySelector('.display').innerText
    let resultado = eval(datos)
    document.querySelector('.display').innerText = resultado
}

// Tener 4 funciones, una por cada operacion aritmetica

let testString = function (){
    // String
    let display = document.querySelector(".display").innerText
    console.log(display)
    console.log(display.split("")) 
    let toArray = display.split("")
    // forEach es para array
    toArray.forEach(mesi => {
        // console.log(Number(Number.isInteger("65/3")))
        if (parseInt(mesi))  {
            console.log(mesi + " Es Numero")    
        }else{
            console.log(mesi + " NO es Numero")
            if (mesi == "-") {
                
            }
        }
        
    });

    
   
}

let suma = function (){

}

let multiplicacion = function () {

}

let resta = function () {

}

let division = function (){

}

asignar()