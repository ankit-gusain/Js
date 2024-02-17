// Data representing questions and answers for the accordion
const data = [
    {
        id: 1,
        question: " What is an accordion?",
        answer: "An accordion is a musical instrument that belongs to the free-reed aerophone family. It consists of a set of reed plates enclosed in a box with a folding bellows. The player presses buttons or keys to open and close valves, allowing air to flow over the reeds and produce sound."
    },
    {
        id: 2,
        question: " What are the main types of accordions?",
        answer: "There are various types of accordions, but the two primary categories are piano accordions and button accordions. Piano accordions have a keyboard layout similar to a piano, while button accordions have buttons arranged in a specific pattern."
    },
    {
        id: 3,
        question: " How does an accordion produce sound?",
        answer: "The accordion produces sound through the vibration of reeds. When the player presses a button or key, it opens a valve, allowing air to flow over specific reeds. The reeds vibrate, creating sound waves that resonate inside the instrument and are then amplified by the accordion's body."
    },
    {
        id: 4,
        question: " How many bass buttons does a standard accordion have?",
        answer: "The number of bass buttons on an accordion can vary, but a standard piano accordion typically has 120 bass buttons. Button accordions may have a different number of bass buttons, depending on their design and type."
    },
    {
        id: 5,
        question: "  How do you care for and maintain an accordion?",
        answer: "Accordion maintenance involves keeping the instrument clean, ensuring the bellows are in good condition, and regularly checking and adjusting reeds. It's important to store the accordion in a dry environment and to avoid extreme temperature changes. Regularly using and playing the accordion helps keep it in good working order."
    }
];

// Reference to the HTML element that will contain the accordion
let accordionWrapper = document.querySelector(".accordion");

// Function to create the accordion HTML based on the provided data
function createAccordionData() {
    accordionWrapper.innerHTML = data.map(dataItem => `
        <div class="accordion_item"> 
            <div class="accordion_title">
                <!-- Question -->
                <h3> ${dataItem.question} </h3>
                <!-- Arrow icon (FontAwesome) indicating the accordion state -->
                <i class="fa-solid fa-arrow-up"></i>
            </div>
            <!-- Answer content initially hidden -->
            <div class="accordion_content">
                <!-- Answer -->
                <h3> ${dataItem.answer} </h3> 
            </div>
        </div>`
    ).join(" ");
}

// Initialize the accordion using the provided data
createAccordionData();

// Event listeners for each accordion title
let getAccordionTitles = document.querySelectorAll(".accordion_title");
getAccordionTitles.forEach(currentItem => {
    currentItem.addEventListener("click", () => {
        // Toggle the "active" class to show/hide the accordion content
        if (currentItem.classList.contains("active")) {
            currentItem.classList.remove("active");
        }
        else {
            // Close any already open accordions
            let getAlreadyActiveClasses = document.querySelectorAll(".active")
            getAlreadyActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove("active")
            });

            // Open the clicked accordion
            currentItem.classList.add("active");
        }
    });
});
