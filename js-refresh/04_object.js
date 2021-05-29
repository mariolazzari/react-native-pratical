const person = {
  name: "Mario",
  age: 46,

  greet() {
    console.log("Hi, my name is", this.name);
  },
};

person.greet();
