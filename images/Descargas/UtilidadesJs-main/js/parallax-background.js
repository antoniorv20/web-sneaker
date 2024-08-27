window.addEventListener('scroll', function() {
    var parallax = document.getElementById('parallax');
    var scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = (scrollPosition * 0.7) + 'px';
});

// Establecer la imagen de fondo
document.getElementById('parallax').style.backgroundImage = "url('/img/background.jpg')";