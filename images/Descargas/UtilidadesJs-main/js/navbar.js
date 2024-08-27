function toggleMenu() {
    let myNav = document.getElementById('myNavbar');
    if(myNav.className === 'navbar'){
        myNav.className += " responsive"
        console.log("Clase de navbar:", myNav.className);
    }else{
        myNav.className = "navbar"
        console.log("Clase de navbar:", myNav.className);
    }
}

document.getElementById('boton').addEventListener('click', toggleMenu);
