function calcularCuadradoCubo(){
    const num = parseInt(prompt("Ingresa un numero: "));
    let concat = "";
    let table1 = document.getElementById("table1");

    for(let i = 1; i <= num; i++)
    {
        let cuadrado = i * i;
        let cubo = i * i * i;
        let line = `<tr><td>${i}</td><td>${cuadrado}</td><td>${cubo}</td></tr>`;
        concat += line;
    }
    table1.innerHTML = concat;
}

function adivinarResultado(){
    const tiempoInicial = Date.now();
    const respuesta = parseInt(prompt
        ("Adivina la suma de dos numeros: (respuesta de 2 - 10)"));
    const tiempoFinal = Date.now();

    const tiempoTotal = (tiempoFinal - tiempoInicial) / 1000;

    const num1 = (Math.floor(Math.random() * 5)) + 1;
    const num2 = (Math.floor(Math.random() * 5)) + 1;
    const suma = num1 + num2;

    let text = document.getElementById("textbox1");
    if(respuesta == suma)
    {
        text.innerHTML = "Respuesta correcta, tiempo total: " + tiempoTotal + 
        " segundos";
    } else
    {
        text.innerHTML = "Respuesta incorrecta, tiempo total: " + tiempoTotal + 
        " segundos, respuesta correcta: " + suma;
    }
}

function calcularConteo() {
    const input = document.getElementById("numeros").value;
    const stringNumbers = input.split(",");
    const numeros = [];
    let negativos = 0;
    let zeros = 0;
    let positivos = 0;
    
    for (var i = 0; i < stringNumbers.length; i++) {
        let num = parseInt(stringNumbers[i].trim());
        numeros.push(num);
    }
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            negativos++;
        } else if (numeros[i] === 0) {
            zeros++;
        } else {
            positivos++;
        }   
    }
    
    document.getElementById("resultado").innerHTML = 
        "Negativos: " + negativos + "<br>" +
        "Ceros: " + zeros + "<br>" +
        "Positivos: " + positivos;
}

function promedios(matriz) {
    return matriz.map(function(renglon) {
        let suma = 0;
        for (let i = 0; i < renglon.length; i++) 
        {
            suma += renglon[i];
        }
        return suma / renglon.length;
    });
}
document.getElementById("calcular").addEventListener("click", function() {
    let input = document.getElementById("matrizInput").value;
    let filas = input.trim().split("\n");
    
    let matriz = filas.map(function(fila) {
    return fila.split(",").map(function(num) 
    {
        return parseFloat(num.trim());
    });
    });
    let promediosArray = promedios(matriz);
    document.getElementById("promedio").textContent = promediosArray.join(", ");
});

function inverso(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
document.getElementById("reverso").addEventListener("click", function() {
    const numero = document.getElementById("numFive").value;
    
    const resultadoInverso = inverso(numero);
    
    document.getElementById("reverseNum").textContent = resultadoInverso;
});

class Cuadrado{
    constructor(nombre, lado){
        this.nombre = nombre;
        this.lado = lado;
    }

    calcularArea(){
        return this.lado * this.lado;
    }

    calcularPerimetro(){
        return this.lado * 4;
    }

    toString(){
        return `Hola soy el cuadrado ${this.nombre} con lado ${this.lado} cm.`
    }
}

document.getElementById("crearCuadrado").addEventListener("click", function() {
    const nombre = document.getElementById("nombreInput").value;
    const lado = parseFloat(document.getElementById("ladoInput").value);
    
    // Creamos una instancia de Cuadrado usando los valores ingresados
    const cuadrado1 = new Cuadrado(nombre, lado);
    
    // Mostramos el resultado en el párrafo con id "resultado"
    document.getElementById("resultadoClase").textContent = 
    `${cuadrado1.toString()}. Área: ${cuadrado1.calcularArea()}. 
        Perímetro: ${cuadrado1.calcularPerimetro()}.`;
  });