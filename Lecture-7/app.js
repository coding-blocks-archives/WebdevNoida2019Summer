
// var hello = 1;
// var main = 4;

// var greet = function() {
//     main = 6;
//     var z = 7;

//     if(z > 4) {
//          var m = 10;
//     }
//     //console.log(m);
// }

// var global = {};
// studentMarks();
// function studentMarks() {
//     var marks = 10;
//     name();
//     function name(){
//        marks = 11;
//        return marks;
//     }

//     global.nam = name;
//     //console.log(marks);
// }

// console.log(global.nam());

function abc() {

    var m = 10;
    function b(){
        console.log("B executed")
    }
    b();
    function a() {
        console.log("A executed "+ m)
    }

    return a;
}

var check = abc();
console.log('hELLO')
check();

// JS INTERPRETER - Compiler
// Scoping - Global, Lexical, Functional 
// Closures 
// Todolist Application 
