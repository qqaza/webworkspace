//사용위치와 상관없이 모듈은 맨 위로(require import같은 모듈)
const process = require('process');
const os = require('os');

console.log(process.env);
console.log('====================================================');
console.log(os.cpus());
console.log(os.tmpdir());
