// Create a function that will multiply two numbers. The function must return the result in base 13.
function multiplyBase13(x, y){
    var z = x * y;
    let a = z.toString(13);
    console.log("the product of " + x + " & " + y  + " is " + a);
}