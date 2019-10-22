var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function () {
        return this.first + this.second;
    }
}

// console.log(kim.sum(kim.first,kim.second));
console.log(kim.sum());

var lee = {
    name: 'lee',
    first: 10,
    second: 10,
    sum: function () {
        return this.first + this.second;
    }
}

console.log(lee.sum());

//속성이 하나 추가되면 같은 취지의 객체도 모두 바꿔줘야한다..ㅠ

//constructor의 사례
var d1 = new Date();

console.log(d1.toDateString());

// 6.3 constructor 만들기
console.log(Date); //function!!

function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function () {
        return this.first + this.second + this.third;
    }
}
console.log('Person()', Person());

console.log("new Person()", new Person());
var kim = new Person("kim", 10, 20);
var lee = new Person("lee", 10, 20, 0);

console.log("kim: ", kim.sum());
console.log("lee: ", lee.sum());