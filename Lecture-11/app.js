console.log('Hello Node');

var x = 1;
console.log(process.argv.slice(2))
var main = require('./main');
console.log(main);
console.log(main.k())
function apple(){
    return "Apple";
}
