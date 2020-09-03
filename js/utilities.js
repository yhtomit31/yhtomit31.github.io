function notifyUserAddedToCart() {
    var newDiv = document.createElement("div");
    var itemCountSpan = document.createElement("span");
    var cartIcon = document.createElement("i");

    newDiv.style.position = "fixed";
    newDiv.style.top = "4em";
    newDiv.style.right = "4em";

    itemCountSpan.innerHTML = localStorage.getItem("cartItems");
    cartIcon.className = "fas fa-shopping-cart added-to-cart";
    cartIcon.appendChild(itemCountSpan);
    newDiv.appendChild(cartIcon);
    
    document.body.appendChild(newDiv, cartIcon)
}