// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ``.split('\n');

function someone(name) {
  this.name = name;
  whoAmI() {
    console.log(this.name);
  }
};

someone.whoAmI();

const other = someone.whoAmI;
console.log('====');
other();
