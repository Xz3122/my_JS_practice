let dog ={         //定義一個object
    name:"Lucky",
    age:13,
    sex:"boy",
    woof:function(){
        console.log(`This is my pet,he's name is ${this.name},he is ${this.age} years old,he is a good ${this.sex}`)
    }
}
dog.woof()//呼叫object的方法
dog.name = "Ted"//修改object的屬性
console.log(dog.name)//呼叫object的屬性
dog["like"] =["toy","ball","cookie"] //新增object的屬性
console.log (dog["like"])
dog.woof = function() {////修改object的方法
    console.log(`這是我的寵物，他的名字是 ${this.name}，今年 ${this.age} 歲，是一隻非常可愛的${this.sex}，他喜歡${this.like}`);
}
dog.woof()