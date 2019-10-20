/*.
정보시스템에서 가장 중요한것
1. 기록하기 (만들기)
2. 읽기
3. 수정하기 (가공하기)
4. 삭제하기
*/

//목록이 필요한 경우는 배열을 사용할 수 있다.
let memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log(memberArray[1]);

//이름이 있는 정보를 정리 정돈 할 수 있다.
const memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}
console.log(memberObject['designer']);
console.log(memberObject['manager']);

memberObject.designer = 'leezche';

console.log(memberObject['designer']);

//객체의 데이터를 삭제한다.
delete memberObject.manager;
console.log(memberObject['manager']);