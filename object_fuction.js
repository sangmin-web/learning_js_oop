var kim = {
    name: 'kim',
    first: 10,
    second: 20
};
var lee = {
    name: 'lee',
    first: 10,
    second: 10
};
//어떤 객체에도 속하지 않은 함수
function sum(a, b, c) {
    console.log(a, b, c);
    return (this.first + this.second);
}

//fuc.call(객체, 인자...)
console.log("sum.call(kim): ", sum.call(kim, kim.name, "a", "z"));
console.log("sum.call(lee): ", sum.call(lee, lee.name, "b", "c"));
//func.apply(객체,[인자...])
console.log("sum.apply(kim): ", sum.apply(kim, [kim.name, "a", "z"]));
console.log("sum.apply(lee): ", sum.apply(lee, [lee.name, "b", "c"]));

//sum 함수의 this를 영구적으로 kim으로 이용하는 함수를 return함
kim.sum = sum.bind(kim ,"a","b","c");
console.log(kim.sum());