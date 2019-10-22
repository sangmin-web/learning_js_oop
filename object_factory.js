let kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function () {
        return this.first + this.second;
    }
}

// console.log(kim.sum(kim.first,kim.second));
console.log(kim.sum());

let lee = {
    name: 'lee',
    first: 10,
    second: 10,
    sum: function () {
        return this.first + this.second;
    }
}

console.log(lee.sum());

//속성이 하나 추가되면 같은 취지의 객체도 모두 바꿔줘야한다..ㅠ

