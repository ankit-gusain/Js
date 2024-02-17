// Get references to the input box and list container elements
let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#list-container");

// Event listener for the "Add" button click
document.querySelector(".btn").addEventListener("click", function addTask() {
    // Check if the input box is empty
    if (inputBox.value === "")
        alert("Must write and add something !!!"); // Display an alert if input is empty
    else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Set the inner HTML of the list item to the input value
        listContainer.appendChild(li); // Append the list item to the list container

        // Create a close (remove) button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Set the close button content to "×"
        li.appendChild(span); // Append the close button to the list item
    }

    inputBox.value = ""; // Clear the input box
    saveData(); // Save the updated data to localStorage
});

// Event listener for clicks on the list container
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the "checked" class on list item
        saveData(); // Save the updated data to localStorage
    } else if (e.target.tagName === "SPAN") {

        //note 
        //why span is written as SPAN not span 
        //Tag names in JavaScript, particularly when working with the tagName property, are case-sensitive. Therefore, it should be written in all uppercase.

        // Remove the parent list item when the close button is clicked
        e.target.parentNode.remove();
        saveData(); // Save the updated data to localStorage
    }
}, false);

// Function to save the current state of the list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to retrieve and display tasks from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Display tasks on page load
