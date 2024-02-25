let randomColor = function () {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let changeColor;
let body = document.querySelector("body");
let onStart = document.querySelector("#start");
onStart.addEventListener("click", startChangingColor);

let onStop = document.querySelector("#stop");
onStop.addEventListener("click", stopChangingColor);

function startChangingColor() {
    changeColor = setInterval(function () {
        body.style.backgroundColor = randomColor(); // Add parentheses to invoke the function
    }, 500);
};

function stopChangingColor() {
    clearInterval(changeColor);
};
