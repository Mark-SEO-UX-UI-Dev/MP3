const beverageProducts = [
  {
    name: "Yogurt Ice Cream 1",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 2",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Ice Cream 3",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 4",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Ice Cream 5",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 6",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Ice Cream 7",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 8",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Ice Cream 9",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 10",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Ice Cream 11",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 12",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Ice Cream 13",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 14",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Ice Cream 15",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 16",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
    link: "beverages/avo-nice-day.html",
  },
  {
    name: "Yogurt Ice Cream 17",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 18",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Ice Cream 19",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 20",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
    link: "beverages/avo-nice-day.html",
  },
  {
    name: "Yogurt Ice Cream 21",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 22",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
  },
  {
    name: "Yogurt Ice Cream 23",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 24",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
    link: "beverages/avo-nice-day.html",
  },
  {
    name: "Yogurt Ice Cream 25",
    image: "img/koomi.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Yogurt Ice Cream 26",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
    link: "beverages/avo-nice-day.html",
  },
  {
    name: "Yogurt Ice Cream 26",
    image: "img/koomi.png",
    description: "Pellentesque ac fermentum nisi, vel sagittis ipsum.",
    price: 5.49,
    link: "beverages/avo-nice-day.html",
  },
];

function generateBeverageCards() {
  const productContainer = document.querySelector(".beverages-product-list");

  beverageProducts.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("beverages-product-card");

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
  const productCards = document.querySelectorAll(".beverages-product-card");

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
  generateBeverageCards();
});
