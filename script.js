// ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// ================= POPUP =================

const popup = document.getElementById("popup");

const popupTitle = document.getElementById("popupTitle");

const popupText = document.getElementById("popupText");


function showMessage() {

    popupTitle.innerText = "Why Are Reservoirs Important?";

    popupText.innerText =
        "Reservoirs store water and provide important resources for drinking, farming, electricity generation and water management.";

    popup.classList.add("active");

}


function showAgriculture() {

    popupTitle.innerText = "Reservoir Water & Agriculture";

    popupText.innerText =
        "Reservoir water is transported through canals and irrigation systems to farms. It helps farmers grow crops during dry seasons.";

    popup.classList.add("active");

}


function showHydro() {

    popupTitle.innerText = "Hydroelectric Power";

    popupText.innerText =
        "Water flowing from a reservoir can turn turbines. The turbines drive generators that produce electricity.";

    popup.classList.add("active");

}


function closePopup() {

    popup.classList.remove("active");

}


// Close popup when clicking outside

popup.addEventListener("click", function(event) {

    if (event.target === popup) {
        closePopup();
    }

});


// ================= COUNTERS =================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    const counterSection =
        document.querySelector(".counter-section");

    const position =
        counterSection.getBoundingClientRect().top;

    const screenHeight =
        window.innerHeight;

    if (position < screenHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.getAttribute("data-target"));

            let number = 0;

            const speed = 30;

            const updateCounter = () => {

                if (number < target) {

                    number++;

                    counter.innerText = number;

                    setTimeout(updateCounter, speed);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

    }

}


window.addEventListener("scroll", startCounters);

startCounters();


// ================= FEEDBACK FORM =================

const feedbackForm =
    document.getElementById("feedbackForm");


feedbackForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    popupTitle.innerText = "Thank You! 💧";

    popupText.innerText =
        "Thank you " + name +
        " for sharing your valuable feedback about our Water Reservoir project.";

    popup.classList.add("active");

    feedbackForm.reset();

});