// define a function multiplyByNineFifths(number)
function multiplyByNineFifths(number) {
    return number*(9/5)
}
console.log(multiplyByNineFifths(5))
    //return number*(9/5)

// define a function getFahrenheit(celsius)
function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
}
 console.log(getFahrenheit(6))
    // return multiplyByNineFifths(celsius) + 32;

//console.log() // call getFahrenheit();

// do the same thing starting from Fahrenheit to Celsius;
function getcelsius(fahrenheit)  {
    return (fahrenheit-32)
}
console.log(getcelsius(50))

function multiplyByfiveninth(number){
   return getcelsius(18)*(5/9)
}
console.log(multiplyByfiveninth(5))