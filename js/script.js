
/* ------------====Preloader start===------------ */
window.addEventListener("load",function(){
    setTimeout(()=>{document.querySelector(".preloader").style.display="none"; document.querySelector(".preloader").classList.add("opacity-0"); },1000)
})
/* ------------===Preloader End===-------------- */

/* ============ typing animation ============ */
// var typed = new Typed(".typing", {
//     strings: ["", "Web Developer", "Problem Solver", "Competitive Programmer"],
//     typeSpeed: 100,
//     BackSpeed: 60,
//     loop: true
// })

/* ============ Aside ============ */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        // for (let i = 0; i < totalSection; i++) {
        //     allSection[i].classList.remove("back-section");
        // }
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log((sectionIndex));
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}


// code for changing website title and favicon
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Anuj | PortFolio";
            $("#favicon").attr("href", "./images/favicon.jpg");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "./images/foldhand.png");
        }
    }
);



//-- code for sending Email through EmailJS -->

function sendMail() {
    // Extract form values
    const name = document.querySelector('input[placeholder="Name*"]').value;
    const email = document.querySelector('input[placeholder="E-mail*"]').value;
    const subject = document.querySelector('input[placeholder="Subject*"]').value;
    const message = document.querySelector('textarea[placeholder="Message*"]').value;

    // Email.js parameters
    const templateParams = {
        to_email: 'xp27anujkumar@gmail.com', // Replace with the recipient's email
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    // Send email using Email.js
    emailjs.send("service_8sandtg", "template_ijwq0n8",templateParams)
        .then((response) => {
            console.log("Email sent successfully:", response);
            alert("Email sent successfully!");
            // Optionally, clear the form after successful submission
            clearForm();
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Error sending email. Please try again.");
        });
}

function clearForm() {
    // Clear form values
    document.querySelector('input[placeholder="Name*"]').value = '';
    document.querySelector('input[placeholder="E-mail*"]').value = '';
    document.querySelector('input[placeholder="Subject*"]').value = '';
    document.querySelector('textarea[placeholder="Message*"]').value = '';
}
