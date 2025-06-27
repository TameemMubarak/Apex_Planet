// Carousel functionality
const images = [
    "carosel3.jpg","carosel2.JPG","carosel.jpg"
    ];
    let currentImage = 0;
    
    const carouselImg = document.getElementById("carousel-image");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    
    function updateCarousel() {
        carouselImg.src = images[currentImage];
    }
    
    prevBtn.addEventListener("click", () => {
        currentImage = (currentImage - 1 + images.length) % images.length;
        updateCarousel();
    });
    
    nextBtn.addEventListener("click", () => {
        currentImage = (currentImage + 1) % images.length;
        updateCarousel();
    });
    
    // Initialize first image
    updateCarousel();
    
    // Joke API functionality
    async function getJoke() {
        const jokeElement = document.getElementById("joke");
        jokeElement.textContent = "Loading...";
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
            const data = await response.json();
            jokeElement.textContent = data.joke || "Couldn't fetch a joke right now.";
        } catch (error) {
            jokeElement.textContent = "Failed to load joke.";
            console.error(error);
        }
    }
    
    // Load a joke on page load
    getJoke();