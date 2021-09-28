// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let input = '125 4'.split(' ');
const a = Number(input[0]), b= Number(input[1]);

let cnt = 0;

for(let i =1;i<=a; i++){
    if(a%i===0){
        cnt += 1;
        if(cnt===b){
            console.log(i);
        }
    }
}
if(cnt < b){
    console.log(0);
}