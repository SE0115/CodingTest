// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `4 3
// 9 7 4
// 9 7 4`.split('\n');

let input = 'a';

function strCut(str, len) {
  if(len === 1){
    return str.split('');
  }
  else {
    let result = [];
    let i=0;
    while(i<str.length){
      result.push(str.substr(i,len));
      i+=len;
    }
    return result;
  }
}

function strZip(cutted) {
  let cnt = 1;
  let temp = cutted[0];
  let result = '';
  for(let j=1; j<cutted.length; j++){
    if(temp===cutted[j]){
      cnt+=1;
    }
    else {
      result += `${cnt > 1 ? cnt : ''}${temp}`;
      cnt=1;
      temp=cutted[j];
    }
  }
  result += `${cnt > 1 ? cnt : ''}${temp}`;

  return result;
}

let best_zip;
if(input.length === 1) {
  console.log(input.length);
}
else {
  for(let i =1; i<input.length; i++){
    const cutted = strCut(input, i);
    const after_zip = strZip(cutted);
    if(i===1) best_zip = after_zip;
    if(best_zip.length > after_zip.length) {
      best_zip = after_zip;
    }
  }
  
  console.log(best_zip.length);  
}