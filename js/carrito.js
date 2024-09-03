// Lista de productos disponibles en la tienda, cada uno con su ID, nombre, precio, imagen y tamaños disponibles.
const products = [
    { id: 1, name: "Nike Air Max", price: 129.99, image: "/images/1.png", sizes: ["39", "40", "41", "42", "43"] },
    { id: 2, name: "Nike Air Force", price: 99.99, image: "/images/2.png", sizes: ["39", "40", "41", "42", "43"] },
    { id: 3, name: "Nike Air Zoom Pegasus", price: 119.99, image: "/images/3.png", sizes: ["39", "40", "41", "42", "43"] },
    { id: 4, name: "Nike React Infinity", price: 159.99, image: "/images/4.png", sizes: ["39", "40", "41", "42", "43"] },
    { id: 5, name: "Nike Blazer Mid" , price: 109.99, image: "/images/5.png", sizes: ["39", "40", "41", "42", "43"] },
    { id: 6, name: "Nike Dunk Low", price: 99.99, image: "/images/6.png", sizes: ["39", "40", "41", "42", "43"] },
    { id: 7, name: "Nike Air VaporMax", price: 199.99, image: "/images/7.png", sizes: ["39", "40", "41", "42", "43"] },
    { id: 8, name: "Nike Air Huarache", price: 119.99, image: "/images/8.png", sizes: ["39", "40", "41", "42", "43"] },
    { id: 9, name: "Nike Air Zoom Structure", price: 129.99, image: "/images/9.png", sizes: ["39", "40", "41", "42", "43"] },
    { id: 10, name: "Nike Air Max", price: 139.99, image: "/images/10.png", sizes: ["39", "40", "41", "42", "43"] },
    { id: 11, name: "Nike Cortez", price: 89.99, image: "/images/11.png", sizes: ["39", "40", "41", "42", "43"] },
    { id: 12, name: "Nike SB Dunk High", price: 119.99, image: "/images/12.png", sizes: ["39", "40", "41", "42", "43"] },
];


// Obtiene la referencia al contenedor de productos en el DOM donde se mostrarán los productos.
const productosContainer = document.getElementById("products");

// Obtiene la referencia al contenedor donde se mostrarán los ítems del carrito.
const itemsCarrito = document.getElementById("cart-items");

// Obtiene la referencia al botón que mostrará u ocultará el carrito.
const mostrarCarrito = document.getElementById("toggle-cart");

// Obtiene la referencia al contenedor del carrito.
const carrito = document.getElementById("cart");

// Obtiene la referencia al elemento donde se mostrará el total del carrito.
const totalCarrito = document.getElementById("cart-total");

// Obtiene la referencia al contador que muestra el número de productos en el carrito.
const contador = document.getElementById("contador");

// Arreglo donde se guardarán los productos que el usuario añade al carrito.
let cartProductos = [];

// Función que renderiza los productos en el contenedor "productosContainer".
function renderizarProductos() {
    // Limpia el contenedor e inserta HTML generado dinámicamente para cada producto.
    productosContainer.innerHTML = products.map(producto => `
        <div class="product-card">
            <img src="${producto.image}" alt="${producto.name}" />
            <h3>${producto.name}</h3>
            <p>Precio: ${producto.price} €</p>
            <!-- Genera un dropdown para seleccionar el tamaño -->
            <select id="size-${producto.id}">
                ${producto.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
            </select>
            <!-- Botón para añadir el producto al carrito -->
            <button onclick ="addCarrito(${producto.id})">Añadir al carrito</button>
        </div>
    `).join('');  // Une todos los elementos del array en un solo string.
}

// Función que añade un producto al carrito.
function addCarrito(productoId) {
    // Encuentra el producto en la lista de productos según su ID.
    const productoComprado = products.find(producto => producto.id === productoId);
    // Obtiene el tamaño seleccionado del dropdown correspondiente.
    const size = document.getElementById(`size-${productoComprado.id}`).value;
    // Añade el producto al array "cartProductos" junto con el tamaño seleccionado.
    cartProductos.push({ ...productoComprado, size });

    // Actualiza la visualización del carrito.
    updateCarrito();
}

// Función que actualiza la visualización del carrito.
function updateCarrito() {
    // Limpia y genera el HTML para mostrar los productos añadidos al carrito.
    itemsCarrito.innerHTML = cartProductos.map((item, index) => `
    <div class="cart-item">
        <p>${item.name} ${item.size}</p>
        <div class="detalleCarrito">
            <p>${item.price.toFixed(2)} €</p>
            <!-- Botón para eliminar el producto del carrito -->
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        </div>
    </div>
    `).join('');  // Une todos los elementos del array en un solo string.

    // Calcula el total sumando los precios de los productos en el carrito.
    const total = cartProductos.reduce((sum, item) => sum + item.price, 0);
    // Actualiza el texto del total en el carrito.
    totalCarrito.textContent = `Total ${total.toFixed(2)} €`;

    // Actualiza el contador del carrito o lo oculta si está vacío.
    if (cartProductos.length === 0) {
        contador.textContent = '';
    } else {
        contador.textContent = cartProductos.length;
    }

    // Guarda el carrito en el localStorage para persistencia de datos.
    guardarCarrito();
}

// Función que elimina un producto del carrito.
function eliminarDelCarrito(indice) {
    // Elimina un producto del array "cartProductos" según su índice.
    cartProductos.splice(indice, 1);
    // Actualiza la visualización del carrito.
    updateCarrito();
}

// Función que guarda el carrito en localStorage.
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(cartProductos));
}

// Función que carga el carrito desde localStorage si existe.
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        // Si hay un carrito guardado, lo parsea y lo asigna al array "cartProductos".
        cartProductos = JSON.parse(carritoGuardado);
        // Actualiza la visualización del carrito.
        updateCarrito();
    }
}

// Añade un listener al botón de mostrar/ocultar carrito para alternar su visibilidad.
mostrarCarrito.addEventListener("click", () => {
    carrito.classList.toggle("open");
})

// Llama a la función para renderizar los productos en la página.
renderizarProductos();

// Carga el carrito desde el localStorage al cargar la página.
cargarCarrito();



document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });

    // Opcional: Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuToggle.classList.remove('open');
      }
    });
  });
