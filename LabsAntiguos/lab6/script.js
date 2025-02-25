const btn_calcular = document.getElementById("btn_calcular");
const select = document.getElementById("producto");
const img = document.getElementById("imgContainer")
const subtotal_container = document.getElementById("subtotal");
const iva_container = document.getElementById("iva");
const total_container = document.getElementById("total");


const calcularCosto = () => {
    const opcion = select.value;
    const cantidad = document.getElementById("cantidad").value;
    const iva = 0.16;

    if (opcion === "pollo")
        {   
            const precio = 90; // precio por kilo de pollo
            subtotal_container.value = precio * cantidad;
            iva_container.value = (precio * cantidad) * iva;
            total_container.value = (precio * cantidad) + ((precio * cantidad) * iva);
            img.innerHTML = `<img alt="carne de pollo" class="card short--img" src="img/pollo.jpg">`
        } else if (opcion == "res")
        {
            const precio = 110; // precio por kilo
            subtotal_container.value = precio * cantidad;
            iva_container.value = (precio * cantidad) * iva;
            total_container.value = (precio * cantidad) + ((precio * cantidad) * iva);
            img.innerHTML = `<img alt="carne de res" class="card short--img" src="img/res.jpg">`
        } else if (opcion == "cerdo")
        {
            const precio = 130; // precio por kilo
            subtotal_container.value = precio * cantidad;
            iva_container.value = (precio * cantidad) * iva;
            total_container.value = (precio * cantidad) + ((precio * cantidad) * iva);
            img.innerHTML = `<img alt="carne de cerdo" class="card short--img" src="img/cerdo.webp">`
        } else
        {   
            img.innerHTML = `<img alt="Selecciona elemento valido" class="card short--img" src="">`
        }
}

btn_calcular.onclick = calcularCosto;

const btn_tam = document.getElementById("cambiarTam");
const btn_fuente = document.getElementById("cambiarTipo");
const btn_color = document.getElementById("cambiarColor");

const cambiarTamanio = () =>{
    const text = document.getElementById("cambiar");
    text.style.fontSize = "2rem";
    btn_tam.onclick = ponerTamOriginal;
}

const cambiarFuente = () => {
    const text = document.getElementById("cambiar");
    text.style.fontFamily = "Comic Sans";
    btn_fuente.onclick = ponerFuenteOriginal;
}

const cambiarColor = () => {
    const text = document.getElementById("cambiar");
    text.style.color = "white";
    btn_color.onclick = ponerColorOriginal;
}

const ponerTamOriginal = () => {
    const text = document.getElementById("cambiar");
    text.style.fontSize = "1rem";
    btn_tam.onclick = cambiarTamanio;
}

const ponerFuenteOriginal = () => {
    const text = document.getElementById("cambiar");
    text.style.fontFamily = "sans-serif";
    btn_fuente.onclick = cambiarFuente;
}

const ponerColorOriginal = () => {
    const text = document.getElementById("cambiar");
    text.style.color = "black";
    btn_color.onclick = cambiarColor;
}

btn_tam.onmouseover  = cambiarTamanio;
btn_fuente.onmouseover = cambiarFuente;
btn_color.onmouseover = cambiarColor;


const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");

const ponerInformacionIva = () => {
    const infoIva = document.getElementById("infoIva");
    infoIva.innerHTML = `<p>El IVA es del 16% y se calcula multiplicando el subtotal por esta cantidad, si deseas saber más acerca del iva haz click <a target="_blank" href="https://www.bbva.mx/educacion-financiera/impuestos-que-es-el-iva.html">aquí</a></p>`;
    info1.onclick = quitarInformacionIva;

}

const quitarInformacionIva = () => {
    const infoIva = document.getElementById("infoIva");
    infoIva.innerHTML = "";
    info1.onclick = ponerInformacionIva;
}

info1.onclick = ponerInformacionIva;

const ponerInformacionTotal = () => {
    const infoTotal = document.getElementById("infoTotal");
    infoTotal.innerHTML = `<p>El total se calcula sumando el subtotal más el iva, no se aplican cargos por envio y solo enviamos a México, para verificar más visite el siguiente enlace <a target="_blank" href="https://www.google.com.mx/maps/preview">aquí</a></p>`;
    info2.onclick = quitarInformacionTotal;
}

const quitarInformacionTotal = () => {
    const infoTotal = document.getElementById("infoTotal");
    infoTotal.innerHTML = "";
    info2.onclick = ponerInformacionTotal;
}

info2.onclick = ponerInformacionTotal;