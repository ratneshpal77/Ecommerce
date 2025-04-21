// SEARCH FUNCTIONALITY
const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();

  productCards.forEach(card => {
    const productName = card.querySelector("h3").textContent.toLowerCase();

    if (productName.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// CART BUTTON CLICK HANDLER
const cartButton = document.getElementById("cartButton");

cartButton.addEventListener("click", () => {
  alert("Cart clicked! You can view your cart items here.");
});
