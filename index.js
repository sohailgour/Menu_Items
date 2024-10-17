// console.log("Jai Shree Ram");


// variable

// var age=32;
// console.log(age);
// console.log(age);
// console.log(age);
// console.log(age);
// console.log(age);
// console.log(age);
// console.log(age);
// console.log(age);


// Data types

// Number => 1,-2,9.65,3.56,0,0.008;
// String => '',"";
// Boolean => true,false;
// Null => null;
// undefined => undefined;
//NaN => Not a Number


// var age = -8.907;
// console.log(typeof age);

// var name= 'Suhail';
// var lastName ="Gour";

// console.log(typeof name,typeof lastName);


// var x=true;
// console.log(typeof x);

// var y;
// console.log(typeof y,y);


// var price = null;
// console.log(typeof price,price);

// var x;
// var y=x-5;
// console.log(typeof y,y);


// operators

// Arithmatic operator => +,-,*,/,%

// console.log(5+4);
// console.log(5-4);
// console.log(5*4);
// console.log(5/4);
// console.log(5%4);

// var x=5;
// var y=4;
// var sum = x+y;
// console.log(sum);

// Relational Operator => <,>,<=,>=,!=,==,===

// console.log(5<=4);
// console.log(5>=4);
// console.log(5 != 4);
// console.log(5 == "5");


// Logical Opearator => && , || , !

// console.log(true && false);
// console.log(true || false);
// console.log(!true);


// console.log(!(5<=4) && (8>=7))


// Bitwise Operator => & , | , ~

// console.log(5&4);
// console.log(5|4);
// console.log(~5);
// console.log(0==false)
// console.log(0===false)


// var x;
// var y= x;
// // x=9;
// console.log(x,y);


// conditional statement

// if ,else, elseif,  nested if else 

// var x=15;
// var y=1;

// if(x>y){
//     console.log("X is greater",x);
// }
// console.log("first");
// if(x===y){
//    console.log("Both are equal",x,y);
// }
// console.log("second");
// if(y>x){
//     console.log("Y is greater",y);
// }
// console.log("third");

// if(x>y){
//     console.log("X is greater",x);
// }
// else if(x===y){
//    console.log("Both are equal",x,y);
// }
// else{
//     console.log("Y is greater",y);
// }


// nested if else



// var age=5;
// var name = "Anmol"

// if(age>=18){
//     if(name === "Suhail"){
//         console.log("My name is",name , "and my age is",age);
//     }
//     else{
//         console.log("Invalid name");
//     }
// }
// else{
//     console.log("invalid crediantial");
// }

//  var age=prompt("enter the age");
//  console.log(typeof age);
// age = Number(age);
// var age=98;
//  if(age>=18){
//    if(age<=30){
//     console.log("eligible for rashan card")
//    }
//    else{
//     console.log(" not eligible for rashan card")
//    }
//  }
//  else{
//     console.log(" not eligible for vote"); 
//  }


// var x=7;
// var y=9;
// var z=12;


// switch case 

// var  day = '2';

// switch(day){
//     case '0':{
//        console.log("Monday");
//        break;
//     }
//     case '1':{
//         console.log("Tuesday");
//         break;
//     }
//     case '2':{
//         console.log("Wensday");
//         break;
//     }
//     case '3':{
//         console.log("Thursday");
//         break;
//     }
//     case '4':{
//         console.log("Friday");
//         break;
//     }
//     case '5':{
//         console.log("Saturday");
//         break;
//     }
//     case '6':{
//         console.log("Sunday");
//         break;
//     }
//     default:{
//         console.log("Invalid day")
//     }
// }


// post increment , decrement
// pre increment , decrement
//x++ =>  x=x+1;

// var x=5;
// console.log(x++); // 5
// console.log(++x);  // 7 ,6 ,7 
// console.log(--x);  // 6
// console.log(x--);  // 6
// console.log(x);    // 5

// loops in js


// for(var i=1;i<=10;i++){
//     console.log(i);
// }

// for(var i=10;i>=1;i--){
//     console.log(i);
// }

// var a = 5;
// var b= 10;
// var expr = '%';

// switch(expr){
//     case'+':{
//         console.log(a+b);
//         break;
//     }
//     case'-':{
//         console.log(a-b);
//         break;
//     }
//     case'*':{
//         console.log(a*b);
//         break;
//     }
//     case'/':{
//         console.log(a/b);
//         break;
//     }
//     case'%':{
//         console.log(a%b);
//         break;
//     }
//     default:{
//         console.log("invalid")
//     }
// }



// var a = 15;
// var b = 12;
// var c = 8;

