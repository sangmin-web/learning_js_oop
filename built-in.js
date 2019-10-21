/*
비슷한 기능을 이미 만들어놓은 빌트인 객체
*/

console.log(Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));

//객체의 소속된 함수 - 메소드

var MyMath = {
    PI: Math.PI,
    random: function () {
        return Math.random() * 10;
    },
    floor: function (val) {
        return Math.floor(val)
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));