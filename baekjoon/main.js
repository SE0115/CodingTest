// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`.split('\n');

let result = [];
// let check = false;
for(let i=0;i<input.length-1;i++){
    let stack = [];
    for(let j=0; j<input[i].length; j++){
        if(input[i][j]==='(' || input[i][j]==='['){
            stack.push(input[i][j]);
        }
        else if(input[i][j]===')'){
            if(stack[stack.length-1]==='('){
                stack.pop();
            }
            else {
                stack.push(input[i][j]);
                break;
            }
        }
        else if(input[i][j]===']'){
            if(stack[stack.length-1]==='['){
                stack.pop();
            }
            else {
                stack.push(input[i][j]);
                break;
            }
        }
    }
    result.push(stack.length===0 ? 'yes' : 'no');
}
console.log(result.join('\n'));
