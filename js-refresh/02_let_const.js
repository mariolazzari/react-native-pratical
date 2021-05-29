const name = "Mario";
let age = 30;
const hasHobbies = true;

age = 46;

function userSummary(name, age, hasHobbies) {
  return name + " is " + age + " years old and has hobbies: " + hasHobbies;
}

console.log(userSummary(name, age, hasHobbies));
