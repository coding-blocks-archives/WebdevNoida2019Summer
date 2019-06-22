// var x; // Number

// var y = "Hello"; //String
// var z = true; // Boolean
// var m = [1, 2, 3, 5];
// var b= NaN; // Not a Number
// var t; // undefined
// var f = null; // null

// var k = {a:4, n:7}
// var z = 'Bye';
// // console.log(x);
// // console.log(y);
// // console.log(z);
// // console.log(m);
// // console.log(b);
// // console.log(t);
// // console.log(f);
// // console.log(k);

// if(typeof(x) != undefined) {
//     console.log("Successful")
// }
// else if(m.length === 4) {
//     console.log('You made the right Array')
// }
// else {
//     console.log('Program Failed');
// }

// // Alert
// // Prompt
// // Confirm Box 

//  /**
//   * @alert - freezing before accepting
//   * @prompt - Taking input from user
//   * @confirm - Confirm check alert
//   */

// //   alert("Your payment will be deducted")
// var nam = prompt("What's your name");
// var y = confirm("Should I make the payment?");
// if(y) {
//   alert("Payment done for " + nam);
// }
// else {
//     alert("Payment declined for " + nam)
// }

// Loops


var cv = ['1', 1, true, {a:9}, [3,4]];

// for(var i=0; i<cv.length; i++) {
//     console.log(cv[i]);
// }

cv.forEach(function(value){
    console.log(value);
})