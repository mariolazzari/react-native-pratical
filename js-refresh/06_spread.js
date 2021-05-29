// spread
const hobbies = ["sport", "music"];
const copy = [...hobbies];
console.log(copy);

// rest operator
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3));
console.log(toArray(1, 2, 3, 4, 5, 6));
