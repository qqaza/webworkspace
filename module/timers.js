//2024-01-26 15:03:50

function format(value){
    return ('0' + value).slice(-2); //2자리로 출력하는 함수
}

function getDateTime(){
    let today = new Date();
    let year = today.getFullYear();
    let month = format(today.getMonth()+1);
    let day = format(today.getDate());

    let hour = format(today.getHours());
    let min = format(today.getMinutes());
    let sec = format(today.getSeconds());

    return `${year}-${month}-${day}-${hour}:${min}:${sec}`;
}

console.log(getDateTime());

const timeout = setTimeout(()=>{
    console.log(getDateTime());
}, 3000);

//clearTimeout(timout);
//시간지정
let count = 0;
const interval = setInterval(()=>{
    console.log('count',count++)
    if(count == 5){
        clearInterval(interval);
    }
    console.log(getDateTime());
}, 2000);
//즉각실행
setImmediate(()=>{
    console.log('setImmediate',getDateTime());
});

console.log('마지막 코드');