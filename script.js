const productData = {
    "skincare": [
        { name: "Vitamin C Serum", image: "images/vitaminCSerum.jpg", price: 29.99, id: 1 },
        { name: "Moisturizer", image: "images/moisturizer.jpg", price: 19.99, id: 2 },
        { name: "Sunscreen", image: "images/sunscreen.jpg", price: 14.99, id: 3 },
        { name: "Under Eye Cream", image: "images/under eye cream.jpg", price: 12.99, id: 4 },
        { name: "Body Lotion", image: "images/body lotion.jpg", price: 8.99, id: 5 },
        { name: "Under Eye Roller", image: "images/under eye roller.jpg", price: 15.99, id: 6 },
        { name: "Charcoal Peel Off Mask", image: "images/charcoal peel off.jpg", price: 10.99, id: 7 },
        { name: "Face Mask", image: "images/face mask.jpg", price: 7.99, id: 8 },
        { name: "Toner for Face", image: "images/toner for face.jpg", price: 9.99, id: 9 },
        { name: "Face Wash", image: "images/face wash.jpg", price: 6.99, id: 10 }
    ]
};

function displayProducts(category, products) {
    const productGrid = document.getElementById(category).querySelector('.product-grid');
    if (!productGrid) return;
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onError="this.src='placeholder.jpg';">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button data-product-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(productItem);
    });
}

displayProducts("skincare", productData.skincare);

const addToCartButtons = document.querySelectorAll('.product-item button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        alert(`Simulated: Product with ID ${productId} added to cart!`);
    });
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

