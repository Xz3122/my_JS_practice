let call = function(){
    console.log("Hello")
}
call();
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
})("and you?");//簡化，原本為said("and you?")