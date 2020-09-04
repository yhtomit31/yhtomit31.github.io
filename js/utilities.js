function notifyUserAddedToCart() {
    var oldAddToCart =  document.getElementsByClassName("add-to-cart-container")[0];
    if (oldAddToCart) { oldAddToCart.remove(); }
    
    var newDiv = document.createElement("div");
    var itemCountSpan = document.createElement("span");
    var cartIcon = document.createElement("i");

    newDiv.classList.add("add-to-cart-container");
    newDiv.style.position = "fixed";
    newDiv.style.top = "4em";
    newDiv.style.right = "4em";

    itemCountSpan.innerHTML = localStorage.getItem("cartItems");
    cartIcon.className = "fas fa-shopping-cart added-to-cart";
    cartIcon.appendChild(itemCountSpan);
    newDiv.appendChild(cartIcon);
    
    document.body.appendChild(newDiv, cartIcon)
}