//This is an object data type
const iife = (() => {
  const person = {
    name: "Ezekiel",
    age: 25,
  };
  const person1 = {
    name: "Peter",
    age: 30,
  };

  const displayName = () => console.log(person.name + " " + person.age);
  console.log(person1.name + " " + person1.age);
  return () => displayName();
})();

iife();
const arrayName = ["peter", "Joseph", "david", "jackson"];
console.log(arrayName[0], arrayName[1]);
const newArray = arrayName.map((names) =>
  console.log("My names is" + " " + names + " " + "and 20 years old")
);
