let var1 = "Hello World";
console.log(var1);
//var1 = 1; cannot change type

//run 
//npx ts-node day5.ts

//ts implementation
let strVar: String = "Ram";
let numVar: number = 20;
let boolVar: boolean = true;
let anyVar: any = "I can be anything";
anyVar = 123;
let unknownVar: unknown = "I am unknown";
unknownVar = "456";
//strVar = anyVar; //can assign any to String
//strVar = uknownVar; // cannot
console.log(strVar, typeof strVar);
console.log(numVar, typeof numVar);
console.log(anyVar, typeof anyVar);
console.log(boolVar, typeof boolVar);
console.log(unknownVar, typeof unknownVar);
//union 
let unionVar: string | number = "Union Type";
unionVar = 100;
//unionVar = true; //cannot
console.log(unionVar, typeof unionVar);

//[]
let arr1: number[] = [1,2,3];
//using Array generic type
let arr2: Array<string> = ["a", "b", "c"];
let arr3: (string | number) [] = ["a", 1 , "b", 2];
let arr4: any[] = [1, "two", true];
console.log(arr1, arr2, arr3, arr4);

//tuple
let tupleVar: [string, number] = ["Age", 30];
console.log(tupleVar);

//typeScript functions
const add = (a: number, b: number): number =>{
  return a+b;
}
console.log(add(5,10));

const calculate = (a: number, b?: number): string => {
  return "Some result";
}
console.log(calculate(5));
//console.log(calculate(5,10));
const detail = (name: string = "Unknown", age: number = 0) =>{
  return `Name: ${name}, Age: ${age}`;
}
console.log(detail()); //auto return type
console.log(detail("Alice", 20));

const fruits: string[] =["Apple", "Cherry", "Kiwi", "Grapes", "Fig"];
//create a function -> filterFruits that takes array of string 
//and add number as parameters -> default number is 3
//and returns array of string with length greater than  number

//create a function -> countFruits that takes array of string
//and return number of fruits with length greater than 2

//create a function -> findFruits that takes array of String, search String
//and returns first fruit found, findFruits must be Promise fn
//resolve if found, reject if not found
function filterFruits(fruits: string[], num: number = 3): string[] {
  return fruits.filter(fruit => fruit.length > num);
}

function countFruits(fruits: string[]): number {
  return fruits.filter(fruit => fruit.length > 2).length;
}

function findFruits(fruits: string[], search: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const index = fruits.findIndex(fruit => fruit.toLowerCase().includes(search.toLowerCase()));
    if (index !== -1) {
      resolve(fruits[index]);
    } else {
      reject(new Error('Fruit not found'));
    }
  });
}