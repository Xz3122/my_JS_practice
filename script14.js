//  score = ["Tom",65,78,99,45,12,3,100,54]
//  x = len(score)
//  max_  = max(score[1:x])
//  sear = score.index(max_)
//  print(f"{score[0]}在第{sear}場獲得最高分{max_}")

/*⬇⬇⬇⬇⬇⬇Python寫法轉換成JS寫法⬇⬇⬇⬇⬇⬇*/

let score = ["Tom", 65, 78, 99, 45, 12, 3, 100, 54];
let scoresOnly = score.slice(1);//score.slice會從陣列[1]設為起點到最後一項，並另外建立一個陣列儲存
let max_ = Math.max(...scoresOnly);//Math.max只能接受參數不接受陣列(...)為展開成獨立參數
let sear = score.indexOf(max_)
console.log(`${score[0]}在第${sear}場獲得最高分${max_}`);
