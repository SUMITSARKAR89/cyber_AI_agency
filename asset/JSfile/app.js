const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const menu = document.querySelector("#menu");

openMenu.addEventListener("click", () => {
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    menu.style.boxShadow = "rgba(255, 217, 0, 0.267) 0px -2px 10px";
});
closeMenu.addEventListener("click", () => {
    openMenu.style.display = "flex";
    closeMenu.style.display = "none";
     menu.style.boxShadow = "none";
});