// if(a>b && a>c){
//     console.log("a is greatest  number ")
// }
// else if( b>a && b>c){
//     console.log("b is greatest  number ")
// }
// else{
//     console.log("c is greatest  number ")
// }

// loops in Js
// initialization,condition, increment,decrement

// for(var i=1;i<=10;i++){
//     if(i%2 === 0){
//         console.log("Even=>",i);
//     }
//     else{
//         console.log("Odd=>",i);
//     }
// }


// prime number => 1 , self => 2,3,5,7,11,13,17,19,23
// for(var j=1;j<=100;j++){
//     for(var i=2;i<j;i++){
//         if(j%i === 0){
//             console.log(j,"Not a prime Number");
//             break;
//         }
//     }
//     if(i === j){
//         console.log(j," is a prime Number");
//     }
// }


// for(var i=1;i<=10;i++){
//     console.log(i);
//     if(i===4){
//         continue;
//     }
// }

// var i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// do while
// var i=9;
// do{
//     console.log("Jai Shree Ram");
//     i++;
// }while(i<15);




// ternary operator

// var age = 15;
// (age>=18) ? console.log("You can vote")   : console.log("Not Eligible");


// function in JavaScript => a block of code which is used for performing a specific task


// function without parameter and without return keyword

// function sum(){
//     var x=5;
//     var y=7;
//     var sum=x+y;
//     console.log(sum);
// }
// sum();

// function with parameter and without return ketword

// function sum(x,y){
//    console.log(x+y);
// }
// sum(5,9)


// var x=8;
// var y=10;
// function sum(){
//     console.log(x+y);
// }
// sum();

// function with parameter and with return keyword

// function sum(x,y){
//    return x+y;
// }

// console.log(sum(5,8));


// function without parameter and with return keyword

// function sum(){
//     var x=5;
//     var y=7;
//     return x+y;
// }
// console.log(sum());




// loops practice

// Q.1 =>  Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.

// for(i=0;i<=15;i++){
//     if(i%2==0){
//         console.log("even",i);
//     }
//     else{
//         console.log("odd",i); 
//     }
// }

// number prime or not 

// var n= 7;

// for(var i=2;i<n;i++){
//     if(n%i==0){
//         console.log(n," is not a prime number")
//         break;
//     }
// }

// if(i===n){
//     console.log(n," is a prime number")
// }

// function isPrime(n) {

//     for(var i=2;i<n;i++){
//         if(n%i==0){
//            return false;
//         }
//     }
    
//    return true;
// }

// console.log(isPrime(5));

// function printPrime(start,end){
//     for(var i=start;i<=end;i++){
//         if(isPrime(i)){
//             console.log("Prime",i);
//         }
//         else{
//             console.log("Not a prime number",i);
            
//         }
//     }
// }

// printPrime(1,100);



// Array => [1,2,3,4,5]; ["Abhay","Anmol","Suhail","Saurabh"];

// var num = [1,2,3,4,5]; //5
// index   0,1,2,3,4

// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);

// console.log(num.length-1);


// for(var i=0;i<num.length;i++){
//     console.log(num[i]);
// }

// var arr = [1,false,"Anmol",undefined,null];
// console.log(arr);


// var person={
//     name:"Rakesh",
//     age:25,
//     gender:"male",
//     isGraduate:true,
// }


// console.log(person.name);
// console.log(person.age);
// console.log(person["gender"]);
// console.log(person["isGraduate"]);

// var a =26;
// var b =25;
// var c =28;

// if(a>b){
//     if(a>c){
//         console.log(a," a number is greater")
//     }
//     else{
//         console.log(c,"c is a greater");
//     }
// }
// else{
//     if(b>c){
//         if(b>a){
//             console.log(b," b number is greater")
//         }
//       }
//     else{
//         console.log(c," c number is greater") 
// }
// }

// ternary operator

// var firstname='suhail'
// var age =23;
// (firstname=="suhail" && age==22)? console.log("yes i am suhail") :console.log("i am not suhail")

// var smokers =['anmol','suhail','ansul saini','pandit ji','nabeel','muzzassim']
// for(var i=0;i<smokers.length;i++){
//     console.log("bavde",smokers[i]);
// }


// let name="anmol";

// var name="anmol";
// var name = "anmol tyagi";
// console.log(name);

// let name="anmol";
// name = "anmol tyagi";
// console.log(name);


// const name="anmol";
// // name = "anmol tyagi";
// console.log(name);


// function printValue(){
//     for(const i=1;i<=5;i++){
//         console.log(i);
//     }
//     // console.log(i);
// }

// printValue();


