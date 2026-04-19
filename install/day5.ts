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