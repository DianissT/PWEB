const infoButton = document.getElementById("infoButton");

function informacion() {
    infoButton.textContent = "Bienvenido a la Biblioteca Virtual 2026. Aquí encontrarás una amplia variedad de recursos y materiales para tus estudios. Explora nuestras colecciones y aprovecha al máximo tu experiencia de aprendizaje.";
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (nombre === "" || correo === "") {

        mensaje.textContent = "Complete todos los campos.";
        mensaje.className = "alert alert-danger";

    } else {

        mensaje.textContent =
            "Registro exitoso para " + nombre;

        mensaje.className = "alert alert-success";

    }

});
