/* eslint-disable strict */
const printNames = names => {
  names.forEach((name) => console.log(name));
}

const logTreeType = trees => {
  trees.forEach((tree) => console.log(tree.type));
}

const totalPoints = numbers => {
  let total = 0;
  numbers.forEach((number) => {total += number});
  return total;        
}

const buildSentence = words => {
  let sentence = '';
  words.forEach((word) => {sentence += word + ' ' });
  return sentence;
}

const logPercentages = percentages => {
  percentages.forEach((percentage) => console.log ((percentage * 100) + '%' ));
}


function findParkByName(parks, name) {
  return parks.find((park) => park.name === name );
}

function allParksAboveCertainSize(parks, minSize) {
  return parks.every((park) => park.areaInSquareKm > minSize);
}

function getBigParkNames(parks, minSize) {
  return parks.filter((park) => (park.areaInSquareKm >= minSize)).map((park) => park.name);
}

function doesStateHaveOneBigPark(parks, minSize, state) {
  return parks.filter((park) => (park.location.state === state)).some((park) => park.areaInSquareKm >= minSize);
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};