let superObj = {
    superVal: "super"
}
let subObj = {
    subVal: "sub"
}

subObj.__proto__ = superObj;
//먼저 subObj에서 superVal을 찾고 없으면 위로 올라간다.
console.log(subObj.superVal);
subObj.superVal = 'modify by sub';
console.log('subObj.superVal=>', subObj.superVal);
console.log('supObj.superVal=>', superObj.superVal);
