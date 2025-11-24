const products = [
  { id: 1, name: "T-Shirt", price: 799, image: "products/tshirt.jpg" },
  { id: 2, name: "Shoes", price: 1499, image: "products/shoes.jpg" },
  { id: 3, name: "Watch", price: 2999, image: "products/watch.jpg" },
  { id: 4, name: "Bag", price: 999, image: "products/bag.jpg" },
  { id: 5, name: "Laptop", price: 49999, image: "products/laptop.jpg" },
  { id: 6, name: "Phone", price: 19999, image: "products/phone.jpg" }
];

let cartCount = 0;

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onerror="this.src='products/default.jpg'">
      <h2>${product.name}</h2>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(div);
  });
}

function addToCart(id) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert("Added to cart!");
}

displayProducts();
