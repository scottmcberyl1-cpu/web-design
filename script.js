// ===================================
// VARIABLES
// ===================================

let websiteName = "My Interactive Website";

const year = 2026;

// ===================================
// ARRAY
// ===================================

const products = [
    {
        name: "Laptop",
        price: 800
    },
    {
        name: "Phone",
        price: 500
    },
    {
        name: "Keyboard",
        price: 30
    }
];

// ===================================
// FUNCTIONS
// ===================================

function displayProducts(productList) {

    const productContainer = 
    document.getElementById("products");

    productContainer.innerHTML = "";

    productList.forEach(function(product) {

        const productDiv = document.createElement("div");

        productDiv.className = "product";

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>

            <button class="buyButton">Buy</button>
        `;

        productContainer.appendChild(productDiv);
    });

    // Add events to the buy buttons
    const buyButtons = document.querySelectorAll(".buyButton");

    buyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            button.addEventListener("click", function() {
                alert("Product added to your cart!");

            });
        });
    }

    // ===================================
    // DISPLAY PRODUCTS
    // ===================================

    const searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("input", function() {
        const searchText = .value.toLowerCase();

        const filteredProducts = products.filter(function(product) {
            return product.name.toLowerCase().includes(searchText);
        });

        displayProducts(filteredProducts);
    });

    // ===================================
    // BUTTON EVENT
    // ===================================

    const helloButton = document =.getElementById("helloButton");

    helloButton.addEventListener("click", function() {

        const message = document.getElementById("message");

        message.textContent = "Hello, welcome to " + websiteName + "!";
    });

    // ===================================
    // NAVIGATION
    // ===================================

    document.getElementById("homeButton").addEventListener("click", function() {

        document.getElementById("home").scrollIntoView();
    });

    // ===================================
    // CONTACT FORM
    // ===================================

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Prevent page refresh
        event.preventDefault();

        const name = document.getElementById("name").value;

        const formMessage = document.getElementById("formMessage");

        formMessage.textContent = "Thank you, " + name + ",! Your message has been received.";

        console.log("Form submitted by: " + name);
    });

    // ===================================
    //DEBUGGING
    // ===================================

    console.log("Website loaded successfully.");

    console.log("websiteName: " + websiteName);

    console.log("Products: ", products);

    console.log("Current Year: " + year);