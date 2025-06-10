let arr = [2,5,9,6,8,3,7,2]
let iter = arr[Symbol.iterator]()//疊代器 
console.log(iter)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())//疊代完成顯示true