/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `product`, it is referring to an object. Each object has the following shape:
   {
     name: "Washed Black Denim Overalls",
     priceInCents: 12000,
     availableSizes: [ 28, 30, 32, 36 ]
   }
*/

// `salesTax` is a decimal number, like 0.065
function createSalesProduct(product, salesTax) {
   return { ...product, priceInCents: product.priceInCents *(1 + salesTax), salesTax };
};


function joinSizes(productA, productB) {
  return [...productA.availableSizes, ...productB.availableSizes];
 
}

module.exports = {
  createSalesProduct,
  joinSizes,
};
