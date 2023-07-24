const products = [
  {
    name: "Avo Nice Day",
    image: "img/avo-nice-day-image.jpg",
    description: "Yogurt x Avocado",
    price: 190,
  },
  {
    name: "Banana Dance With Some Berries",
    image: "img/banna-dance-with-some-berries.jpg",
    description: "Yogurt x Blueberry x Strawberry x Banana",
    price: 190,
  },
  {
    name: "Nuts About You",
    image: "img/Nuts About You.jpg",
    description: "Yogurt x Pistachio x Almonds",
    price: 190,
  },
  {
    name: "Waterberry Wonder Cake in Cup",
    image: "img/waterberry wonder.jpg",
    description:
      "Yogurt, strawberries, watermelon, almond dacquoise and pistachios",
    price: 190,
  },
  {
    name: "Will Ube Mine",
    image: "img/Will Ube Mine.jpg",
    description: "Yogurt x Ube x Cheese Foam x Nata",
    price: 190,
  },
  {
    name: "You’re The Berry Best",
    image: "img/You’re The Berry Best.jpg",
    description: "Yogurt x Strawberry",
    price: 190,
  },
  {
    name: "Mango Choco Moo Yogurt Cake in Cup",
    image: "img/Mango-Choco-Moo-Yogurt-Cake-in-Cup.jpg",
    description: "Yogurt, mangoes, almond dacquoise and chocolate",
    price: 190,
  },
  {
    name: "Chocnut Ka, Biscoff",
    image: "img/Chocnut Ka, Biscoff.jpg",
    description: "Yogurt x Choco x Nuts",
    price: 190,
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
    price.textContent = `$₱{product.price.toFixed(2)}`;

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
