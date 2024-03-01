const sigmaContainer = document.getElementById("sigma");
const btn = document.querySelector("#btn");
const quoteUrl = "https://type.fit/api/quotes";

let getQuote = () => {
    // Applying fade-out transition
    sigmaContainer.style.opacity = '0';

    fetch(quoteUrl)
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            sigmaContainer.textContent = `${data[randomIndex].text}`;

            // Applying fade-in transition after a short delay
            setTimeout(() => {
                sigmaContainer.style.opacity = '1';
            }, 100); // Adjusting delay to match transition duration
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
};

btn.addEventListener("click", () => {
    getQuote();
});

getQuote();
