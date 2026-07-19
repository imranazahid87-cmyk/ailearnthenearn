
function searchWebsite(){

let input=document.querySelector(".search-box input").value.toLowerCase();

if(input.includes("chatgpt")){
window.location.href="tools.html";
}

else if(input.includes("gemini")){
window.location.href="tools.html";
}

else if(input.includes("seo")){
window.location.href="courses.html";
}

else if(input.includes("course")){
window.location.href="courses.html";
}

else if(input.includes("blog")){
window.location.href="blog.html";
}

else if(input.includes("earn")){
window.location.href="earn.html";
}

else{

alert("No result found.");

}

}
const themeBtn = document.getElementById("theme-btn");

if(themeBtn){
themeBtn.addEventListener("click",function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
themeBtn.innerHTML="☀️ Light Mode";
}else{
themeBtn.innerHTML="🌙 Dark Mode";
}

});
}
function toggleMenu(){

document.querySelector("nav").classList.toggle("show");

}
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

};

function topFunction(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}