// const firstName = "Suhail";
// const lastName = 'Gour';
// const age=25;
// console.log(firstName + " from Saharanpur " + lastName + " " , age)
// template literal

// console.log(`${firstName} ${lastName} from Saharanpur and the age is ${age}`);

// function sum(a,b){
//     return a+b;
// }

// arrow function
// const sum = (a,b) => a+b;



// console.log(sum(3,7));



// const isEven = (a)=>{
//     if(a%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


// const isEven = a => a%2 === 0;


// console.log(isEven(5));

// destructing

// const arr = [1,2,3,4,5];

// // let x =  arr[2];
// // let y =  arr[4];

// let [a,,x,,y] =arr;

// console.log(a,x,y);

//rest operator


// function multiply(...res){
//     let out=1;
//     for(let i=0;i<res.length;i++){
//         out = out * res[i];
//     }
//     return out;
// }

// let res=multiply(4,7,5,6,9,10);
// console.log(res);


// spread operator 

// let arr1 = [1,2,3,4,5];
// let arr2 = [9,8,7,6];
// let arr3 = [...arr1,...arr2];
// console.log(arr3);


// function multiply(arr1){
//         let out=1;
//         for(let i=0;i<arr1.length;i++){
//             out = out * arr1[i];
//         }
//         return out;
//     }
    
//     let res=multiply(arr1);
//     console.log(res);


// const array =["apple","mango","pineapple","grapes"]
// let i = 0 ;
// while(i<array.length){
//     console.log(array[i]);
//     i++;
// }

//12 => 21 


// let num = 121;
// let temp=num;
// let reverseNum = 0;
// while(num>0){
//     let rem = num%10;
//     // console.log(rem);
//     reverseNum = (reverseNum * 10) + rem;
//     // console.log(reverseNum);
//     num = Math.floor(num/10);
// }

// console.log("ReverseNum=>",reverseNum);

// if(temp === reverseNum){
//     console.log("Number is palindrome");
// }
// else{
//     console.log("Number is not palindrome");
// }




// function isPalindrome(str){
//     for(let i=0;i<str.length;i++){
//         if(str[i]!==str[str.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// }
// let str = "121";
// console.log(isPalindrome(str));
 

// let str="anmol";//immutable 
// function reversestring(){
//     let newStr = "";
//     for(let i=str.length-1;i>=0;i--){
//         newStr +=  str[i];
//     }
//     return newStr;
// }

// // reversestring(str);
// console.log(reversestring(str));


// let str = "suhail";
// console.log(str.split(''));
// console.log(str.split('').reverse());
// console.log(str.split('').reverse().join(''));


// Math Object 

// console.log(Math.floor(1.4));
// console.log(Math.ceil(1.01));
// console.log(Math.round(1.5));
// console.log(Math.pow(2,5));
// console.log(Math.sqrt(196));
// console.log(Math.floor(Math.random()*10000 + 1000));

// w3resource

// let str = "alipura";
//  function reversestr(){
//      let newstr = "";
//      for(let i= str.length-1;i>=0;i--){
//         newstr= newstr + str[i];
//      }
//      return newstr;
//  }
// console.log(reversestr(str));
// console.log(str.split(''));
// console.log(str.split('').reverse());
// console.log(str.split('') .reverse() .join(''));

// let num = 512;
// let reverse =0;
// while(num>0){
//     let rem = num%10;
//     reverse = reverse*10 + rem;
//     console.log(reverse);
//     num = Math.floor(num/10);

    // 512%==2;  /10 = 51;
    // 51%10==1;  51 /10=5;    0*10 + 2
    // 5%10==5;   5/10==0      2*10 +1 =21
    //                         21*10+5=215
       
   
    // Write a function that takes a string as input and returns the string reversed.

    // function reverse(){

    //     let newstr = string.split('') .reverse() .join('');
    //     return newstr;
    // }
    // var string = "suhail";
    // console.log(reverse(string));

    // Write a function that takes a number as input and returns the factorial of that number.

// 
    // const factorial = (num) => {
    //     if(num===0){
    //         return 1;
    //     }else{
    //     return num*factorial(num-1);
    //     }
    // }
    // console.log(factorial(5))



    // Write a function that takes a string as input and returns true if the string is a palindrome and false otherwise.

    // function checkstr (str){
    //  for(let i = 0; i<str.length;i++){
    //     if(str[i]=== str[str.length-1-i]){
    //       return true;
    //     }
    // }
    //     return false;
     
    // }

    // let str= "madam";
    // console.log(checkstr(str));
    
    
    // another method
//     function check (str){
//         let reversestr=(str.split('') .reverse().join(''));
//         return reversestr===str;
//     }
// let str ="madam"
// console.log(check(str));

