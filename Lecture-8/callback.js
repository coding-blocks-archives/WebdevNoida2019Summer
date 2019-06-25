
// function ImageProcessing() {
//     setTimeout(function(){
//         readFile(test)
//         //test()
//     },0)
//        function test() {
//         setTimeout(function(){
//             console.log("Reading Image 2")
//         },0)
//     } 
// }
// function ReadFile() {
//     console.log('Main File Readed')
// }
// function getData() {
//     console.log('function got data')
// }
// ImageProcessing(); 
// ReadFile(); 
// getData(); 
// function readFile(test) {
//     setTimeout(function(){
//       // file => extract 
//       // file => Pixelate
//       test();
//     },0)
// }

function ImageProcessing() {
  clearImage('240 * 240', function(r){
      r();
  })
}

// function clearImage(res, cb) {
//     //jkegddehehf
//     setTimeout(function(){
//         // Enhancing Image
//         cb(function(){
//             console.log(res);
//         });
//     }, 0)
//     //asdfekqhfuief
    
// }

// ImageProcessing()

let p = 0;
function organizingParty() {
   Billing(function(price){
     p = p + price;
    console.log(p);
  })
}

function orderPizza(order, cb) {
  setTimeout(function(){
     let output = order * 80 ;
     cb(output);
  },0)
 
}

function orderDrink(order, cb) {
    setTimeout(function(){
        let output = order * 60 ;
        cb(output)
    },0)
}

function Billing(cb) {
    var pizza,drink;
    orderPizza(5, function(price){
        pizza = price;
        cb(pizza);
    })
  
    //InvitingFriends();
    orderDrink(5, function(price){
        drink = price;
        cb(drink);
    })

   
}

organizingParty();