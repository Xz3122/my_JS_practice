let call = function(){
    console.log("Hello")
}
call();
/*⬇⬇⬇⬇⬇⬇箭頭函式寫法⬇⬇⬇⬇⬇⬇*/
let call = ()=>{
    console.log("Hello")
}
// -------------------------------
//call1()             //此種呼叫位置可以用在此函式但會產生暫時性死區(TDZ)影響其他函式
function call1(){
    console.log("How")
}
call1();
//-------------------------------
function call2(back){ //回呼函式
   back("are");
}
call2(console.log);//call2()內可用函式當參數
/*⬇⬇⬇⬇⬇⬇箭頭函式寫法⬇⬇⬇⬇⬇⬇*/
let call2 = (back)=>{
    back("are");
} 
call2(console.log);
// -----------------------------
function call3(back){ //回呼函式
   back("?"); 
}
call3(function(back){ //匿名函式(自創函式)，在call3( )內加入自創函式當參數
    console.log("you\n",back);
});
// -----------------------------------------
(function(msg){//匿名函式+IIFE立即函式(用來保護內部變數即屬即參數不去影響或受影響)
    let str  = "I am fine thank you," + msg;
    console.log(str);
})("and you?");
/*⬇⬇⬇⬇⬇⬇原本寫法⬇⬇⬇⬇⬇⬇*/
 function said(msg){
    let str  =  "I am fine thank you," + msg 
    console.log(str) 
 }
 said("and you?")
//------------------------------------------ 
let add = function(a,b){
    let result = a + b
    return result
}
/*⬇⬇⬇⬇⬇⬇箭頭函式寫法⬇⬇⬇⬇⬇⬇*/
let add =(a,b)=>{
    let result = a + b
    return result
} 
//*箭頭函式簡化條件:函式內部只有一個return回傳值，沒有其他運算等程式碼才能做簡化
//ex:
let sub = function(a,b){
    let result = a - b;
    return result
}
/*⬇⬇⬇箭頭函式⬇⬇⬇*/
let sub = (a,b)=>{////中間有let result = a - b所以不可被簡化
    let result = a - b;
    return result
}

let sub = function(a,b){;
    return a - b
}
/*⬇⬇⬇可以被簡化⬇⬇⬇*/
let sub = (a,b)=>(a-b)