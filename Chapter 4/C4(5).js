// Write a function that will calculate the distance between two points. The function should be able to handle 2D and 3D points. 

function distance(x1, y1, z1, x2, y2, z2)
{
  if(arguments.length < 5){
    return Math.sqrt(Math.pow(arguments[0] - arguments[2], 2) +
               Math.pow(arguments[1] - arguments[3], 2) * 1.0);
  }
  else  {
    return Math.sqrt(Math.pow(arguments[0] - arguments[3], 2) +
               Math.pow(arguments[1] - arguments[4], 2) + 
               Math.pow(arguments[2] - arguments[5], 2) * 1.0);
  }
}

console.log(distance(2, 3, 1, 1, 2, 4));