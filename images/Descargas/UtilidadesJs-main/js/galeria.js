const imagenPrincipal = document.getElementById('imagenPrincipal');
const miniaturas = document.querySelectorAll('.miniatura');
// const miniaturas = document.getElementsByClassName('miniatura');

const miniaturasArray = [
    {imagen: "img/cebra.jpg", altImagen: "Cebra"},
    {imagen: "img/girafa.jpg", altImagen: "Girafa"},
    {imagen: "img/guepardo.jpg", altImagen: "Guepardo"},
    {imagen: "img/leon.jpg", altImagen: "León"},
]

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function(e) {
        let idImagen = e.currentTarget.id;
        imagenPrincipal.src = miniaturasArray[idImagen].imagen;
        imagenPrincipal.alt = miniaturasArray[idImagen].altImagen;
    });
});