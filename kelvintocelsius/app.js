// This variable is to document today's forecast in Kelvin
const kelvin = 0
// Subtracting 273 from the kelvin variable and storing the result in the celsius variable
const celsius = kelvin - 273
//Calculating fahrenheit, and storing the result to the variable fahrenheit
let fahrenheit = celsius * (9 / 5) + 32
// Using the math.floor object we are rounding down the fahrenheit temp, saving the result to the fahrenheit variable
fahrenheit = Math.floor(fahrenheit)
// Logging the result of fahrenheit
console.log(`The temperature ${fahrenheit} degrees Fahrenheit.`);
// Converting celsius to the newton scale
let newton = celsius * (33 / 100);
Math.floor(newton)
console.log(`The temperature is ${newton} degress Newton.`)