const hobbies = ["sport", "music"];

for (const hobby of hobbies) {
  console.log(hobby);
}

const newHobbies = hobbies.map(h => "hobby: " + h);
console.log(newHobbies);

// ref type
hobbies.push("new hobby");
console.log(hobbies);
