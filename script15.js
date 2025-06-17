let array = ["蚱蜢","蝗蟲","蜥蜴","蟋蟀"]
let iter_value = array.values()//列印出疊代器的值
console.log(iter_value.next().value)
console.log(iter_value.next().value)
console.log(iter_value.next().value)
console.log(iter_value.next().value)

let iter_key = array.keys()//列印出疊代器的鍵
console.log(iter_key.next().value)
console.log(iter_key.next().value)
console.log(iter_key.next().value)
console.log(iter_key.next().value)

let iter_entries = array.entries()//entries列印疊代器的(鍵,值)
console.log(iter_entries.next().value)
console.log(iter_entries.next().value)
console.log(iter_entries.next().value)
console.log(iter_entries.next().value)
//----------------------------------------------
let array2 = [1,25,6,99,44,28,35,8,481,105,54]
let array_filter = array2.filter(value => value >= 28)//filter:陣列專用篩選器(判斷元素)
console.log(array_filter)
/*⬇⬇⬇⬇⬇⬇不用filter的寫法⬇⬇⬇⬇⬇⬇*/
let array3 = []
for(i = 0;i < array2.length ;i++){
        if (array2[i]>=28){
        array3.push(array2[i])
    }
}
console.log(array3)     
//-----------------------------------------------------
let array_map = array2.map(value => value * 28)//map:陣列專用運算器(轉化元素)
console.log(array_map)
