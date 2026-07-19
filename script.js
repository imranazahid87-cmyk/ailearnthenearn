// ===== Mobile Menu =====

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

// ===== Search =====

function searchWebsite() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    if(input.includes("chatgpt") || input.includes("gemini") || input.includes("ai")){
        window.location.href="tools.html";
    }
    else if(input.includes("seo") || input.includes("course")){
        window.location.href="courses.html";
    }
    else if(input.includes("earn")){
        window.location.href="earn.html";
    }
    else if(input.includes("blog")){
        window.location.href="blog.html";
    }
    else if(input.includes("contact")){
        window.location.href="contact.html";
    }
    else{
        alert("No matching page found.");
    }

}

// ===== Dark Mode =====

const themeBtn = document.getElementById("theme-btn");

if(themeBtn){

themeBtn.addEventListener("click",function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
themeBtn.innerHTML="☀";
}
else{
themeBtn.innerHTML="🌙";
}

});

}

// ===== Back To Top =====

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}

};

function topFunction(){

window.scrollTo({

top:0,
behavior:"smooth"

});

}
