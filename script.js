
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
