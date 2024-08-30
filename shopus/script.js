let cart = [];

// Function to add product to cart
function addToCart(product) {
    cart.push(product);
    updateCartCount();
    alert('Product added to cart!');
}

// Function to remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCartItems();
}

// Function to update cart count in the navigation bar
function updateCartCount() {
    document.querySelectorAll('.cart-count').forEach(count => {
        count.textContent = cart.length;
    });
}

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    let total = 0;

    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item" data-index="${index}">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);

        total += item.price;
    });

    document.querySelector('.total').textContent = total.toFixed(2);
}

// Event listeners for adding to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price),
            image: button.parentElement.querySelector('img').src
        };
        addToCart(product);
    });
});

// Event listeners for removing from cart
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', () => {
        const index = button.dataset.index;
        removeFromCart(index);
    });
});