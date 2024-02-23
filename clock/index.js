let clock = document.querySelector("#clock");

function updateClock() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}
updateClock();// Update the clock immediately

setInterval(updateClock, 1000);  // Set up a timer to update the clock every second
