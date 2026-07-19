// ================= Mobile Menu =================

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}

// ================= Back To Top =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ================= Search =================

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");

    if (!searchInput || !searchButton) return;

    searchButton.addEventListener("click", function () {

        const value = searchInput.value.trim().toLowerCase();

        if (value.includes("chatgpt") || value.includes("gemini") || value.includes("claude") || value.includes("perplexity")) {
            window.location.href = "tools.html";
        }
        else if (value.includes("course") || value.includes("seo")) {
            window.location.href = "courses.html";
        }
        else if (value.includes("earn") || value.includes("freelance")) {
            window.location.href = "earn.html";
        }
        else if (value.includes("blog")) {
            window.location.href = "blog.html";
        }
        else if (value.includes("contact")) {
            window.location.href = "contact.html";
        }
        else if (value !== "") {
            alert("No matching page found.");
        }
    });
});

// ================= Dark Mode =================

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
