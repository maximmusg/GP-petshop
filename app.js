document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("product.json");
    const products = await response.json();

    const productGrid = document.querySelector(".product_grid");
    productGrid.innerHTML = "";

    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      productElement.innerHTML = `
      <h3>${product.nombre}</h3>
      
      <img src="${product.imagen}" alt="${product.alt}" />
      <p>${product.descripcion}</p>
      <h2>$${product.precio}</h2>
      <button class="btn">Agregar al carrito</button>
      <a class=" btn_detail" href="product.html?id=${product.id}">
      Ver producto
      </a>
      `;

      productGrid.appendChild(productElement);
    });

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("El producto se ha añadido al carrito");
      });
    });
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const response = await fetch("product.json");
    if (!response.ok) {
      throw new Error("Error al cargar los detalles del producto");
    }
    const products = await response.json();
    const product = products.find(
      (product) => product.id === parseInt(productId)
    );

    const productDetailsContainer = document.getElementById("product-details");
    productDetailsContainer.innerHTML = `
      <h1 class="product__title-desc">${product.nombre}</h1>
      <div class="product_data-cont">
        <img class= "product_data-img" src="${product.imagen}" alt="${product.alt}">
        <div class="product_data-info">
          <p>${product.descripcion}</p>
          <p class="precio_producto" >Precio: $${product.precio}</p>
        </div>
      </div>
      
      <p class="product_data-envio" >${product.envio}<p>
      <!-- Agrega más información del producto según sea necesario -->
    `;
  } catch (error) {
    console.error("Error al cargar los detalles del producto:", error);
  }
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var terms = document.getElementById("terms").checked;

    if (!name || !email || !phone || !message || !terms) {
      alert("Todos los campos son obligatorios.");
      event.preventDefault();
    } else {
      alert(
        "Gracias por comuncarte con GP-Petstore, recibirá una respuesta a la brevedad."
      );
    }
  });
