const menu = document.querySelector(".menu");
const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".nav-bar");

menu.onclick = function () {
        navBar.classList.toggle("ativar");
        
        if (navBar.classList.contains("ativar")) {
            menuIcon.src = "/src/icons/icons-fechar.svg"; 
        } else {
            menuIcon.src = "/src/icons/icons-menu.svg"; 
        }
};

window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
        navBar.classList.remove("ativar"); 
        menuIcon.src = "/src/icons/icons-menu.svg"; 
    }
});