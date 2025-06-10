function date(){
let today = new Date();//建立一個新物件
//取時、分、秒，toString():轉成字串，padStar():必須先轉換成字串才能使用，內部2代表長度為2，部足的部分向前用0補足
let hour = today.getHours().toString().padStart(2,"0");
let minute = today.getMinutes().toString().padStart(2,"0");
let second = today.getSeconds().toString().padStart(2,"0");
console.log(`${hour}:${minute}:${second}`)
}
//setInterval():每毫秒更新一次
setInterval(date,1000)
