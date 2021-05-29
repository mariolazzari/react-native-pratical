const person = {
  name: "Mario",
  age: 46,
};

// fx destructoring
const printName = ({ name }) => {
  console.log(name);
};
printName(person);

// obj destructoring
const { name, age } = person;
console.log(name, age);

// array destructoring
const hobbies = ["Sport", "Music"];
const [sport, music] = hobbies;
console.log(sport, music);
