// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = `4 3
9 7 4
9 7 4`.split('\n');

let result = [];
const setA = input[1].split(' ').sort((a,b)=> a-b);
const setB = input[2].split(' ');

result = setA.filter(x => !setB.includes(x));
result.unshift(result.length);
if(result.length === 0)
{
  console.log(result.length);
}
else{
  console.log(result.length);
  console.log(result.join(' '));

}
