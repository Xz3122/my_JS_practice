//線性搜尋是從索引[0]開始搜索，運氣好第一個就搜到:O(1)，運氣不好最後一個才搜到:O(n)
let Linear_Search= function(array,n){
    for(let i = 0;i<array.length;i++){//從[0]按順序開始搜尋
        if (array[i] === n){
            console.log(`${n} 有在[${array}]裡面`)
            return i
        }
    }
    console.log(`${n} 不在[${array}]裡面`)//不使用else是因為要搜尋完成才能確定答案
    return -1
}
Linear_Search([1,2,6,5,4,8,7,9,2,1,5,6,5],6)
Linear_Search([1,2,6,5,4,8,7,9,2,1,5,6,5],100)