//Object representation
//1. on declaration
const obj1: {
  name: string;
  age: number;
  isPresent?: boolean; // ? means optional
} = {
  name: "John",
  age: 25,
  isPresent: true
}
console.log(obj1);

//2. using type
type ProductType = {
  id: number;
  title: string;
  price?: number | number[]; //union type/optional
}

const product1: ProductType = {
  id: 1,
  title: "Laptop",
  price: [999.99, 1999.99]
}
console.log(product1);

//3. using interface
interface UserInterface {
  username: string | number; //union type
  email: string;
  isActive: boolean //default value
}

const User1: UserInterface = {
  username: 123,
  email: "xyz@gmail.com",
  isActive: false
}
console.log(User1);

//4. Using class - OOP
class User{
  //encapsulation - public, private, protected
  username: string;
  email: string;
  isActive: boolean = true; //default value
  constructor(username: string, email: string){
    this.username = username;
    this.email = email;
  } 
  //.methods
}
const user2 = new User("Alice", "alice@gmail.com");
console.log(user2);
class Employee extends User{
  //inheritance
  empID: number;
  constructor(username: string, email: string, empID: number){
    super(username, email); //call parent constructor
    this.empID = empID;
  }


}

//polymorphism
const user3: User = new Employee("Bob", "bob@gmail.com", 101);
console.log(user3);

//Abstraction
interface IShape{
  area(): number;
}
class Square implements IShape{
  side: number;
  constructor(side: number){
    this.side = side;
  } 
  area(): number {
    return this.side * this.side;
  }
}

//task
type ComplexType = {
  id: number;
  user: User;
  products: ProductType[];
  square: Square;
  userDetails: UserInterface;
}
const complexObj: ComplexType = {
  //fill this object with appropriate values
  id: 1,
  user: new User("Charlie", "charle@gmail.com"),
  products: [ { id: 1, title: "Phone", price: 499.99 }, { id: 2, title: "Tablet", price: [299.99, 399.99] } ],
  square: new Square(5),
  userDetails: { username: "Dave", email: "dave@gmail.com", isActive: true }
}
console.log(complexObj.square.area());

type PhoneType ={title: string}
type NetworkType = {provider: string}

type CallType = PhoneType | NetworkType; //union type
const ct1: CallType = {title: "iPhone"};
const ct2: CallType = {provider: "Verizon"};
console.log(ct1, ct2);

type MobileType = PhoneType & NetworkType; //intersection type "&" means both types must be satisfied
const mt1: MobileType = {title: "iPhone", provider: "Verizon"}; //both attributes must be present
console.log(mt1);

//Generic- Type Injection
const genericFn = <T>(arg: T): T => {
  console.log(arg, typeof arg);
  return arg;
}
genericFn<string>("Hello"); //<T> is replacer 
genericFn<number>(123); //<T> is replaced by number