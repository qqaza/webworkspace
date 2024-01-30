const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

//application/x-www-dorm-urlencoded
const defaultParser = express.urlencoded({extended : false});

//application/json(json 안쓰더라도 parser 넣어야함.)
const jsonParser = express.json();

//모든 라우팅에 저장.
// app.use(defaultParser);
app.use(jsonParser);

//queryString 형태.
app.get('/search', defaultParser, (req,res)=>{
    let data = req.query.keyword;
    res.send(data + ', 검색결과');
});
// /search?keyword=${value}

//info할때만 defaultparser
app.post('/info', defaultParser, (req,res)=>{
    let data = req.body.name;
    res.send('welcome, ' + data);
});
// /info => method:post, body:name=${value}

app.post('/message', (req,res)=>{
    let data = req.body.param;
    res.send(data.title + ', ' + data.content);
});
// /message => method:post, body:{"param" : {"title" : , "content" : }}

app.listen(5000, ()=>{
    console.log('Server Start');
});

let sessionSetting = session({
    secret : 'Have$A!@Nice_day', //하드코딩 X
    resave : false,
    saveUninitialized : true,
    cookie : { //쿠키는 유효기간을 만들어줘야함.
        httpOnly : true,
        secure : false,
        maxAge : 60000 //밀리세컨드
    }
});

app.use(sessionSetting);



app.post('/login', (req, res)=>{
    const {id, pwd} = req.body;
    if(!req.session.isLogin){
        req.session.user = id;
        req.session.isLogin = true;
    }
    req.session.save((err)=>{
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/');
});

const corsOptions = {
    origin : 'http://127.0.0.1:5500',
    optionSuccessStatus : 200
};

app.use(cors(corsOptions));

app.get('/', (req, res)=>{
    res.json(req.session);
});