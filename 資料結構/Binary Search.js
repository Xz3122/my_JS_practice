//適合「排序好的陣列」，若陣列未排序，無法使用二元搜尋數
//Binary Search:O(log n)
//.sort((a,b)=>a-b):nO(log n)
//整體:n O(log n)
let Binary_Search = function(n,search){
let array = n.sort((a,b) => (a-b))//一定要排序過後的陣列

    let left = 0//為索引起始值
    let right  = array.length - 1//陣列最後一個元素
    while(left <= right){//當搜尋沒超出範圍
        let mid  = Math.floor((left+right)/2)//將陣列長度對半切所得到的元素
        if (array[mid] === search){//運氣好對半切後得到元素剛好是要搜尋的元素
            console.log(`${search} 有在[${n}]裡`)
            return mid
        }
        else if(array[mid] < search ){//對半切所得到的元素<要搜尋的元素
            left = mid + 1//左邊界往右移動，排除左半邊
        }
        else{
            right = mid - 1// 右邊界往左移動，排除右半邊
        }
    }
    console.log(`${search} 不在[${n}]裡`)
    return -1
} 
Binary_Search([5,8,9,3,1,58,5,6,6,8,5,55],10000)
Binary_Search([5,8,9,3,1,58,5,6,6,8,5,55],9)