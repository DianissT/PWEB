const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("correo").value.trim();

    if (nombre === "" || email === "") {

        alert("Complete todos los campos");

    } else {

        document.getElementById("mensaje").textContent =
            "Registro exitoso para " + nombre;

    }

});

const complaptop = document.getElementById("complaptop");
    const compcelular = document.getElementById("compcelular");
    const compaudifonos = document.getElementById("compaudifonos");

    complaptop.addEventListener("click", function() {
        alert("Laptop agregada al carrito");
    });

    compcelular.addEventListener("click", function() {
        alert("Celular agregado al carrito");
    });

    compaudifonos.addEventListener("click", function() {
        alert("Audífonos agregados al carrito");
    });
