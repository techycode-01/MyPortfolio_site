/* ================= toggle style switcher =================  */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})
//hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.toggle("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
});
document.addEventListener("click", (event) => {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (event.target !== styleSwitcher && !styleSwitcher.contains(event.target)) {
        styleSwitcher.classList.remove("open");
    }
});

/* ================= theme colors =================  */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

/* ================= theme light and dark mode =================  */
// This code is for displaying font awesome icons
// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
// })
// window.addEventListener("load", () => {
//     if (document.body.classList.contains("dark")) {
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else {
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// });


/* ================= theme light and dark mode =================  */
// This code is for displaying Google font icons
const dayNight = document.querySelector(".day-night");
window.addEventListener("load", () => {
    const span = dayNight.querySelector("span");
    if (document.body.classList.contains("dark")) {
        span.textContent = "light_mode";
    } else {
        span.textContent = "dark_mode";
    }
});


const modeIcon = document.getElementById("popup-modeIcon");

dayNight.addEventListener("mouseenter", () => {
    const span = dayNight.querySelector("span");
    if (span.textContent === "light_mode") {
        modeIcon.innerText = "Switch to Light Mode";
        modeIcon.style.display = "block";
    } else {
        modeIcon.innerText = "Switch to Dark Mode";
        modeIcon.style.display = "block";
    }
});

dayNight.addEventListener("mouseleave", () => {
    modeIcon.style.display = "none";
});

dayNight.addEventListener("click", () => {
    const span = dayNight.querySelector("span");
    if (span.textContent === "light_mode") {
        span.textContent = "dark_mode";
        document.body.classList.remove("dark");
        modeIcon.innerText = "Switch to Dark Mode";
    }
    else {
        span.textContent = "light_mode";
        document.body.classList.add("dark");
        modeIcon.innerText = "Switch to Light Mode";
    }
});



/* === Popup Notifications for changing theme color === */
const paletteIcon = document.querySelector(".fa-palette");
const popupPalette = document.getElementById("popup-palette");
paletteIcon.addEventListener("mouseover", () => {
    popupPalette.style.display = "block";
});
paletteIcon.addEventListener("mouseout", () => {
    popupPalette.style.display = "none";
});



