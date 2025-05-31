let animal = ["fish","dog","cat","elephant","tiger"]
console.log(animal)

let man = {
age:30,
name:"Tom",
sex:"man",
msg:function(){  
console.log(`Hello, my name is ${this.name}. I am ${this.age} years old. I am a ${this.sex}.`);
    }
}   
// console.log(man)
// man.msg()
console.log("for...in...顯示[]結果:")
for(let x in animal){
    console.log(animal[x])
}
console.log("for...of...顯示[]結果:")
for(let x of animal){
    console.log(x)
}
console.log("for...in...顯示object結果:")
for(let x in man){                      //for...in...要顯示出object的方法必須要另外用if else判斷
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
for (let [key, value] of Object.entries(man)) {
  if (typeof value === "function") {
    value.call(man);  // 明確指定 this 為 man
  } else {
    console.log(`${key}: ${value}`);
  }
}

