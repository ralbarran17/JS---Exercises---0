// Make the function from exercise 5 accept its parameters as either a parameter list or as two arrays containing 2D or 3D point data. 

function foo(){
    if(typeof(arguments[0]) == typeof(arguments[1])) {
      if(typeof(arguments[0]) == typeof(a))
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
    }
    else{
      if(arguments[0].length == arguments[1].length){
        if(arguments.length < 3){
          let a1 = arguments[0];
          let a2 = arguments[1];
          console.log(Math.sqrt(Math.pow(a1[0]-a2[0], 2) + Math.pow(a1[1]-a2[1], 2) * 1.0));
        } 
        else{
          let b1 = arguments[0];
          let b2 = arguments[1];
          let b3 = arguments[2];
          console.log(Math.sqrt(Math.pow(b1[0]-b2[0]-b3[0], 2) + Math.pow(b1[1]-b2[1]-b3[1], 2) + 
                                Math.pow(b1[2]-b2[2]-b3[2], 2) * 1.0));
        }
      }
      else{
        console.log("error: incompatible point data");
      }
  }