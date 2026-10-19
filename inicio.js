

document.addEventListener("DOMContentLoaded", function () {

    const experiencia = document.getElementById("experiencia");
    const calidad = document.getElementById("calidad");
    const clientes = document.getElementById("clientes");
    const stats = document.querySelector(".stats");

    if (!experiencia || !calidad || !clientes || !stats) {
        console.log("No se encontraron los elementos del contador");
        return;
    }

    function contador(elemento, numeroFinal, simbolo) {

        let numero = 0;
        const duracion = 2000;
        const tiempo = 20;
        const incremento = numeroFinal / (duracion / tiempo);

        const intervalo = setInterval(function () {

            numero += incremento;

            if (numero >= numeroFinal) {
                numero = numeroFinal;
                clearInterval(intervalo);
            }

            elemento.textContent =
                Math.floor(numero) + simbolo;

        }, tiempo);
    }

    const observador = new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                contador(experiencia, 15, "+");
                contador(calidad, 100, "%");
                contador(clientes, 500, "+");

                observador.unobserve(stats);
            }

        });

    }, {
        threshold: 0.5
    });

    observador.observe(stats);

});

window.addEventListener("scroll", function () {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const desplazamiento = window.scrollY;

    hero.style.backgroundPosition =
        `center ${desplazamiento * 0.2}px`;

});


document.addEventListener("DOMContentLoaded", function () {

    const elementos = document.querySelectorAll(
        ".stats, .info-card, .eco-image, .eco-text, .category-item, .product-card, .contact-item"
    );

    elementos.forEach(function (elemento) {
        elemento.classList.add("reveal");
    });

    const observador = new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");

                observador.unobserve(entrada.target);
            }

        });

    }, {
        threshold: 0.15
    });

    elementos.forEach(function (elemento) {
        observador.observe(elemento);
    });

});



// 1. Obtener los elementos del HTML
const botonesFiltro = document.querySelectorAll(".catalog-filters .filter");
const buscador = document.getElementById("buscarProducto");
const productos = document.querySelectorAll(".product-card");
const mensajeSinResultados = document.getElementById("mensajeSinResultados");

// 2. Guardar la categoría seleccionada
let categoriaSeleccionada = "todos";

// 3. Función para filtrar los productos
function filtrarProductos() {

    // Obtener el texto escrito en el buscador
    const textoBusqueda = buscador.value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let productosVisibles = 0;

    // Recorrer cada producto
    productos.forEach(producto => {

        // Obtener el nombre del producto
        const nombre = producto.querySelector("h3")
            .textContent
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        // Obtener la categoría del producto
        const categoria = producto.dataset.category;

        // Comprobar si coincide con la categoría seleccionada
        const coincideCategoria =
            categoriaSeleccionada === "todos" ||
            categoria === categoriaSeleccionada;

        // Comprobar si el nombre coincide con la búsqueda
        const coincideNombre = nombre.includes(textoBusqueda);

        // Mostrar el producto si cumple ambos criterios
        if (coincideCategoria && coincideNombre) {
            producto.style.display = "";
            productosVisibles++;
        } else {
            producto.style.display = "none";
        }
    });

    // Mostrar un mensaje si no hay resultados
    mensajeSinResultados.hidden = productosVisibles > 0;
}

// 4. Detectar los clics en los botones de categoría
botonesFiltro.forEach(boton => {

    boton.addEventListener("click", () => {

        // Guardar la categoría seleccionada
        categoriaSeleccionada = boton.dataset.category;

        // Quitar la clase active de todos los botones
        botonesFiltro.forEach(b => {
            b.classList.remove("active");
        });

        // Activar el botón seleccionado
        boton.classList.add("active");

        // Actualizar los productos visibles
        filtrarProductos();
    });
});

// 5. Filtrar mientras el usuario escribe
buscador.addEventListener("input", filtrarProductos);
