let superObj = {
    superVal: "super"
}
// let subObj = {
//     subVal: "sub"
// }
// // subObj.__proto__ = superObj;
// //먼저 subObj에서 superVal을 찾고 없으면 위로 올라간다.
// console.log(subObj.superVal);
// subObj.superVal = 'modify by sub';
// console.log('subObj.superVal=>', subObj.superVal);
// console.log('supObj.superVal=>', superObj.superVal);

var subObj = Object.create(superObj);
subObj.subVal = 'sub';

console.log('subObj.subVal=>', subObj.subVal);
subObj.superVal = 'modify by sub';

console.log('subObj.superVal=>', subObj.superVal);
console.log('supObj.superVal=>', superObj.superVal);



let kim = {
    name: "kim",
    first: 10,
    second: 20,
    sum: function () {
        return this.first + this.second
    }

}
console.log(`kim.sum(): ${kim.sum()}`)
let lee = Object.create(kim);
lee.name = 'lee';
lee.second = 10;

lee.avg = function () {
    return this.sum() / 2
}
//  lee = {
//     name: "lee",
//     first: 10,
//     second: 10,
//     avg: function(){
//         return this.sum()/2
//     }
// }
// lee.__proto__ = kim;
console.log('lee.sum(): ', lee.sum());
console.log('lee.avg(): ', lee.avg());