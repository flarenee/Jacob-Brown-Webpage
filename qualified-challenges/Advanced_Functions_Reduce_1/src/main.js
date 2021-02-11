/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
  const result = parks.reduce((acc, object) => acc + object.areaInSquareKm, 0);
  return result;
}

function parkNameAndState(parks) {
  return parks.reduce((acc, object) => { acc[object.name] = object.location.state; return acc } ,{} );
}

function parkByState(parks) {
  const renameKey = parks.reduce((acc, object) => { 
    acc[object.location.state] = parks.filter((newObj) => newObj.location.state === object.location.state ); 
    
    return acc 
  }, {});
  console.log (renameKey)
  return renameKey;
}


module.exports = { squareKmTotal, parkNameAndState, parkByState };
