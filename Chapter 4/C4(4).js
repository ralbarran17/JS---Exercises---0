// Write a function that will accept any number of arguments and print out their data type.

function dataType(){
    //console.log(arguments);
    var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    for(var i = 0; i < arguments.length; i++){
     console.log(typeof(arguments[i]));
  
    }
  }
  
  dataType(true, 2);