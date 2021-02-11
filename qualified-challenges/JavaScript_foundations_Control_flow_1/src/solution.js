/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `product`, it is referring to an object. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

// Use a conditional (ternary) operator below.
function checkSize(product, size) {
  return (product.availableSizes.includes(size)) ? "We have that size." : "We do not have that size.";
}

// Use a switch statement below.
function newYorkCitySalesPrice(product, city) {
  let tax;
  switch (city) {
    case "Amherst": 
      tax = 1.0875;
      break;
    case  "Brooklyn": 
      tax = 1.08875;
      break;
    case  "Buffalo": 
      tax = 1.0875;
      break;
    case  "Cheektowaga": 
      tax = 1.0875;
      break;
    case  "Hempstead": 
      tax = 1.08625;
      break;
    case  "Jamaica": 
      tax = 1.08875;
      break;
    case  "Mount Vernon": 
      tax = 1.08375;
      break;
    case  "New York City": 
      tax = 1.08875;
      break;
    case  "Staten Island": 
      tax = 1.08875;
      break;
    case  "White Plains": 
      tax = 1.08375;
      break;
    case  "Yonkers": 
      tax = 1.08875;
      break;
    default:
      tax = 1.08;
  }

  return product.priceInCents * tax;
}

module.exports = {
  checkSize,
  newYorkCitySalesPrice,
};
