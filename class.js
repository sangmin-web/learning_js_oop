class User {
    constructor(name, first, second) {
        //객체가 생성될때 실행되는 메소드!
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        //메소드 정의 
        return this.first + this.second;
    }
}
let u1 = new User('상민',12,31);
console.log(u1)