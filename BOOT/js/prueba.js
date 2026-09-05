const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value; 

if (nombre === "" || email === "") {
    alert("Por favor, completa todos los campos.");
}else {
    alert("Formulario enviado correctamente");
}

});
