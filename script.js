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
        " segundos, respuesta correcta: " + suma + " " + num1 + " " + num2;
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
