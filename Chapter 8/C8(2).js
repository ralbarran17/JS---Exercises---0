var timerID = setInterval(function() {
    console.log("A it's 30s");
}, 30 * 1000); 

clearInterval(timerID); 

var timerID = setInterval(function() {
    console.log("B it's 1m");
}, 60 * 1000); 

clearInterval(timerID); 

var timerID = setInterval(function() {
    console.log("C it's 1.30s");
}, 90 * 1000); 

clearInterval(timerID); 