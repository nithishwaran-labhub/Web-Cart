const products = [
  {id:1, name:"T-Shirt", price:799, image:"images/tshirt.jpg"},
  {id:2, name:"Shoes", price:1499, image:"images/shoes.jpg"},
  {id:3, name:"Watch", price:2999, image:"images/watch.jpg"},
  {id:4, name:"Bag", price:999, image:"images/bag.jpg"},
  {id:5, name:"Laptop", price:49999, image:"images/laptop.jpg"},
  {id:6, name:"Phone", price:19999, image:"images/phone.jpg"}
];

let cartCount = 0;

function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
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

