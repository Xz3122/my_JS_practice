let mymap = new Map()//Map物件:大型「鍵值對」資料結構(可以擁有多個鍵值對)

// 設定 Tom 的資料
mymap.set("Tom", {                //一個.set配一組鍵值對"Tom為鍵"
  data: ["height", "weight", "BMI"],
  tele: function() {
    console.log("call Tom");
  }
});
// 設定 Jack 的資料
mymap.set("Jack", {
  data: ["height", "weight", "BMI"],
  tele: function() {
    console.log("call Jack");
  }
});
//呼叫Tom和Jack的value
console.log(mymap.get("Tom"))
console.log(mymap.get("Tom").data); 
mymap.get("Tom").tele()
console.log(mymap.get("Jack"))
console.log(mymap.get("Jack").data)
mymap.get("Jack").tele()

console.log(mymap.size)//列印出mymap有幾副鍵值對

//mymap.delete("Jack")//刪除Jack的鍵值對
//mymap.clear()//清除所有鍵值對

