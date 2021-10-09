// Create a function that will return the addition of N numbers.

function sumN(Array){
    sum = 0;  
    l = Array.length;
        for(i = 0; i < l; i++)  
        sum = sum + Array[i];
        
        console.log(sum);
    }
    
    sumN([1, 2, 3]);
    