/* ==========================================
   SEO Mastery Course
   AI Learn Then Earn
========================================== */

/* ==========================
Mobile Menu
========================== */

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}

/* ==========================
Dark Mode
========================== */

const themeBtn = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerHTML = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = "🌙";

    }

});

/* ==========================
Search Modules
========================== */

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = this.value.toLowerCase();

        let cards = document.querySelectorAll(".module-card");

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.includes(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/* ==========================
Smooth Active Navigation
========================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});

/* ==========================
Scroll Animation
========================== */

const cards = document.querySelectorAll(".module-card, .info-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});

/* ==========================
Back To Top Button
========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

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
