const crypto = require('crypto');
const { resolve } = require('path');
const data = 'pw1234';

let encData = crypto.createHash('sha512')
                    .update(data)
                    .digest('base64');
console.log(data, encData);

encData = crypto.createHash('sha512')
                    .update(data)
                    .digest('hex');
console.log(data, encData);

//salting 암호화=> 의미없는 값을 부여하는것.
const createSalt = ()=>{
    return new Promise((resolve, reject)=>{
        crypto.randomBytes(64,(err,buf)=>{
            if(err)reject(err);
            resolve(buf.toString('base64'));
        })
    })
} 

const createCryptoPassword = 
async(plainPassword)=>{
    const salt = await createSalt();

    return new Promise((resolve, reject)=>{
        crypto.pbkdf2(plainPassword,
                      salt,
                      9999,
                      64,
                      'sha512',
                      (err, key)=>{
                if(err) reject(err);
                resolve({ password : key.toString('base64'),
            salt
        })
          })
     })
    
    };

    const CryptoPassword = async()=>{
        encData = await createCryptoPassword(data);
        console.log(encData);
    }
    CryptoPassword();

    createCryptoPassword(data)
    .then(result=>console.log(result))
    .catch(err=> console.log(err));
 
