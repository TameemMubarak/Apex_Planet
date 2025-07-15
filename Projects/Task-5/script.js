const form = document.getElementById('userForm');
const blogs = JSON.parse(localStorage.getItem('blogs')) || [];



function loadBlogData() {
    const blogList = document.getElementById('blogsList');
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    console.log(blogs)
    blogList.innerHTML = '';
    blogs.forEach((blog,index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>${blog.blogTitle}</h4>
            <p>${blog.blogContent}</p>
            <h6>  -----${blog.blogAuthor} <button onclick="deleteBlog(${index})">Delete</button></h6>
            <div class="blog-preview">
            ${(blog.blogImages || []).map(img => `<img src="${img}" class="img-fluid" width="200" />`).join('')}
            </div>
          `;
        blogList.appendChild(div);
    });
}

function deleteBlog(index) {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    console.log('hi ')
    blogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    loadBlogData();
  }


form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('email').value.trim();
    const formData = {
        userName: name,
        userEmail: email
    }
    localStorage.setItem("userData", JSON.stringify(formData));
    form.reset()
    const modalInstance = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
    modalInstance.hide();
    const storedUser = JSON.parse(localStorage.getItem("userData"));

storage();
   
})

function alertMessage() {
    alert("welcome to Sethi...")
}

function displayDate() {
    const date = new Date();
    const dateString = date.toLocaleString();
    document.getElementById("date").textContent = dateString;
}

displayDate();
setInterval(displayDate, 1000);


// Carousel functionality
const images = [
    "carosel_us.jpg", "carosel_fire.JPG", "carosel_ban.jpg"
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
getJoke()
function storage(){
    const storedUser = JSON.parse(localStorage.getItem("userData"));
const out=document.getElementById('sign');
out.innerHTML='';
const p=document.createElement('p');

if (storedUser) {
    document.getElementById("displayName").textContent = storedUser.userName;
    document.getElementById("displayEmail").textContent = storedUser.userEmail;
    p.innerHTML=`<h6>signedIN</h6>`;
    out.appendChild(p);
    
} else {
    document.getElementById("displayName").textContent = "Guest";
    document.getElementById("displayEmail").textContent = "Not Logged In";
}
}

window.addEventListener('DOMContentLoaded', loadBlogData);