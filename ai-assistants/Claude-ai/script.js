/* ==========================================
   AI Learn Then Earn
   Claude AI Mastery Course
   script.js
========================================== */

// ===========================
// Mobile Menu Toggle
// ===========================

function toggleMenu() {

    const nav = document.getElementById("navbar");

    if(nav){
        nav.classList.toggle("show");
    }

}

// ===========================
// Dark Mode
// ===========================

const themeBtn = document.getElementById("theme-btn");

if(themeBtn){

    themeBtn.addEventListener("click", function(){

        document.body.classList.toggle("dark");

        const icon = this.querySelector("i");

        if(document.body.classList.contains("dark")){

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        }else{

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}

// ===========================
// Search Modules
// ===========================

const searchInput = document.querySelector(".search-box input");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".module-card");

        cards.forEach(card=>{

            const text = card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

}

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===========================
// Simple Fade Animation
// ===========================

const cards=document.querySelectorAll(".module-card,.overview-card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(30px)";
card.style.transition="all .6s ease";

observer.observe(card);

});
