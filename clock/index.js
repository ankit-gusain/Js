let clock = document.querySelector("#clock");

function updateClock() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}
updateClock();// Update the clock immediately

setInterval(updateClock, 1000);  // Set up a timer to update the clock every second


//use of date.toLocaleTimeString() returns time part of date object
//to update and show a constant update ona desired time interval we use setInterval method