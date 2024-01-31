const x: number = 10;
const y: number = 25;
const z: number = x + y;
console.log("Sum of x+ y = " + z);

let age: number = 20;
if (age<50)
 age += 10;
console.log(age);

let sales = 1234;
let course ='Typescript';
let is_published = true;
let level;
function render(document){
    console.log(document);
}

//arrays
let numbers: number[] =[1,2,3,];
numbers.forEach(n =>n)

//tuple
let user:[number , string ]= [1, 'gavin'];
user.push(1);

//enums
const small = 1;
const medium= 2;
const large = 3;

enum Size {small =1 , medium =2, large =3}
let mySize: Size = Size.medium;
console.log(mySize);

//functions
function calculatorTax(income: number): number{
    if(income < 50_000)
    return income *1.2;
return income * 1.3;
}

//object 
type employee ={
    readonly id : number,
    name: String,
    retire: (date: Date)=> void

}
let Employee: {
 
} ={ id:1,
    name:'gavin',
    retire: (date: Date)=>{
        console.log(date);
    } 
};

//umion type
function kgTOLbs(weight: number  | string): number{
    if(typeof weight ==='number')
      return weight *2.2;
    else
      return parseInt(weight) * 2.2;
}
kgTOLbs(10);
kgTOLbs('10kg');

//intersection type
type Draggable ={
    drag: () => void
};

type  Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget ={
    drag:()=> {},
    resize:() =>{}
}

//literal types
type quantity = 50|100;
let quantity : quantity = 100;

type Metric = 'cm'| 'inch'

//nullable types
function greet( name: string){
    if(name)
      console.log(name.toLocaleUpperCase());
    else
      console.log('hola');
}
 //optonal chaining
 type Customer = {
    birthday: Date
 };

 function getCustomer (id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date ()};
 }
  let Customer = getCustomer(0);
  console.log(Customer?.birthday);


  




















