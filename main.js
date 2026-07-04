/*=========================================
BACK TO TOP
==========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
STICKY NAVBAR
=========================================*/

const navbar=document.querySelector(".custom-navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

const fadeElements=document.querySelectorAll(".fade-up");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

fadeElements.forEach(el=>observer.observe(el));