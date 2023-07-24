const products = [
  {
    name: "Yogurt Beverage 1",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Beverage 2",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Beverage 3",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Beverage 4",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Cake 1",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Cake 2",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Cake 3",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Cake 4",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
];

function generateProductCards() {
  const productContainer = document.querySelector(".product-list");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;

    const price = document.createElement("p");
    price.textContent = `$${product.price.toFixed(2)}`;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);

    productContainer.appendChild(card);
  });

  observeFadingEffect();
}

function observeFadingEffect() {
  const productCards = document.querySelectorAll(".product-card");

  const observerOptions = {
    threshold: 0.2,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const isVisible = entry.isIntersecting;
      const productCard = entry.target;

      if (isVisible) {
        productCard.classList.add("visible");
      } else {
        productCard.classList.remove("visible");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  productCards.forEach((productCard) => {
    observer.observe(productCard);
  });
}

window.addEventListener("load", function () {
  generateProductCards();
});
