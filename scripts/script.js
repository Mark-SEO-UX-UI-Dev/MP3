const products = [
  {
    name: "Avo Nice Day",
    image: "img/avo-nice-day-image.jpg",
    description: "Yogurt x Avocado",
  },
  {
    name: "Banana Dance With Some Berries",
    image: "img/banna-dance-with-some-berries.jpg",
    description: "Yogurt x Blueberry x Strawberry x Banana",
  },
  {
    name: "Nuts About You",
    image: "img/Nuts About You.jpg",
    description: "Yogurt x Pistachio x Almonds",
  },
  {
    name: "Waterberry Wonder Cake in Cup",
    image: "img/waterberry wonder.jpg",
    description:
      "Yogurt, strawberries, watermelon, almond dacquoise and pistachios",
  },
  {
    name: "Will Ube Mine",
    image: "img/Will Ube Mine.jpg",
    description: "Yogurt x Ube x Cheese Foam x Nata",
  },
  {
    name: "You’re The Berry Best",
    image: "img/You’re The Berry Best.jpg",
    description: "Yogurt x Strawberry",
  },
  {
    name: "Mango Choco Moo Yogurt Cake in Cup",
    image: "img/Mango-Choco-Moo-Yogurt-Cake-in-Cup.jpg",
    description: "Yogurt, mangoes, almond dacquoise and chocolate",
  },
  {
    name: "Chocnut Ka, Biscoff",
    image: "img/Chocnut Ka, Biscoff.jpg",
    description: "Yogurt x Choco x Nuts",
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

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);

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
