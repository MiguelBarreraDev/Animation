/* -------------------------------------------------------- */
/* Animando la cabecera de la página
/* --------------------------------------------------------- */
const btnMenu = document.getElementById("btn-menu");
const contenidoMenu = document.getElementById("container-menu");
let check = false;
btnMenu.addEventListener("click", () => {
    contenidoMenu.style.transition = "right .3s linear";
    if (check == false) {
        contenidoMenu.style.right = "0px"
        check = true;
        document.querySelector("body").style.overflow = "hidden";
    } else {
        contenidoMenu.style.right = "-100%";
        check = false;
        document.querySelector("body").style.overflow = "auto";
    }
})
//Verificacion continua del ancho del header
setInterval(() => {
    if (document.querySelector("header").getBoundingClientRect().width >= 837.723) {
        contenidoMenu.removeAttribute("style");
        check = false;
    }
}, .5);

/* ---------------------------------------------------------------------- */
/* Animando el logo de la pagina web
/*-------------------------------------------------------------------------*/
let logo = document.getElementById("logo");
let i = 0;
setInterval(() => {
    logo.style.color = `hsl(${i}, 70%, 70%)`;
    i += 1;
}, 50);
/* ---------------------------------------------------------------------- */
/* Animando la sección de Redes Sociales
/*-------------------------------------------------------------------------*/
const btnRS = document.getElementById("btn-RS");
const contenidoRS = document.getElementById("contenido-RS");
const posBtnRS = btnRS.getBoundingClientRect();
let checkRS = false;
//Detectando click fuera del boton para ocultar el contenido
document.addEventListener("click", (e) => {
    let posEventX = e.clientX;
    let posEventY = e.clientY;
    if(posEventX < posBtnRS.left || posEventY < posBtnRS.top){
        contenidoRS.style.transform = "scale(0) rotate(-70deg)";
        checkRS = false
        btnRS.style.transform = "rotate(0deg)";
    }
})

btnRS.addEventListener("click", (e) => {
    if (checkRS == false) {
        contenidoRS.style.transform = "scale(1) rotate(0deg)";
        checkRS = true;
        btnRS.style.transform = "rotate(45deg)";
    } else {
        contenidoRS.style.transform = "scale(0) rotate(-70deg)";
        checkRS = false
        btnRS.style.transform = "rotate(0deg)";
    }
})
