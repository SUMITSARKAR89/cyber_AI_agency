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
});


const l = document.querySelector(".logo");
const h = document.querySelector("#headBtn");
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 2000){
        l.classList.add("active");
        h.classList.add("active");
    }else{
        l.classList.remove("active");
        h.classList.remove("active");
    }
});



const accFour = document.querySelectorAll('.acc-content');

accFour.forEach( accs => {
    accs.addEventListener("click", () => {
        accs.classList.toggle("active");
    })
});



 ScrollReveal({
        // reset: true,
        distance: "60px",
        duration: 2500,
        delay: 400
        });

        ScrollReveal().reveal('header, .about-badge', {delay: 200, origin: 'top'});
        ScrollReveal().reveal('.head, nav, .hero-conatainer h1', { delay: 200, origin: 'top', interval: 100 });

        ScrollReveal().reveal('.hero-badge, .price-foot-left h4, .client-title, .faq-left,  .line1', { delay: 300, origin: 'left' });
        ScrollReveal().reveal('.font-24, .price-foot-left p, .prfm-card', { delay: 200, origin: 'left', interval: 100 });
        ScrollReveal().reveal('.service-content, .industry-container, .price-foot-left a', { delay: 500, origin: 'left' });
        
        ScrollReveal().reveal('.marquee, video, .service-boxes, .industry-right, .price-card, .partner-card, .form-container, .team-card, .faq-right, .footerImg, .footer-links', {delay: 200, origin: 'bottom'});
         ScrollReveal().reveal('.blur1, .blur2, .blur3, .about-card', { delay: 400, origin: 'bottom', interval: 200 });

        ScrollReveal().reveal('.marquee-track, .monthBtn, .price-foot-right', { delay: 300, origin: 'right' });
        ScrollReveal().reveal('.video-content p, .client-info, .perform-card', { delay: 400, origin: 'right', interval: 200 });