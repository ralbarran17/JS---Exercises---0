
let person = {
    function(name){
        this.name = name;
    }
}

console.log(person instanceof Object);



let profession = Object.create(person, {
    name: { value: this.name } ,
    work: { value: function(subject) {
        return "I work " + subject;
    }}
});

console.log(Object.getPrototypeOf(profession) === person);

let academic = Object.create(person, {
    name: { value: this.name } ,
    profession: {value: this.work },
    area: { value: function(subject) {
        return "My area " + subject;
    }}
});

console.log(Object.getPrototypeOf(academic) === person);



