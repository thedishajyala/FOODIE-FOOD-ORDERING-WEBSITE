
function addItemToCart() {
    var itemName = localStorage.getItem('itemName');
    var itemPrice = localStorage.getItem('itemPrice');
    addToCart(itemName, itemPrice);
}

const addToCart = async function (name, price) {
    // Try backend first if available
    if (typeof window.addToCartAPI === 'function' || (typeof addToCartAPI !== 'undefined' && typeof addToCartAPI === 'function')) {
        try {
            const addFunc = window.addToCartAPI || addToCartAPI;
            await addFunc({
                name: name,
                price: price
            });
            console.log('Item added to cart via backend');
        } catch (error) {
            console.warn('Backend add failed, using localStorage:', error);
        }
    } else if (typeof addToCart === 'function' && addToCart !== arguments.callee) {
        // If global addToCart function exists (from api-utils.js)
        try {
            await addToCart({
                name: name,
                price: price
            });
            console.log('Item added to cart via backend');
        } catch (error) {
            console.warn('Backend add failed, using localStorage:', error);
        }
    }

    // Fallback to localStorage
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    if (name == null && price == null) return;
    const existingItem = cartItems.find(item => item.name === name);
    if (!existingItem) {
        cartItems.push({ name, price });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(cartItems);
    }

    updateCartDisplay();
    calculateBill();
}

const updateCartDisplay = function () {
    const cartBody = document.querySelector(".items");
    cartBody.innerHTML = '';
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    cartItems.forEach(item => {
        const cartRow = document.createElement("tr");
        const cartItemName = document.createElement("td");
        const cartItemPrice = document.createElement("td");
        cartItemName.innerText = item.name;
        cartItemPrice.innerText = item.price;
        cartItemPrice.classList.add("price");
        cartRow.appendChild(cartItemName);
        cartRow.appendChild(cartItemPrice);
        cartBody.appendChild(cartRow);
    });
}


// calculate total bill amount
let total = 0;
const calculateBill = () => {
    itemPrices = document.querySelectorAll(".price");
    for (p of itemPrices) {
        if (p != null) {
            console.log(p.innerText);
            total += parseFloat(p.innerText.replace('$', ''));
        }
    }

    console.log(total);
    if (total != 0 && !isNaN(total)) {
        document.getElementById("bill").innerText = "$" + total.toFixed(2)
    }

}

document.addEventListener('DOMContentLoaded', function () {
    addItemToCart();
});

let orderBtn = document.querySelector(".butt");
orderBtn.addEventListener("click", async () => {
    if (total == 0) {
        alert("Please add something in the cart to place the order");
        return;
    }

    // Try to create order via backend
    if (typeof createOrder === 'function') {
        try {
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
            const orderData = {
                items: cartItems,
                total: total
            };

            const order = await createOrder(orderData);
            alert(`Order placed successfully! Order ID: ${order.orderId || order.id || 'N/A'}`);

            // Clear cart
            localStorage.removeItem('cartItems');
            if (typeof clearCart === 'function') {
                await clearCart();
            }

            updateCartDisplay();
            calculateBill();
            return;
        } catch (error) {
            console.error('Order creation failed:', error);
            alert('Failed to place order. Please try again.');
        }
    }

    // Fallback message
    alert("Order placed!");
})


// const applyFirstTimeDiscount = () => {
//     let isFirstTimeUser = localStorage.getItem('isFirstTimeUser');
//     if (!isFirstTimeUser) {
//         const couponCode = generateCouponCode();
//         localStorage.setItem('couponCode', couponCode);
//         localStorage.setItem('isFirstTimeUser', true);
//         document.getElementById('couponCode').innerText = `Use coupon code ${couponCode} for 30% off!`;
//         alert(`Congratulations! Your coupon code is ${couponCode}. You've received a 30% discount on your first order.`);
//     }
// }

