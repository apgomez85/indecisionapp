//arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //   console.log(arguments);  -> will not work
  return a + b;
};

console.log(add(55, 1));

//this keywword - no longer bound

const user = {
  name: 'Adrian',
  cities: ['Santa Ana', 'Davis', 'Dana Point'],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [5, 4, 6, 8, 7],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());
