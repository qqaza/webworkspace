let t_userList =
`select user_no,
        user_id,
        user_pwd,
        user_name,
        user_gender,
        user_age,
        join_date
from t_users`;

let t_userInfo = 
`select user_no,
        user_id,
        user_pwd,
        user_name,
        user_gender,
        user_age,
        join_date
from t_users
where user_no = ?`;

let t_userInsert = 
`insert into t_users
set ?`;

let t_userUpdateAll = 
`update t_users
set ?
where user_no = ?`;

let t_userUpdateInfo = 
`update t_users
set user_pwd = ?, user_name = ?, user_age = ?
where user_no = ?`;

let t_userDelete =
`delete from t_users
where user_no = ?`;

module.exports = {
    t_userList,
    t_userInfo,
    t_userInsert,
    t_userUpdateAll,
    t_userUpdateInfo,
    t_userDelete
}