//function
function functionName(arg1, arg2) {
    const result= arg1+arg2;
    console.log(result);
    return result;
}
const ret = functionName(2,3);
console.log(ret);

//variable refrence
const vaiableFunction = function(){
    console.log("some result");
}
vaiableFunction();

//arrow function
const arrowFunction= (arg) => "HELLO"+arg;
const ret2=arrowFunction("world");
console.log(ret2);

//arrow function behaviour 
const arrowFunction2=() => {
    console.log("scope arrow");
    return "something";
}
arrowFunction2();

const obj={
    "name": "shray",
    func1: function(){
        console.log("scope normal",this.name);
    },
    func2:() => {
        console.log("scope arrow",this.name);
    }
}

//arrow function is anonymous
obj.func1();
obj.func2();

//closure and callback
const outerFunction= (outerArg)=>{
    let counter=outerArg;
    const innerFunction =()=>{
        counter++;
        console.log(counter);
    }
}
const closureFunc=outerFunction(1);
closureFunc();//2
closureFunc();//3 -> preserves the previous state

const closureFunc2=outerFunction(1);
closureFunc2();//2=> new inastance of counter variable

closureFunc();

//hogher order function, callback
const hof1=(arg1,callback)=> {
    callback(arg1);
}
const callbackFunc= (arg)=>{
    console.log("hello",arg);
}
hof1("world",callbackFunc);
hof1("world",(arg)=>console.log("hi",arg));

const calculate=(num1,num2,cb)=>{
    const result=cb(num1,num2);
    console.log(result);
    return result;
}
const addition=(a,b)=>a+b;
const additionResult=calculate(2,3,addition);
const substractionResult=calculate(5,2 ,(a,b) =>a-b);

//list/collection
const fruits=["apple","mango","grapes"];
//iterartion using callback
const howToIterate=(item,index,arr)=>{
    //logic to iterate
    console.log(index,item);
}
fruits.forEach(howToIterate);

fruits.forEach(
    (item,index)=>console.log(index,item)
);

//map/transform
const transformedFruits=fruits.map(
    (item,idx,arr)=>item.toUpperCase()
);
console.log(transformedFruits);

//UI/UX
const liTags=fruits.map(
    (item,idx)=>{
        let classname="";
        if(idx % 2==0){
            classname="bg-light text-dark";
        }else{
            classname="bg-dark tect-light";
        }
        return`<li id="${item}" class="${classroom}">${item}</li>`;
    }
)
console.log(liTags);

const filteredFruits= fruits.filter(
    (item,idx,arr)=> item.length>5
);
console.log(filteredFruits);

const accumulatedValue= fruits.reduce(
    (acc,idx,arr)=>acc+item,
    ""//inital state
);
console.log(accumulatedValue);


const students=[
    {name:"sabin", age:25, grade:80},
    {name:"Ram", age:22, grade:90},
    {name:"shyam", age:24, grade:85},
    {name:"Hari", age:26, grade:50},
    {name:"alice", age:25, grade:95},
]
//Using map, return new array of student name only
//using filter, return new array of students who scored above 80
//using filter, return new array of students with new index
//using reduce, return the total grade of all students
const names = students.map(student => student.name);
console.log(names);