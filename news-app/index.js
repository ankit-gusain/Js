
const apiKey = "8285b48064224e208903f7f2712ca58c";
const blogContainer = document.querySelector("#blog-container");
const bannerImageContainer = document.getElementById("banner-image-container");
const searchField = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

let currentIndex = 0;
let intervalId;

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data.articles;
    } catch (error) {
        console.error("Error in fetching the data ", error);
        return [];
    }
}

searchButton.addEventListener("click", async () => {
    const query = searchField.value.trim();
    if (query !== "") {
        try {
            const articles = await fetchNewsQ(query);
            displayBlog(articles);
            displayBanner(articles);
        } catch (error) {
            console.log("Error in fetching news by search", error);
        }
    }
});

function displayBlog(articles) {
    blogContainer.innerHTML = "";

    if (articles && articles.length > 0) {
        articles.forEach(article => {
            const blogCard = document.createElement("div");
            blogCard.classList.add("blog-card");
            const img = document.createElement("img");
            img.src = article.urlToImage;
            img.alt = article.title;
            const title = document.createElement("h2");
            const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 25) + "...." : article.title;
            title.textContent = truncatedTitle;

            const description = document.createElement("p");
            const truncatedDesc = article.description && article.description.length > 100 ? article.description.slice(0, 100) + "...." : article.description;
            description.textContent = truncatedDesc || "No description available";

            blogCard.appendChild(img);
            blogCard.appendChild(title);
            blogCard.appendChild(description);
            blogCard.addEventListener("click", () => {
                window.open(article.url, "_blank");
            });
            blogContainer.appendChild(blogCard);
        });
    } else {
        console.log("No articles found");
    }
}

async function fetchNewsQ(query) {
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=100&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data.articles;
    } catch (error) {
        console.error("Error in fetching the data ", error);
        return [];
    }
}

function displayBanner(articles) {
    bannerImageContainer.innerHTML = "";

    if (articles && articles.length > 0) {
        const bannerImage = document.createElement("img");
        bannerImage.src = articles[currentIndex].urlToImage;
        bannerImage.alt = articles[currentIndex].title;
        bannerImage.classList.add("banner-image");
        bannerImageContainer.appendChild(bannerImage);


        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % articles.length;
            updateBannerImage(articles);
        }, 2000);  //for delay
    }
}

function updateBannerImage(articles) {
    const bannerImage = document.querySelector(".banner-image");
    bannerImage.src = articles[currentIndex].urlToImage;
    bannerImage.alt = articles[currentIndex].title;
}

// Initial call to fetch and display random news
(async () => {
    try {
        const articles = await fetchRandomNews();
        console.log(articles);
        displayBlog(articles);
        displayBanner(articles);
    } catch (error) {
        console.log("Error in fetching data", error);
    }
})();
