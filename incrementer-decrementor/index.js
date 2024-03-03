const counter = document.querySelector("#counter");

let incFunc = () => {
    let value = parseInt(counter.innerText);
    value = value + 1;
    counter.innerText = value;
}

let decFunc = () => {
    let value = parseInt(counter.innerText);
    value = value - 1;
    counter.innerText = value;
}

document.querySelector("#dec").addEventListener("mouseover", decFunc);
document.querySelector("#inc").addEventListener("mouseover", incFunc);
