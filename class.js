class User {
    constructor(name, first, second) {
        //객체가 생성될때 실행되는 메소드!
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        //메소드 정의 
        return this.first + this.second;
    }
}
let u1 = new User('상민', 12, 31);
console.log(u1)

class PremiumUser extends User {
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third;
    }
    sum() {
        return super.sum() + this.third;
    }
    premium() {
        console.log("This user is crazy!")
    }
}
let pu = new PremiumUser("철수", 2, 3, 4);
console.log(pu);
pu.premium();