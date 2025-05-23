let ob = ["apple","banana","cat","dog"]//建立一個陣列
console.log(ob)//呼叫陣列
console.log(ob.length)//陣列長度
ob.length = 1//靠陣截斷列長度來影響原始陣列內容(= 0為清空陣列)
console.log(ob)
ob[3] = "elephant"//[apple,undefine,undefine,elephant]
console.log(ob)
ob[2] = "beach"//[apple,beach,undefine,elephant]
console.log(ob)
ob.push = "fork"//[apple,beach,undefine,elephant,fork]
console.log(ob)
ob[0]=[]//array(0),beach,undefine,elephant,fork]
console.log(ob)