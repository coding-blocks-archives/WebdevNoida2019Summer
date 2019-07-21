const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'views'));

app.get('/student', (req,res)=>{
    res.render('index', {name: 'Aayu', RollNo: 113002,
                 c:  100,
                  marks: {
                      ds: 0,
                      automata: -12
                  },

                  students: [
                      {name: 'Aayush', rollNo: 1},
                      {name: 'Ravi'},
                      {name: 'Kishan', rollNo: 3}
                  ]
                  })
})
app.listen(5000, ()=>{
    console.log('Server Running')
})