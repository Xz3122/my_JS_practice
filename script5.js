let w = -1
let x = true
let y = 2//代表true
let z = ''//代表false
let a = 0////代表false
let b = undefined//代表false
let c = null//代表false

//由左至右判斷，若出現第一個true則回傳，皆為false回傳最後一個值
let result1 = x || y || z;//回傳x
let result2 = y || x || c;//回傳y
let result3 = a || b || c;//回傳c
console.log(result1,result2,result3)

//由左至右判斷，若出現第一個false則回傳，皆為true回傳最後一個值
let result4 = x && y && z;//回傳z
let result5 = y && x && c;//回傳c
let result6 = w && x && y;//回傳y
console.log(result4,result5,result6)