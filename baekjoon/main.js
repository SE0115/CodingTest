// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = `5
-1
-2
-3
-1
-2`.split('\n').map(x => Number(x));

const len = input.shift();
let result=[];
input = input.sort((a,b)=> a-b);
// console.log(input);
const temp = input.reduce((acc, cur) => { 
    acc[cur] = (acc[cur] || 0)+1; 
    return acc;
  }, {});

// console.log(temp);

let sortobj = [];
let max = 0;
for (let number in temp) {
    max = (max < temp[number]? temp[number] : max);
    sortobj.push([number, temp[number]]);
}
  
let temp2 =[];
temp2 = sortobj.filter(x => Number(x[1])===max);
temp2.sort(function(a, b) {
    return a[0] - b[0];
  });
  
result.push(Math.round(input.reduce((acc, cur) => {return acc + cur}) / len));
result.push(input[parseInt(input.length/2)]);
result.push((temp2.length > 1) ? Number(temp2[1][0]) : Number(temp2[0][0]));
result.push(input[input.length-1] - input[0]);

console.log(result.join('\n'));