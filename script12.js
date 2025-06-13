//在JS內建立HTML板模並加入id為result的標籤
document.body.innerHTML = `
  <h2>階乘計算器</h2>
  <div id="result"></div>
`;
let factorial =  function(n,pro = 1){
    if(n === 0||n === 1){
    return 1
    }
    else
    for(let i=2;i<=n;i++)
        pro *= i; 
    return pro
}
let n = Number(prompt("請輸入數字"))
let result= factorial(n)
//當你在document中得到id名為result的標籤，便將result得到的結果顯示在網頁上
document.getElementById("result").textContent = `${n}! = ${result}`;
