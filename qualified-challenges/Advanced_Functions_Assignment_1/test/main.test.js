const { expect } = require("chai");
const {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
} = require("../src/main");

describe("Solution", () => {
  const parks = [
    {
      id: 1,
      name: "Acadia",
      areaInSquareKm: 198.6,
      location: { state: "Maine" },
    },
    {
      id: 2,
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    },
    {
      id: 3,
      name: "Crater Lake",
      areaInSquareKm: 741.5,
      location: { state: "Oregon" },
    },
    {
      id: 4,
      name: "Lake Clark",
      areaInSquareKm: 10602,
      location: { state: "Alaska" },
    },
    {
      id: 5,
      name: "Kenai Fjords",
      areaInSquareKm: 2710,
      location: { state: "Alaska" },
    },
    {
      id: 6,
      name: "Zion",
      areaInSquareKm: 595.9,
      location: { state: "Utah" },
    },
  ];

  const users = {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    },
    "dwayne.m55": {
      visited: [2, 5, 1],
      wishlist: [],
    },
    thiagostrong1: {
      visited: [5],
      wishlist: [6, 3, 2],
    },
    "don.kim1990": {
      visited: [2, 6],
      wishlist: [1],
    },
  };

  describe("getParksByState()", () => {
    it("should return an array of all parks in the given state", () => {
      const actual = getParksByState(parks, "Alaska");
      const expected = [
        {
          id: 4,
          name: "Lake Clark",
          areaInSquareKm: 10602,
          location: { state: "Alaska" },
        },
        {
          id: 5,
          name: "Kenai Fjords",
          areaInSquareKm: 2710,
          location: { state: "Alaska" },
        },
      ];
      expect(actual).to.eql(expected);
    });
    it("should return an empty array if there are no parks in the given state", () => {
      const actual = getParksByState(parks, "Washington");
      expect(actual).to.be.empty;
    });
  });

  describe("getWishlistParksForUser()", () => {
    it("should return an array of all parks on the user's wishlist", () => {
      const actual = getWishlistParksForUser(parks, users, "karah.branch3");
      const expected = [
        {
          id: 4,
          name: "Lake Clark",
          areaInSquareKm: 10602,
          location: { state: "Alaska" },
        },
        {
          id: 6,
          name: "Zion",
          areaInSquareKm: 595.9,
          location: { state: "Utah" },
        },
      ];

      expect(actual).to.eql(expected);
    });

    it("should return an empty array if the wishlist is empty", () => {
      const actual = getWishlistParksForUser(parks, users, "dwayne.m55");
      expect(actual).to.be.empty;
    });
  });

  describe("userHasVisitedAllParksInState()", () => {
    it("should return true if the user has visited all the parks in the given state", () => {
      const actual = userHasVisitedAllParksInState(
        parks,
        users,
        "Utah",
        "don.kim1990"
      );
      expect(actual).to.be.true;
    });

    it("should return false if the user has not visited all the parks in the given state", () => {
      const actual = userHasVisitedAllParksInState(
        parks,
        users,
        "Utah",
        "dwayne.m55"
      );
      expect(actual).to.be.false;
    });
  });

  describe("userHasVisitedParkOnWishlist()", () => {
    it("should return true if the first user has visited any locations on the second user's wishlist", () => {
      const actual = userHasVisitedParkOnWishlist(
        users,
        "karah.branch3",
        "don.kim1990"
      );
      expect(actual).to.be.true;
    });
    it("should return false if the first user has not visited any locations on the second user's wishlist", () => {
      const actual = userHasVisitedParkOnWishlist(
        users,
        "thiagostrong1",
        "don.kim1990"
      );
      expect(actual).to.be.false;
    });
  });

  describe("getUsersForUserWishlist()", () => {
    it("should return usernames of those users who have visited places on a user's wishlist", () => {
      const actual = getUsersForUserWishlist(users, "thiagostrong1");
      const expected = ["dwayne.m55", "don.kim1990"];
      expect(actual).to.have.members(expected);
    });

    it("should return an empty array if there is no one who has visited", () => {
      const actual = getUsersForUserWishlist(users, "dwayne.m55");
      const expected = [];
      expect(actual).to.have.members(expected);
    });
  });
});
