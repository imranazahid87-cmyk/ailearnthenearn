// ===========================
// AI Image Generation Mastery
// script.js
// ===========================

// Sticky Header Shadow

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 20){

header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

}else{

header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

}

});

// Reveal Animation

const cards = document.querySelectorAll(".box,.module-card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".7s";

observer.observe(card);

});

// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Active Navigation

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",function(){

links.forEach(item=>item.classList.remove("active"));

this.classList.add("active");

});

});
