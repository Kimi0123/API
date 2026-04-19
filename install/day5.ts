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