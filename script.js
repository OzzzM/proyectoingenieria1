var nivel = 1;
var puntos = 0;

document.getElementById("verificar-btn").addEventListener("click", verificarResultado);
document.getElementById("nueva-div-btn").addEventListener("click", generarDivision);
document.getElementById("cambiar-nivel-btn").addEventListener("click", cambiarNivel);
document.getElementById("guardar-puntuacion-btn").addEventListener("click", guardarPuntuacion);

iniciarJuego();

function iniciarJuego() {
    document.getElementById("nivel-titulo").textContent = "Nivel: " + nivel;
    generarDivision();
    document.getElementById("puntuacion").textContent = "Puntos: " + puntos;
}

function generarDivision() {
    var num1 = Math.floor(Math.random() * 10 * nivel) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var resultado = num1 / num2;
    document.getElementById("num1").textContent = num1;
    document.getElementById("num2").textContent = num2;
    document.getElementById("resultado-input").value = "";
}

function verificarResultado() {
    var resultado = parseInt(document.getElementById("resultado-input").value);
    if (isNaN(resultado)) { // Agregamos validación de NaN
        alert("Por favor, ingrese un número válido.");
        return;
    }
    var num1 = parseInt(document.getElementById("num1").textContent);
    var num2 = parseInt(document.getElementById("num2").textContent);
    var divisionReal = num1 / num2;
    if (resultado === divisionReal) {
        alert("¡Correcto!");
        puntos += 10;
    } else {
        alert("¡Incorrecto!");
    }
    document.getElementById("puntuacion").textContent = "Puntos: " + puntos;
    generarDivision();
}

function cambiarNivel() {
    nivel++;
    iniciarJuego();
}

function guardarPuntuacion() {
    var nombre = document.getElementById("nombre-input").value;
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }
    alert("Puntuación guardada. Nombre: " + nombre + ", Puntos: " + puntos);
}


