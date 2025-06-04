let ob = ["apple","banana","cat","dog"]//建立一個陣列
console.log(ob)//呼叫陣列
console.log(ob.length)//陣列長度
ob.length = 1//靠陣截斷列長度來影響原始陣列內容(= 0為清空陣列)
console.log(ob)
console.log("加入第3項元素elephant")
ob[3] = "elephant"
console.log(ob)
console.log("加入第2項元素beach")
ob[2] = "beach"
console.log(ob)
console.log("新增元素fork到尾端")
ob.push("fork")//新增元素到尾端
console.log(ob)
console.log("刪減尾端元素")
ob.pop()//刪減尾端元素
console.log(ob)
console.log("將第0項元素apple變成空陣列")
ob[0]=[]
console.log(ob)
console.log("將第前端元素Array移除")
ob.shift()
console.log(ob)
console.log("將第前端元素加上元素abc")
ob.unshift("abc","efg")
console.log(ob)

let subject = ["英文","歷史","數學","國語","家政","物理","化學"];//逐一列出
for(let i = 0;i < subject.length;i++){
    console.log(`${i}:${subject[i]}`);
}

let number1 = ["5","1","3","2","6","8","100","87","64"];
console.log(number1);
console.log(number1.reverse());//反轉陣列
number1.sort((a,b)=> a-b);//sort()排序，要搭配比較函式不要直接使用
console.log("排序過後:" + number1);
number1.sort((a,b)=> b-a);//b,a對調順序對調                
console.log("排序過後:" + number1);
