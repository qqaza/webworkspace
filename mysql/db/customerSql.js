//customersSql.js
//조회
let customerList =
`SELECT id
        , name
        , email
        , phone
        ,address
FROM customers`;

//단건조회
let customerInfo = 
`SELECT id
        , name
        , email
        , phone
        ,address
FROM customers
where id = ?`;
//1) 배열인지 아닌지 : 물음표의 갯수
//2) 물음표 별로 객체타입인지 아닌지 : 어느 컬럼에 들어가는 값인지 구분 가능여부

//등록
let customerInsert = 
`insert into customers
set ?`; //객체, 필드명 == 컬럼명

//수정
let customerUpdateAll =
`update customers
set ?
where id =?`; //배열 [ 객체 , 단일값 ]

let customerUpdateInfo =
`update customers
set email = ?, phone = ?, address = ?
where id =?`; //배열 [ 단일값 , 단일값 , 단일값 , 단일값 ]


module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    customerUpdateAll,
    customerUpdateInfo
}
