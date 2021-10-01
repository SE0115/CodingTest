// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `7`.split('\n');
let card= Array.from({length: input[0]}, (v, i)=> i+1);

while(card.length>1){
    card.shift();
    let temp = card.shift();
    card.push(temp);
}
console.log(card);