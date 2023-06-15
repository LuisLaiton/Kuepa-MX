// Seleccionar todos los elementos del carrusel
const $ELEMENTOS = document.getElementsByClassName("elemento");

// Crear un arreglo para almacenar los IDs de los elementos y una variable para el elemento mostrado actualmente
let elementos_id = [], elemento_mostrado = 0;

// Recorrer todos los elementos y obtener sus IDs, luego agregarlos al arreglo elementos_id
for (let i = 0; i < $ELEMENTOS.length; i++) {
    elementos_id.push($ELEMENTOS[i].getAttribute("id"));
}

// Obtener el botón "Siguiente" y asignar la función "next" al evento onclick
const $BTN_NEXT = document.getElementById("next");
$BTN_NEXT.onclick = next;

// Obtener el botón "Anterior" y asignar la función "prev" al evento onclick
const $BTN_PREV = document.getElementById("prev");
$BTN_PREV.onclick = prev;

// Función para avanzar al siguiente elemento
function next() {
    elemento_mostrado++; // Aumenta el contador del elemento mostrado
    $BTN_PREV.disabled = false; // Habilita el boton "Anterior"
    window.location.href = "#" + elementos_id[elemento_mostrado]; // Ubica el elemento

    // Verificar si se llegó al último elemento, y si es así, deshabilitar el botón "Siguiente"
    if (elemento_mostrado + 1 === $ELEMENTOS.length) {
        $BTN_NEXT.disabled = true;
    }
}

// Función para retroceder al elemento anterior
function prev() {
    elemento_mostrado--; // Disminuye el contador del elemento mostrado
    $BTN_NEXT.disabled = false; // Habilita el boton "Siguiente"
    window.location.href = "#" + elementos_id[elemento_mostrado]; // Ubica el elemento

    // Verificar si se llegó al primer elemento, y si es así, deshabilitar el botón "Anterior"
    if (elemento_mostrado === 0) {
        $BTN_PREV.disabled = true;
    }
}
