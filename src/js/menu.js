const menu = document.querySelector(".menu");
const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".nav-bar");
const temaIcon = document.querySelector(".tema-icon");
const tema = document.querySelector(".tema-btn");
const corpo = document.querySelector("body");

tema.onclick = function (){
    tema.classList.toggle("modo-escuro");
    corpo.classList.toggle("modo-escuro");

    if (corpo.classList.contains("modo-escuro")){
        temaIcon.src = "/Coca-Cola/src/icons/icons-light_mode.svg";
    }else{
        temaIcon.src = "/Coca-Cola/src/icons/icons-dark_mode.svg";
    }
}


menu.onclick = function () {
        navBar.classList.toggle("ativar");
        
        if (navBar.classList.contains("ativar")) {
            menuIcon.src = "/Coca-Cola/src/icons/icons-fechar.svg"; 
        } else {
            menuIcon.src = "/Coca-Cola/src/icons/icons-menu.svg"; 
        }
};

window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
        navBar.classList.remove("ativar"); 
        menuIcon.src = "/Coca-Cola/src/icons/icons-menu.svg"; 
    }
});