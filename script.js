function calcularCuadradoCubo(){
    let num = parseInt(prompt("Ingresa un numero"));
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