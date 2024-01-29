const fs = require('fs');
const data = 'Hello, Node.js World';

// fs.writeFile('./sample.txt',data,'utf-8', (err)=>{
//     if(err) throw err;
//     console.log('job completed');
// })

//해당파일 읽기
fs.readFile('./sample.txt','utf-8', (err,datas)=>{
    if(err) throw err;
    console.log(datas);
})