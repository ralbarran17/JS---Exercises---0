// Create an object that will hold methods for adding, multiplying, and factorial operations.

var myMath = new Object();

myMath.add = function(n){
    sum = 0;
    for(i = 1; i <= n; i++)
    sum+= i;
    
    console.log(sum);
  }
  
myMath.mul = function(n){
  m = 1;
  for(i = 1; i <= n; i++)
    m = i * m;
    
  console.log(m);
}

myMath.fact = function(n){
  x = 1;
  for(i = 1; i <= n; i++)
    x = i * x;
    
  console.log(x);
}

var a = myMath.add(3);
var b = myMath.mul(3);
var c = myMath.fact(4);