// const key1="objkey1";
// const key2="objkey2";

// const value1 = "value1";
// const value2 = "value2";

// const newobj ={
  
// }
// newobj[key1]=value1;
// console.log(newobj);


// Hoisting => variable yo function ki declaration ko top par move kar dena

// console.log(z);
// var z = 6;

// TDZ => temporal dead zone
// console.log(x);
// let x=5;



// iife => immediate invoke function execution

// (function sum(){
//     console.log(4+5);
// })();
//  function func (name){
//     console.log(`${name}`)
//  }
//  function func2 (a){
//     console.log("good")
//     a("suhail");
//  }
//  func2(func);

// default parameter

// function pow(x,y=1){
//     let res=1;
//     for(let i=1;i<=y;i++){
//       res = res*x;
//     }
//     return res;
// }

// console.log(pow(2,4));


// Object 

// const person = {
//     name:"Rakesh",
//     age:22,
//     gender:"male",
//     rollNo:25,
//     isMarried:true,
//     arr: [2500,2400],
//     printDetails:function(color){
//         console.log(`the name of person is ${this.name} and the age is ${this.age} and ${color}`);
//     }
// }

// console.log(person.name); //dot notation
// console.log(person["age"]);//bracket notation

// for(let key in person){
//     console.log(person[key]);
// }

// person.printDetails("Black");

// const car = {
//     company:"tata",
//     name: "harrier",
//     length:'6/3m',
//     tyre:"mrf",
//     price:2100000,
//     address:'rampur chungi sector 17 chandigarh'
// }

// console.log(car["price"]);

// function sum (x,y,z,a){
//     console.log(x+y+z+a);
// }
// sum(1,2,3,4,);

// function check (arry1,target){
//     for(let i=0;i<=arry1.length; i++){
//         if(arry1[i]===target){
//            return i;
//         } 
//     }
//     return 0;

// }
//    const aaa = [2,3,4,6,9,6,10];
//  console.log(check(aaa,6));
// console.log("hello my6y friends")

// function sum (){
//      return 
// }


// call,apply,bind


// let car={
//     company:"Toyota",
//     name:"Fortuner",
//     color:"White",
//     price:7000000,
// }

// let car1={
//     company:"Tata",
//     name:"Punch",
//     color:"Black",
//     price:700000,
//     printDetails:function(...res){
//         console.log(`${this.company} ${this.price} ${Array.isArray(res)}`);
//     }
// }


//car1.printDetails.call(car);
// let res = car1.printDetails.bind(car);
// res();
// car1.printDetails.apply(car,["MRF",2024]);

// Higher Order Function  

// function calculator(fn){
//   console.log(fn(6,9)); 
// }

// function sum(a,b){
//  return a+b;
// }

// calculator(sum);


// function calculator(){
//     //   console.log(fn(6,9));
//      return function sum(a,b){
//             return a+b;
//     }
//     // console.log(sum(4,5));
//     }
    
    
    
//   let res= calculator();
//   console.log(res(3,8));


// first class function

// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(8,6));


// closure 

// function greet(){
//     let name ="Anmol";
//     return function saySomething(){
//       return "Hello "+ name;
//     }   
// }

// let res=greet();
// console.log(res());

// synchronous vs Asynchronous

// setTimeout(()=>{
//    console.log("Jai Hanuman");
// },10000)

// setInterval(()=>{
//     console.log("Hello Moto");
// },1000)

// console.log("Jai Shree Ram");

// let num =5;

// for(let i=5; i<=0;i++){

// }
// const factorial = (num) => {
//         if(num===0){
//             return 1;
//         }else{
//         return num*factorial(num-1);
//         }
//     }
//     console.log(factorial(5));


// Array method



// let newArr=arr.map((item,index)=>{
//    console.log(item,index);
//    return item*5;
// })

// console.log(arr,newArr);


// let newArr = arr.filter((item)=>{
//     return item%2===0;
// });

// console.log(newArr);

// let sum = arr.reduce((acc,item)=>{
//     return acc*item;
// },1);

// console.log(sum);


// let reverseArr = arr.reverse();
// console.log(reverseArr);


// let arr = [1,2,3,4,5];


// let out = arr.some((item)=>{
//     return item&1;
// });

// let out = arr.every((item)=>{
//     return item&1;
// });

// console.log(out);


// arr.push(8);
// console.log(arr);
// arr.pop(4);
// console.log(arr);
// arr.unshift(9);
// console.log(arr);
// arr.shift();
// console.log(arr);


