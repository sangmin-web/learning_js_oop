let kim = {
    name : 'kim',
    first:10,
    second:20,
    // sum:function(){
    //     return f + s;
    // }
    sum:function(){
        //매소드가 자신의 프로퍼티를 가리키는 특수한 문법을 만듬
        //바로 this
        return this.first + this.second;
    }
}

// console.log(kim.sum(kim.first,kim.second));
console.log(kim.sum());