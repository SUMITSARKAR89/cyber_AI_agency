const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const menu = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

openMenu.addEventListener("click", () => {
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    menu.style.boxShadow = "rgba(255, 217, 0, 0.267) 0px -2px 10px";
    navigation.style.height = "80vh";
    
});
closeMenu.addEventListener("click", () => {
    openMenu.style.display = "flex";
    closeMenu.style.display = "none";
     menu.style.boxShadow = "none";
     navigation.style.height = "0vh";
     
});



const forthBtns = document.querySelectorAll('.f-btn');
const forthContents = document.querySelectorAll('.service-panel');

forthBtns.forEach( (btn, index) => {
    btn.addEventListener('click', () => {

        forthBtns.forEach( btn => {
            btn.classList.remove('f-active')
        })
        btn.classList.add('f-active');

        forthContents.forEach(content => {
            content.classList.remove('f-active');
        })
        forthContents[index].classList.add('f-active');

    })
})