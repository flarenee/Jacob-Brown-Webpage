/*
  The `faker` packaged has already been installed. Require it here and use the package inside of the plantGenerator() function.
  
  For the name, you can use whatever value from `faker` that you want. For color, use one of the available color methods.
  
  Finally, export the function as a function.
*/
let faker = require('faker')

function plantGenerator() {
  return {
    name: faker.name.findName(),
    color: faker.commerce.color(),

  }
}
module.exports = plantGenerator
