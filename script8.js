let str = "Hello,how are you"
let strat = str.charAt(5)//chrAt():查尋由index 0開始第X個字元
console.log(strat)
let strcode = str.charCodeAt(str)//chrCodeAt():查尋由index 0開始第X個字元的Unicode編碼
console.log(strcode) 
console.log(str.split(""))//將字串分割用""分割並且存入陣列中，之後就能用陣列進行查詢
console.log(str.toLowerCase())//toLowerCase:將所有字轉換為小寫，toUpperCase:將所有字轉換為大寫