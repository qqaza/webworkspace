const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('Server Start, http://localhost:3000');
});

// 전체조회
app.get('/t_users', async (req, res) => {
    let list = await mysql.executeQuery('t_userList');
    res.json(list);
});

// 단건조회
app.get('/t_users/:user_no', async (req, res) => {
    let t_userNo = req.params.user_no;
    let info = (await mysql.executeQuery('t_userInfo', t_userNo))[0];
    res.json(info);
});

// 추가
app.post('/t_users', async (req, res) => {
    let data = req.body.param;
    let result = await mysql.executeQuery('t_userInsert', data);
    res.json(result);
});

// 수정
app.put('/t_users/:user_no', async (req, res) => {
    let result = await updateAll(req);
    res.json(result);
});

async function updateAll(request) {
    let data = [selectedInfo(request.body.param), request.params.user_no];
    let result = await mysql.executeQuery('t_userUpdateAll', data);
    return result;
}

async function updateInfo(request) {
    let data = [ ...getInfo(request.body.param), request.params.user_no];
    let result = await mysql.executeQuery('t_userUpdateInfo', data);
    return result;
}

function selectedInfo(obj) {
    let { user_no, user_id, user_gender, ...others } = obj;
    return others;
};

function getInfo(obj) {
    let getData = ["user_pwd", "user_name", "user_age"];
    let newAry = [];
    for (let target of getData) {
        for (let field in obj) {
            if (field == target) {
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry;
}

// 삭제
app.delete('/t_users/:user_no', async (req, res) => {
    let t_userNo = req.params.user_no;
    let info = await mysql.executeQuery('t_userDelete', t_userNo);
    res.json(info);
});