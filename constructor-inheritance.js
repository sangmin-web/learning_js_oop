function Person(name, first, second) {

    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function () {
    return this.first + this.second;
}
let p1 = new Person("상민", 2, 3);
console.log(p1.sum())

function PersonPlus(name, first, second, third) {
    Person.call(this, name, first, second);
    this.third = third;
}

// PersonPlus.prototype.__proto__ = Person.prototype;
// Person.prototype을  __proto__으로 하는 새로운 객체가 만들어짐
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;
PersonPlus.prototype.avg = function () {
    return (this.first + this.second + this.third) / 3
}

let pp1 = new PersonPlus('kim', 10, 20, 30);
console.log(pp1.sum());
console.log(pp1.avg());