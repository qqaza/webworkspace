console.log('Destructuring');

// Object 연습

function getUserInfo(){
    return {
        firstName : 'John',
        lastName : 'Doe',
        email : 'John@gmail.com',
        city : 'New York',
        county : 'USA',
        info : function(){
            return 'My Name is ' + this.lastName
        }
    };
}

let user = getUserInfo();
console.log(user);
console.log(user.info());
let {firstName, lastName, info} = getUserInfo();
console.log(firstName, lastName);
console.log(info());

//Array
let ary = [1, 2, 3];

let [x, y, z] = ary;
console.log(x,y,z);

let [a,b] = ary;
console.log(a,b);

let [e, f, g, h] = ary;
console.log(e, f, g, h);

//주석 추가
