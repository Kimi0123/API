//Variable Types
//let, const, var
const name = "john";
let age = 21;
age = 22;
var city = "kathmandu";
city = "Lalitpur";

console.log(name, age, city);

//variables and scope {}
if(true){
  //let const -> blocked scoped
  let firstname = "Ram";
  const  lastname = "Bahadur";
  var country = "Nepal"; //function scoped or global scoped
}

//console.log(firstname,lastname);//error: not defined
console.log(country);//can be accessed outside the block

//common data types
const stringVar = "Hello World"; //string '', or ``
const numberVar = 42; //number integer or float 42.1
const booleanVar = true; // boolean true or false
const nullVar = null; //intentiona empty
const undefinedVar = undefined;// variable declared but not assigned
const symbol1 = Symbol("Nirvan"); //unique and immutable
const symbol2 = Symbol("Nirvan");
console.log(symbol1 === symbol2); //false

console.log(stringVar, typeof stringVar);
console.log(numberVar, typeof numberVar);
console.log(booleanVar, typeof booleanVar);
console.log(nullVar, typeof nullVar);
console.log(undefinedVar, typeof undefinedVar);
console.log(symbol1, typeof symbol1);

// = , == , ===
const num1 = 5; 
const num2 = "5";

console.log(num1 == num2);
console.log(num1 === num2);

//collection / list

const array = [1,2,3,"four", true, null];
array.push(5);// add element at the end
array.unshift(0); // add element at the beginning
console.log(array);
array.pop(); //remove last element
array.shift(); //remove first element
console.log(array);

//itearation

for(let i = 0; i < array.length; i++){
  console.log(array[i]);
}

// for in loop -> iterating over indices
for(let index in array){
  console.log(index, array[index]);

}

//for of loop -> iterating over values
for(let value of array){
  console.log(value);
}

//Object
//JSON - JAVASCRIPT "Object" Notation
const person = {
  firstname: "Ram",
  lastname: "Bahadur",
  age: 25,
  hobbies: ["reading", "traveling"],
  address:{
    city: "kathmandu",
    country: "Nepal",
    location: [27.7121, 85.3240]
  }
}

console.log(person);
console.log(person.firstname); //"." dot notation
console.log(person['lastname']);

person.age = 26; //update value
person.hobbies.push("coding"); //add element to array

console.log(person.detail);

// console.log(person.detail.id);
//nullable/fallback
console.log(person.detail ?? "NO details available");
console.log(person.detail || "No details available");

const check = 0 ;
console.log(check ?? "value is  null or undefined");
console.log(check || "Valur is falsy");

//nullable chaining

console.log(person.detail?.id);
console.log(person.detail?.id?.number);
//?. if undefined, will automatically return undefined for rest

//fallback to chaining
console.log(person.detail?.id ?? "N/6dxc gvbhnikoA");

//destructing an obbject
const {hobbies, address: {city, country} } = person ;
console.log(hobbies, city, country);

const {firstname: fname, lastname: lname} = person;
console.log(fname, lname);

//create 2 student objects
const student1 ={
  name : "Alice",
  age: 22,
  marks: [85, 90, 78]
}

const student2 ={
  name : "Shrayash",
  age: 20,
  marks: [60, 70, 80]
}

//create array of students, find average marks of each student,
//and print name and average marks
//also print the average marks of all students
let students = [student1, student2];
let totalMarks = 0;
for (let student of students) {
    let totalMarks = 0;
    for (let mark of student.marks) {
        totalMarks += mark;
    }
    let averageMarks = totalMarks / student.marks.length;
    totalMarksAll += averageMarks;
    console.log(`${student.name} : average ${averageMarks}`);
}
let averageMarksAll = totalMarksAll / students.length;
console.log(`Average marks of all students: ${averageMarksAll}`);

