$(document).ready(function(){
    let inp = $('#inp');
    let btn = $(document.getElementById('btn'));
    let result = $('#result');

    btn.click(function(){
        let val = inp.val();
        result.append('<li>' + val +'</li>');
    })

    $.ajax({
        url: 'http://numbersapi.com/42',
        method: 'GET',
        success: function(data) {
            console.log(data);
        }
    })
    
})

