const cartIcon = document.querySelector('.navbar-cart');
  const shoppingCart = document.querySelector('.shopping');
  const closeShopping = document.querySelector('.closeShopping');
  const proceedToCheckoutBtn = document.querySelector('.proceedToCheckout');
  const listCards = [];
  const totalElement = document.querySelector('.total');
  const quantityElement = document.querySelector('.quantity');


  cartIcon.addEventListener('click', () => {
    shoppingCart.classList.add('active');
    reloadCard();
  });

  closeShopping.addEventListener('click', () => {
    shoppingCart.classList.remove('active');
  });

let products = [
    {
    id: 1,
    name: "Avo Nice Day Cake in Cup",
    image: "img/avo-nice-day-cake-in-cup.jpg",
    description: "Yogurt,  avocadoes, pistachio, and almonds",
    price: 190
  },
  {
    name: "Mango Choco Moo Yogurt Cake in Cup",
    image: "img/Mango-Choco-Moo-Yogurt-Cake-in-Cup.jpg",
    description: "Yogurt, mangoes, almond dacquoise and chocolate",
    price: 190
  },
  {
    name: "Waterberry Wonder Cake in Cup",
    image: "img/waterberry-wonder-cake-in-cup.jpg",
    description: "Yogurt, strawberries, watermelon, almond dacquoise and pistachios",
    price: 190
  },
    {
    name: "A Melon Reasons Why I Lychee",
    image: "img/A-Melon-Reasons-Why-I-Lychee.jpg",
    description: "Yogurt x Melon x Lychee",
    price: 190
    },
   {
    name: "Avo Nice Day",
    image: "img/avo-nice-day-image.jpg",
    description: "Yogurt x Avocado",
    price: 190
  },
  {
    name: "Banana Boombastic Nutella Fantastic",
    image: "img/Banana-Boombastic-Nutella-Fantastic.jpg",
    description: "Yogurt x Banana x Nutella",
    price: 190
  },
  {
    name: "Banana Dance With Some Berries",
    image: "img/banna-dance-with-some-berries.jpg",
    description: "Yogurt x Blueberry x Strawberry x Banana",
    price: 190
  },
{
    name: "Berry Kiwissable",
    image: "img/Berry-Kiwissable.jpg",
    description: "Yogurt x Strawberry x Kiwi",
    price: 190
  },
  {
    name: "Boppin Boba",
    image: "img/Boppin Boba.jpg",
    description: "Yogurt x Boba Pearl",
    price: 190
  },
{
    name: "Chocnut Ka, Biscoff",
    image: "img/Chocnut Ka, Biscoff.jpg",
    description: "Yogurt x Chocnut bar",
    price: 190
  },
  {
    name: "Coconut Purple Rice",
    image: "img/Coconut Purple Rice.jpg",
    description: "Yogurt x Coconut x Purple Rice",
    price: 190
  },
  {
    name: "Cookies N’ Dream",
    image: "img/Cookies N’ Dream.jpg",
    description: "Yogurt x Cookies",
    price: 190
  },
  {
    name: "Dragon Funana",
    image: "Dragon Funana.jpg",
    description: "Yogurt x Dragon Fruit x Banana",
    price: 190
  },
  {
    name: "I’m Berry Blue Without You",
    image: "img/I’m Berry Blue Without You.jpg",
    description: "Yogurt x Blueberry",
    price: 190
  },
  {
    name: "It Takes Passion to Mango",
    image: "img/It Takes Passion to Mango.jpg",
    description: "Yogurt x Mango x Passion",
    price: 190
  },,
  {
    name: "Kitkat You Outta My Head",
    image: "img/Kitkat You Outta My Head.jpg",
    description: "Yogurt x  KitKat",
    price: 190
  },
  {
    name: "Lemon Bee The One",
    image: "img/Lemon Bee The One.jpg",
    description: "Yogurt x Lemon x Honey",
    price: 190
  },
  {
    name: "Mango Cracker Rocker",
    image: "img/Mango Cracker Rocker.jpg",
    description: "Yogurt x Mango x Graham",
    price: 190
  },
  {
    name: "Mango Moo",
    image: "img/Mango Moo.jpg",
    description: "Yogurt x Mango",
    price: 190
  },
  {
    name: "Nuts About You",
    image: "img/Nuts About You.jpg",
    description: "Yogurt x Pistachio x Almonds",
    price: 190
  },
   {
    name: "Simply Koomi",
    image: "img/Simply Koomi.jpg",
    description: "Yogurt x Honey",
    price: 190
  },
  {
    name: "Stick On-Me Purple Rice",
    image: "img/Stick On-Me Purple Rice.jpg",
    description: "Yogurt x Purple Sticky Rice",
    price: 190
  },
   {
    name: "Taro Purple Rice",
    image: "img/Taro Purple Rice.jpg",
    description: "Yogurt x Taro x Purple Rice",
    price: 190
  },
  {
    name: "Tropic Like It’s Hot",
    image: "img/Tropic Like It’s Hot.jpg",
    description: "Dragon x Apple x Orange",
    price: 190
  },
  {
    name: "Waterberry Wonder Cake in Cup",
    image: "img/waterberry wonder.jpg",
    description:
      "Yogurt, strawberries, watermelon, almond dacquoise and pistachios",
    price: 190
  },
  {
    name: "Will Ube Mine",
    image: "img/Will Ube Mine.jpg",
    description: "Yogurt x Ube x Cheese Foam x Nata",
    price: 190
  },
  {
    name: "You’re The Berry Best",
    image: "img/You’re The Berry Best.jpg",
    description: "Yogurt x Strawberry",
    price: 190
  },
];


  proceedToCheckoutBtn.addEventListener('click', () => {
    window.location.href = './checkout.html';
  });

  function addToCard(key) {
    if (listCards[key] == null) {
      listCards[key] = { ...products[key], quantity: 1 };
    } else {
      listCards[key].quantity++;
    }
    reloadCard();
  }

  function changeQuantity(key, quantity) {
    if (quantity <= 0) {
      delete listCards[key];
    } else {
      listCards[key].quantity = quantity;
    }
    reloadCard();
  }

  function reloadCard() {
    let count = 0;
    let totalPrice = 0;
    const listCard = document.querySelector('.listCard');
    listCard.innerHTML = '';

    listCards.forEach((value, key) => {
      if (value) {
        const newDiv = document.createElement('li');
        newDiv.innerHTML = `
          <div><img src="${value.image}" /></div>
          <div>${value.name}</div>
          <div>₱${value.price.toLocaleString()}</div>
          <div>
            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
          </div>
        `;
        listCard.appendChild(newDiv);

        count += value.quantity;
        totalPrice += value.price * value.quantity;
      }
    });

    totalElement.innerText = '₱' + totalPrice.toLocaleString();
    quantityElement.innerText = count;
  }
