//str = prompt("你的成績如何")
// if(str == "all pass"){
//     console.log("歐洲玩")
// }else if(str == "down 1"){
//     console.log("宜蘭玩")
// }else{
//     console.log("禁足")
// }
// switch (str) {
//     case "all pass":
//         console.log("歐洲玩")
//         break;
//     case "down 1":
//         console.log("宜蘭玩")
//         break;
//     default:
//         console.log("禁足")
//         break;
// }
// let x = Number(prompt("輸入1個數:"))
// let y = Number(prompt("要加到哪裡:"))
// let z = Number(prompt("輸入要跳過的數字:"))
// let sum = 0
// for(let i = x; i < y; i++){
    
//     if (i === z){
//        console.log("跳過"+z)
//        continue;
//     }
//     sum+=i
// }
//     console.log("總和為"+sum)
// let sum = 0
// for(let i=1;i<=9;i++){
//     for(let j=0;j<=9;j++){
//         sum = i*j
//         console.log(i+" X "+j+" = "+sum)
//     }
// }

// let a = 100
// function foo(){
//     let  a = 1
//     console.log(a)
// }
// foo()
// console.log(a)

// function hey(myfunction){
//     myfunction("Hi!")
// }
// hey(alert)

// let name = "John"
// let year = 30
// var str = `I am ${name},I am ${year}years old`
// console.log(str)

// let person = {
//     name:"Tom",
//     age:30,
//     sex:"man",
//     // massage:function(){
//     //     console.log("Hi my name is ",this.name,",I am ",this.age,"years old,I am a ",this.sex,"")
//     // }
//     massage:function(){
//         console.log(`Hi my name is ${this.name},I am "${this.age} years old,I am a ${this.sex}`)
//     }
// }
// person.massage()

// let cat = {
//     name:"Judy",
//     age:10,
//     sex:"girl",
//     meow:function(){
//         return alert(`I have a pet,she's name is ${this.name},she is ${this.age} years old,she is a ${this.sex}`)
//     }
// }
// cat.meow()
// console.log(cat["name"])
// cat["like"] = "ball" 
// console.log(cat["like"])
// cat["like"] = "mouse" 
// console.log(cat["like"])

// let ob = ["apple","banana","cat","dog"]
// console.log(ob)
// console.log(ob.length)
// ob.length = 1
// console.log(ob)
/*--------------------------------------- */
// let call = function(){
//     console.log("Hello")
// }
// call()
// /*------------------------------------------*/
// function call(callback){   //回呼函式
     
//     return callback("Hello")
// }
// call(console.log)
// /*---------------------------------*/
// function call(){          //一般函式

//     console.log("Hello")
// }
// call()
// /**-----------------------------------*/
// call(function(callback){          //匿名函式
//     console.log("Hello",callback)
// })
/* --------------------------------------------*/
// const f = createHelloWorld()
// function createHelloWorld() {
//     return function(...args) {
//         return "Hello World";
//     }
// }
// console.log(f(1,2))
// const f = reateCounter()
// var reateCounter = function(n) {
    
//     return function() {
        
//     };
// };
// console.log(f())

// //kelvin 的變數
// var  kelvin = Number(prompt("Enter kelvin: "));
// //攝氏比kelvin少 273.15 度
// var celsius =  kelvin-273;
// //公式:華氏 = 攝氏 X (9/5)+32
// var fahrenheit = Math.floor((celsius * (9/5) + 32));
// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// let a = Date.now();
// console.log(a);
// let a = new Date().getDay();
// console.log(a);

// const person = {name: "John", age: 30};
// for (let [key,value] of Object.entries(person)) {
//   console.log(key, person[key]);
// }
// 
