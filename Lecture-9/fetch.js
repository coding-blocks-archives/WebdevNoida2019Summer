fetch('http://numbersapi.com/42')
    .then((data)=> {
    if(data.status != 200) return;
     res.text().then((data) => console.log(data));
})

// fetch('http://numbersapi.com/42')
//     .then(execute)

// function execute(data) {
//         if(data.status != 200) return;
//         data.text().then((data) => console.log(data));
// }

// fetch('http://numbersapi.com/42')
//     .then(execute)
//     .then((data)=>{
//         console.log(data);
//     })

// function execute(data) {
//         if(data.status != 200) return;
//         return data.text();
// }

