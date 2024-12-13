const registerBtn = document.getElementById("registerBtn");
const registerModal = document.getElementById("registerModal");
const closeRegister = document.getElementById("closeRegister");

    // Open the modal when Register is clicked
    registerBtn.onclick = () => {
        registerModal.style.display = "flex";
    };

    // Close the modal when close button is clicked
    closeRegister.onclick = () => {
        registerModal.style.display = "none";
    };

    // Close the modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    };

    // Function to handle registration (without data storage)
    function registerUser() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const validation = document.getElementById("validation");

        // Simple validation check for empty inputs
        if (!username || !password) {
            validation.textContent = "Please enter both a username and password.";
            validation.style.color = "red";
        } else {
            validation.style.color = "green";
            validation.textContent = "Registration successful! Redirecting to Home...";
            
            
            // Redirect to home after a short delay
            setTimeout(() => {
                registerModal.style.display = "none";
                window.location.href = "#home";
            }, 1000);
        }
    }

let favoritesList = [];

function addToFavorites(bookTitle, bookImage) {
    const favoritesContainer = document.getElementById('favorites-container');
    
    // Check if the book is already in favorites
    if (favoritesList.includes(bookTitle)) {
        alert('The book is already in favorites!');
    } else {
        // Add to favorites
        favoritesList.push(bookTitle);

        const bookItem = document.createElement('div');
        bookItem.classList.add('favorite-item');
        
        const bookImageElement = document.createElement('img');
        bookImageElement.src = bookImage;
        bookImageElement.alt = bookTitle;
        bookItem.appendChild(bookImageElement);
        
        const bookTitleElement = document.createElement('p');
        bookTitleElement.textContent = bookTitle;
        bookItem.appendChild(bookTitleElement);
        
        favoritesContainer.appendChild(bookItem);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => {
            // Remove from favoritesList
            favoritesList = favoritesList.filter(title => title !== bookTitle);
            // Remove from DOM
            favoritesContainer.removeChild(bookItem);
        };
        bookItem.appendChild(deleteButton);
        
        favoritesContainer.appendChild(bookItem);
    }

    
}

// Modal functionality
const modal = document.getElementById('favorites-modal');
const openModalBtn = document.getElementById('open-favorites-btn');
const closeModal = document.getElementById('close-favorites');

// Open modal
openModalBtn.onclick = () => {
    modal.style.display = 'block';
};

// Close modal
closeModal.onclick = () => {
    modal.style.display = 'none';
};

// Close modal when clicking outside of the modal content
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};



document.addEventListener("DOMContentLoaded", function() {
    
    // Product Hover Effect
    var products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.addEventListener("mouseover", () => {
            product.style.transform = "scale(1.05)";
            product.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
            product.style.transition = "all 0.3s";
        });
        product.addEventListener("mouseout", () => {
            product.style.transform = "scale(1)";
            product.style.boxShadow = "none";
        });
    });

    // Smooth Scroll for Links
    var links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });
});

let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("search-box");
    const productList = document.querySelectorAll(".product");

    // Add an event listener to the search box
    searchBox.addEventListener("input", function () {
        const searchTerm = searchBox.value.toLowerCase();

        // Loop through all product elements
        productList.forEach(product => {
            const bookName = product.querySelector("h3").innerText.toLowerCase();

            // Check if the book name includes the search term
            if (bookName.includes(searchTerm)) {
                product.style.display = "block"; // Show the product if it matches
            } else {
                product.style.display = "none"; // Hide the product if it doesn't match
            }
        });
    });
});






