const menu = document.querySelector(".menu");
const menuIcon = document.getElementById("menu-icon");

menu.onclick = function () {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("ativar");

    
    if (navBar.classList.contains("ativar")) {
        menuIcon.src = "/src/icons/icons-fechar.svg"; 
    } else {
        menuIcon.src = "/src/icons/icons-menu.svg"; 
    }
}