// let arr = [7,5,3,8,2,4];
// arr.sort((a,b)=>{
//   return b-a;
// })
// console.log(arr);



// let idx =arr.findIndex((item)=>{
//   return item === 12;
// });

// console.log(idx)


// function findMultipleIndex(arr,key){
//     let index=[];
//   for(let i=0;i<arr.length;i++){
//        if(arr[i]===key){
//         index.push(i);
//        }
//   }
//   return index;
// }

// let arr = [3,6,9,12,15,18,21,12];
// console.log(findMultipleIndex(arr,18));



// DOM => Document Object Model

//const para = document.getElementById("para"); //target
// const para = document.getElementsByClassName("para")
// const div = document.getElementsByTagName("div");
// console.log(div);

// div[1].innerText = "Jai Shree Ram";
// para.style.color = "violet"


// const container = document.querySelectorAll(".container");
// const container1 = document.getElementsByClassName("container")
// console.log(container,container1);
// // container.style.backgroundColor= "pink";


// function factorial(num){
//      let result = 1;
//     for(let i=1;i<=num;i++){
//     result=result*i;
//     }
//     return result;
// }
// console.log(factorial(15));

// const container = document.getElementById("container");
//console.log(container.innerHTML);
//console.log(container.innerText);
//console.log(container.textContent);



// console.log(container.children);
//console.log(container.childNodes);


// console.log(container.parentElement.parentElement);
// console.log(container.parentNode.parentNode);

// console.log(container.nextElementSibling);
// console.log(container.previousElementSibling);
// console.log(container.nextSibling);
// console.log(container.previousSibling);


// let out = container.classList;
// out.add("new1");
// out.replace("parent","new2");
// out.remove("parent");
// console.log(out.contains("parent"));
// out.toggle("parent");
// out.toggle("parent");
// console.log(out);


// const para = document.getElementById("para3");

// let x=para.getAttribute("style");
// para.setAttribute("style","color:green");
// para.removeAttribute("style")
// let y=para.hasAttribute("id")
// console.log(x,y);


// function printTable(x){
//     for(let i=1;i<=10;i++){
//         console.log(`${x} * ${i} = ${x*i}`);
//         // document.write(` ${x} * ${i} = ${x*i} </br>`);
//     }
//     //window.location.href = "./Thanks.html"
// }

// const btn = document.getElementById("btn");

// btn.addEventListener("click",()=>{
//     // console.log("Anmol");
//    let x=Math.floor( Math.random()*20 + 1);
//     printTable(x);
// })

// const titleInput = document.getElementById("title");
// const formInput = document.getElementById("form");
// let x;
// titleInput.addEventListener("change",(e)=>{
//     //console.log(e.target.value);
//     x = e.target.value;
//     e.target.value = "";
// })


// formInput.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if( x>=1 &&  x <=100){
//         x = Number(x);
//         printTable(x);
//     }
//     else{
//         alert("Please enter value btw 1 to 100");
//     }
// })


//const keyInput = document.getElementById("keypress");


// keyInput.addEventListener("keypress",(e)=>{
//     console.log(e.target.value);
// })


// const container = document.getElementById("container");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");


// container.addEventListener("click",(e)=>{
//     // console.log("");
//     alert("container");
//     // e.stopPropagation()
// },true)
// parent.addEventListener("click",(e)=>{
//     // console.log("");
//     alert("parent");
//     // e.stopPropagation()
// })
// child.addEventListener("click",(e)=>{
//     // console.log("");
//     alert("child");
//     // e.stopPropagation()
// })

// const parent = document.querySelector("div");
// const child = document.querySelector(".child");

//       parent.addEventListener(
//         "click",
//         function () {
//           console.log("clicked parent");
//         },
//         true
//       );

//       child.addEventListener("click", function () {
//         console.log("clicked child");
//       });


// Promises in Js

// const myPromise = new Promise((resolve,reject)=>{
//   if(0){
//     resolve("Mithai deni hai");
//   }
//     reject("Mithai nahi deni hai");
// });

// myPromise
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })


// async function 

// async function sum(a,b){
//    return  await a+b;
// }
// let x=sum(5,6);
// x.then((res)=>{
//     console.log(res)
// });
// console.log("Jai Shree Ram");




// class Airpod{
//    //price=1200;
//    //color="black";
//    constructor(price,color){
//     this.price=price;
//     this.color=color;
//    }
//   printDetails=()=>{
//      console.log(`the price is ${this.price} and color is ${this.color}`);
//    }
// }


// const airpod1 = new Airpod(1500,"black");
// const airpod2 = new Airpod(800,"white");
// airpod1.printDetails();
// airpod2.printDetails();
