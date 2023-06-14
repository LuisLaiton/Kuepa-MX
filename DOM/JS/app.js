// Muestra el documento
console.log(document)

// Muestra Todos los enlaces del documento
console.log(document.links)

// Muestra todos los elementos con la etiqueta a
console.log(document.getElementsByTagName("a"))

// Muestra el valor del atributo href, del primer enlace que encuentre
console.log(document.querySelector("a").getAttribute("href"))

// Reescribe el valor del atributo href, del primer enlace que encuentre
document.querySelector("a").setAttribute("href", "#")
console.log(document.querySelector("a").getAttribute("href"))

// Funcion que cambia de color un contenedor
function color() {
    // Define el contenedor en una variable
    const $DIV = document.getElementById('mensaje-color')
    // Cambia el texto del subtitulo del contenedor
    $DIV.getElementsByTagName('h3').textContent = 'Cambio de color'
    // Realiza el cambio de la clase 
    $DIV.classList.toggle("fondo-oscuro")
}
// Define el evento de un boton
const $BOTON = document.getElementById("btn-cambio-color")
$BOTON.onclick = color

// Funcion que añade texto
function texto() {
    // Crea el elemento h3 y declara el contenido
    const $H3 = document.createElement("h3"), $H3_TEXT = document.createTextNode("Nuevo texto")
    //Crea el parrafo y declara el contenido
    const $P = document.createElement("p"), $P_TEXT = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum impedit dolore est iste consequuntur error. Quibusdam sequi aliquid minima at ratione officia est ea fugiat iusto, quaerat aut deserunt sapiente.")
    // Define donde se van a agregar los elementos
    const $CONTENEDOR = document.body

    // Reune el elemento con su respectivo texto
    $H3.appendChild($H3_TEXT)
    // Agrega el elemento en su lugar
    $CONTENEDOR.appendChild($H3)
    $P.appendChild($P_TEXT)
    $CONTENEDOR.appendChild($P)
}
// Define el evento de un nuevo boton
const $BOTON_TEXTO = document.getElementById("btn-nuevo-texto")
$BOTON_TEXTO.onclick = texto

// Funcion que muestra por consola los datos de un formulario
function guardar_datos(event) {
  event.preventDefault(); // Evita que la pagina se recargue
  // Capturar los valores de los campos del formulario
  const $USERNAME = document.querySelector('#username').value;
  const $PASSWORD = document.querySelector('#password').value;
  // Se muestran los datos por consola
  console.log('Usuario:', $USERNAME);
  console.log('Contraseña:', $PASSWORD);

  alert("Formulario enviado correctamente") // Mensaje de alerta
  window.location.href = "pagina2.html" // Envia a otra pagina
}

// Define el evento del boton del formulario
const $BOTON_FORM = document.getElementById("miFormulario")
$BOTON_FORM.onsubmit = guardar_datos