// ===========================
// AI Learn Then Earn
// script.js
// ===========================

// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("show");
}

// Search Button
function searchWebsite() {

    const input = document.querySelector(".search-box input");

    if (!input) return;

    const keyword = input.value.trim();

    if (keyword === "") {
        alert("Please enter something to search.");
        return;
    }

    alert("Search feature coming soon!\n\nYou searched for: " + keyword);
}

// Enter key search
const searchInput = document.querySelector(".search-box input");

if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchWebsite();
        }
    });
}

// Sticky Header Shadow
window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.10)";
    }

});

// Scroll To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Footer Year
const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        "© " + year + " AI Learn Then Earn. All Rights Reserved.";
}

console.log("AI Learn Then Earn Loaded Successfully.");
