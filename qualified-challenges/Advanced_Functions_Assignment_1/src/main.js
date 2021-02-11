/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  return parks.filter((park) => park.location.state === state);
}

function getWishlistParksForUser(parks, users, username) {
  let wish = users[username].wishlist;
  let final = parks.filter((park) => wish.includes(park.id));
  return final;  
}

function userHasVisitedAllParksInState(parks, users, state, username) {
  let array = getParksByState(parks, state);
  const visited = users[username].visited;
  return array.every((myId) => visited.includes(myId.id));
};

function userHasVisitedParkOnWishlist(users, usernameA, usernameB,) {
  let visitedA = users[usernameA].visited;
  let wishlistB = users[usernameB].wishlist;
  let result = wishlistB[0] === visitedA[0];
  return result; 
};

function getUsersForUserWishlist(users, username) {
  return Object.keys(users).filter((user) => users[user].visited.find((visit) => users[username].wishlist.find((wish) => wish === visit)));
};



module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
