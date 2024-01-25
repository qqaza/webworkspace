// Default  function Parameter
function getComment(user = 'Anony', msg = 'no comment'){
    let result = `${msg}, from${user}`;
    console.log(result);
}

getComment('Han', 'Today is ...');
getComment('Adward');
getComment(undefined, 'Hello, world');
getComment();

//Rest Parameter
//더하는 수의 제한이 없는 더하기 계산
function sum(x=0, y=0, ...args){ //...args(last parameter) 항상 마지막에 있어야한다. 
    let result = x + y;
    for(let num of args){
        result += num;
    }
    return result;
}

console.log(sum(1, 2));
console.log(sum(10,20,30,40));

let ary = [1,2,3,4,5,6,7];
//펼침연산자
console.log(sum(...ary));
