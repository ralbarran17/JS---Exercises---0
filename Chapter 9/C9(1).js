var obj = {
    hello: "World",
    sayHello: (function() {
        console.log("Hello there ");
    }).toString()
};
var myobj = JSON.parse(JSON.stringify(obj));
myobj.sayHello = new Function("return ("+myobj.sayHello+")")();
myobj.sayHello();