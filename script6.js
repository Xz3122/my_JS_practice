let animal = ["fish","dog","cat","elephant","tiger"]
animal.foo = "動物"//賦予anima陣列一個屬性叫"動物"(可附於多個屬性)
console.log(animal)
console.log("屬性:" + animal.foo)

let man = {
age:30,
name:"Tom",
sex:"man",
msg:function(){  
console.log(`Hello, my name is ${this.name}. I am ${this.age} years old. I am a ${this.sex}.`);
    }
}   
console.log(man)
man.msg()
console.log("for...in...顯示[]結果:")//for in...可以顯示陣列內容，但不一定照順序且會容易出錯
for(let x in animal){
    console.log(animal[x])
}
console.log("for...of...顯示[]結果:")//for of...適合遍歷陣列
for(let x of animal){
    console.log(x)
}
console.log("for...in...顯示object結果:")
for(let x in man){                      //for in...適合遍歷一般物件要顯示出object的方法必須要另外用if else判斷內部的方法
    if(typeof man[x] === "function"){
        man[x]()
    }else{
            console.log(x+":"+man[x]);//key : value
    }
}

console.log("for...of...顯示object結果:")
for (let x of Object.keys(man)) {    //注意:Object.keys
  if(typeof man[x] === "function"){
        man[x]()
    }else{
            console.log(x+":"+man[x]);//key : value
    }
}
console.log("for...of...顯示object結果(比較安全的寫法):")
for (let [key, value] of Object.entries(man)) {// Object.entries:將一般物件轉換成陣列，這陣列中的(key:value)會個別變成[key,value]
  if (typeof value === "function") {
    value.call(man);  // 明確指定 this 為 man
  } else {
    console.log(`${key}: ${value}`);
  }
}
/*
1.陣列在沒有賦予屬性(可自訂屬性名稱)的形況下，陣列內的key為數值索引，物件的則可隨意自訂(key,valus)
2.陣列可被賦予多種屬性，但使用length並不會顯示出被賦予的屬性
3.陣列是適用length，物件無法使用length
4.for in 能看到陣列被另外賦予的屬性(容易導致出錯)，for迴圈及for of 不行
*/