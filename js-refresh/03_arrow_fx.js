const name = "Mario";
let age = 30;
const hasHobbies = true;

age = 46;

const userSummary = (name, age, hasHobbies) => {
  return name + " is " + age + " years old and has hobbies: " + hasHobbies;
};

console.log(userSummary(name, age, hasHobbies));

const add = (a, b) => a + b;
console.log(add(1, 2));

const add1 = a => a + 1;
console.log(add1(1));

const addRandom = () => Math.random() + Math.random();
console.log(addRandom());
