/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Court Sneaker",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  let selected = null;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.name === name && product.availableSizes.includes(size)) {
      selected = product;
    }
  }
  return selected;
}

function addProductToCart({ name, priceInCents }, cart = {}) {
  const selected = cart[name];
  if (selected) {
    selected.quantity++;
  } else {
    cart[name] = { priceInCents, quantity: 1 };
  }

  return cart;
}

function calculateTotal(cart) {
  let result = 0;
  for (let name in cart) {
    const item = cart[name];
    result += item.quantity * item.priceInCents;
  }
  return result;
}

function printReceipt(cart) {
  const total = calculateTotal(cart);
  if (!total) return null;

  let result = "";
  for (let name in cart) {
    const { quantity, priceInCents } = cart[name];
    const amount = printablePrice(priceInCents);
    result += `${quantity}x${name} - ${amount}\n`;
  }

  return result + `Total: ${printablePrice(total)}`;
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
