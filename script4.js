var  kelvin = Number(prompt("Enter kelvin: "));
//攝氏比kelvin少 273.15 度
var celsius =  kelvin-273;
//公式:華氏 = 攝氏 X (9/5)+32
var fahrenheit = Math.floor((celsius * (9/5) + 32));
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);