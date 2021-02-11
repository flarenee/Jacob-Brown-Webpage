/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `products`, it is referring to an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getProductsBySize(products, size) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    for (let j = 0; j < product.availableSizes.length; j++) {
      if (product.availableSizes[j] === size) {
        result.push(products[i]);
      }
    }
  }

  return result;
}

function moreThanThreeProducts(products) {
  return products.length > 3;
}

function checkForSizeByName(products, name, size) {
  let product = false;
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) product = true;
  }
  if (!product) return false;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.name === name) {
      const sizeAvailable = product.availableSizes.includes(size);
      if (!sizeAvailable) return sizeAvailable;
      if (!size) return false;
      if (sizeAvailable) {
        return sizeAvailable;
      }
    }
  }
}

module.exports = {
  getProductsBySize,
  moreThanThreeProducts,
  checkForSizeByName,
};
