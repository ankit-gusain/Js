let inp = document.querySelector("#editor");
inp.addEventListener("input", function () {
    console.log(inp.value);

    let outputText = document.querySelector("#output-text");
    outputText.innerText = inp.value;
});
