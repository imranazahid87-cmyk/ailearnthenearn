/*=========================================
 AI Learn Then Earn
 SEO Course Script
=========================================*/

// =========================
// Dark Mode
// =========================

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML='<i class="fas fa-sun"></i>';

    }else{

        themeBtn.innerHTML='<i class="fas fa-moon"></i>';

    }

});


// =========================
// Card Animation
// =========================

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".7s";

observer.observe(card);

});


// =========================
// Smooth Button Effect
// =========================

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.transition=".3s";

});

});
