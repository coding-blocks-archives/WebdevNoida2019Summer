

readFile('main.txt', function(data){
    convertToString(data, function(td){
        getRidofSpace(td, function(ws){
            splittingData(ws, function(arr){
                loop(arr,function(data){
                    console.log(data);
                })
            })
        })
    })
})

// oRDER COLDDRINK
