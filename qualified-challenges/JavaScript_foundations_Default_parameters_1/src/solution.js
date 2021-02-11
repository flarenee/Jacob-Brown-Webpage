/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `product`, they are referencing an object with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getPriceInDollars( product = []) {
  const { priceInCents } =  product; 
  return ("$" + ((priceInCents || 0) / 100).toFixed(2));
}

// `size` is a number between 0 and 16.
function checkIfSizeIsAvailable(product, size) {
  if (!product || !size ) return false;
  const { availableSizes } = product;
  if ( !availableSizes ) return false;
  for (let i = 0; i < availableSizes.length; i++) {
    if (availableSizes[i] === size) {
      return true;
    }
  }

  return false;
}

module.exports = { getPriceInDollars, checkIfSizeIsAvailable };
