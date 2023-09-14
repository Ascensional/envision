// JavaScript code to handle cart functionality
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

const cart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        
        cart.push({ product, price });
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.product}: $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}
