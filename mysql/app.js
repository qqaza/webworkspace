const express = require('express');
const app = express();
const mysql = require('./db.js');
//mysql.executeQuery();
//application/json
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({extended : false}));

app.listen(3000, ()=>{
    console.log('Server Start, http://localhost:3000');
});
//조회
app.get('/customers', async (req, res)=>{
    let list = await mysql.executeQuery('customerList');
    res.json(list);
});

//단건조회
app.get('/customers/:id', async (req, res)=>{
    let customerId = req.params.id;
    let info = (await mysql.executeQuery('customerInfo', customerId))[0];
    res.json(info);
});

//등록
app.post('/customers', async (req, res)=>{
    let data = req.body.param;
    let result = await mysql.executeQuery('customerInsert', data);
    res.json(result);
})


//수정
app.put('/customers/:id', async (req, res)=>{
    let result = await updateInfo(req);
    res.json(result);
});

async function updateAll(request){
    let data =[ selectedInfo(request.body.param) , request.params.id ]; // [set절,id컬럼]
    let result = await mysql.executeQuery('customerUpdateAll', data);
    return result;
}
//id, email 제거하기.
function selectedInfo(obj){
    let delData = ["id", "email"];
    let newObj = {};
    let isTargeted = null;
    for(let field in obj ){ //field : id, name, email, phone, address
        isTargeted = false;
        for(let target of delData){
            if(field == target){
                isTargeted = true;
                break;
            } 
        }
        if(!isTargeted){
            newObj[field] = obj[field];
        }
    }
    return newObj;
};

async function updateInfo(request){
    let data =[ ...getInfo(request.body.param) , request.params.id ]; // 컬럼 : email, phone, address, id
    let result = await mysql.executeQuery('customerUpdateInfo', data);
    return result;
}

function getInfo(obj){
    let getData = ["email", "phone", "address"];
    let newAry = [];
    for(let target of getData){
        for(let field in obj){
            if(field == target){
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry; //  ["hkhong@email.com", "010-1234-5678","null"]
};

