let number = 123223//將數字轉換為字串
console.log(typeof number.toString())
let array = [22,66,55,99,71]
console.log(typeof array.toString())//將陣列數字轉換為字串


let man = {
age:30,
name:"Tom",
sex:"man",
msg:function(){  
console.log(`Hello, my name is ${this.name}. I am ${this.age} years old. I am a ${this.sex}.`);
    }  
} 
console.log(man) 
console.log(man.msg.toString()) 
console.log(typeof man.name.toString())//將物件屬性轉換為字串
console.log(typeof man.msg.toString())//將物件方法轉換為字串

/*JSON
1.純文字或字串
2.用來和不同同程式語言進行資料交換
3.用來儲存資料
4.要將物件轉成Json檔必須先轉成字串形式
*/ 

/*將Json格式轉換成JS物件*/ 
//建立一個純字串(Json格式)
let str = `{  
"age":"20",
"name":"Jack",
"sex":"gril"
}`;
let jsonobj = JSON.parse(str);//解析Json格式形成JS物件
console.log(jsonobj)

/*將JS物件轉換成Json格式*/ 
let jsstr = JSON.stringify(man);
console.log(jsstr)//因為Json檔不能儲存函式，所以不會顯示JS方法