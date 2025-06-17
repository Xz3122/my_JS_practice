//字串、陣列、函式、物件列印到documnt上測試
let str = "I like food"
document.body.innerHTML+=(str)+"<br>"//字串直接咧印
document.body.innerHTML+=(str.replace("I","you"))+"<br>"
//----------------------------------------
let array = [12,8,9,6,4,52,3,1,3,5]
document.body.innerHTML += ("aray:")+array.toString() + "<br>"//陣列要先toString(轉換成字串)
//----------------------------------------------
let dog = {
    name:"Lucky",
    age:30,
    like:["ball","food","toy"],
    msg:function(){
        console.log(`my name is ${this.name},I am ${this.age} years old,I like ${this.like}`)
    }
}
document.body.innerHTML += JSON.stringify(dog)+"<br>"//要用JSON.stringify將物件屬性轉成Json格式
//------------------------------------------------------
let isEven = function(a){
    if (a%2 === 0){
        return true;
    }else   
        return false;
}
let a = Number(prompt("輸入一個數字判斷是不是偶數"))
document.body.innerHTML += isEven(a).toString()//函式要先toString(轉換成字串)