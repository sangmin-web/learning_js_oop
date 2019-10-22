function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.sum = function () {
        return this.first + this.second;
    }
}
//생성자가 실행이 될 때마다 객체의 sum이라는 함수가 새로만들어진다.
var kim = new Person("kim", 10, 20);
//kim이라는 인스턴스의 sum함수만 변경됨..
kim.sum = function(){
    return `modified: ${this.first + this.second}`
}
var lee = new Person("lee", 10, 20);

console.log("kim: ", kim.sum());
console.log("lee: ", lee.sum());
