let api = 'https://fakestoreapi.com/products';

let cardContainer = document.getElementById('card-container');

async function fetchProducts() {
    try {
        const response = await fetch(api);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    products.forEach(product => {
        let card = document.createElement('div');
        card.className = 'card';

        let img = document.createElement('img');
        img.src = product.image;
        card.appendChild(img);

        let title = document.createElement('h2');
        title.textContent = product.title;
        card.appendChild(title);

        let price = document.createElement('p');
        price.textContent = product.price; 
        card.appendChild(price);

        let button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.onclick = () => addToCart(product);
        card.appendChild(button);

        cardContainer.appendChild(card);
    });
}

function addToCart(product) {
    alert(`Added ${product.title} to the cart!`);
}

fetchProducts();
