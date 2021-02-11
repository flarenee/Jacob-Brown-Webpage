/*
  The following functions were written with `var` instead of `let` and `const`. Keep the functions working but remove all instances of `var` from the code. You should not need to change any other code!
  
  When any of the following function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

// Find the most expensive item.
function mostExpensiveItem(products) {
  let product = products[0];

  for (let i = 1; i < products.length; i++) {
    const newProduct = products[i];
    if (product.priceInCents < newProduct.priceInCents) {
      product = newProduct;
    }
  }

  return product;
}

// Return an array of all names of all products.
function getAllProductNames(products) {
  let names = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    names.push(product.name);
  }

  return names;
}

function addPriceInDollars(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    product.price = "$" + (product.priceInCents / 100).toFixed(2);
  }

  return products;
}

function addMaxSize(products) {
  // Loop through all products.
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    // Loop through all availableSizes.
    for (let j = 0; j < product.availableSizes.length; j++) {
      const size = product.availableSizes[j];
      // If there is not a `maxSize` property or the `maxSize`
      // is less than the current size,set the `maxSize` to the
      // current size.
      if (!product.maxSize || product.maxSize < size) {
        product.maxSize = size;
      }
    }
  }

  return products;
}

module.exports = {
  mostExpensiveItem,
  getAllProductNames,
  addPriceInDollars,
  addMaxSize,
};
