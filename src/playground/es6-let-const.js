var nameVar = 'Adrian';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
// let nameLet = 'Julie';   -> Will not work
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// const nameConst = 'Gunther';  -> Will not work
// nameConst = 'John';  -> Will not work
console.log('nameConst', nameConst);

//Block scoping

var fullName = 'Adrian Gomez';

if (fullName) {
  var firstName = fullName.split(' ');
  console.log(firstName);
}

console.log(firstName); // will not work with const and let
