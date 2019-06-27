
function readFile(name, cb) {
    // Reading the text from the file
    setTimeout(function(){
        cb(name)
    },0) 
}
function convertToString(data, cb) {
  setTimeout(function(){
    let strin = data.toString();
    cb(strin);
  },0)  
}
function splittingData(str, cb) {
    setTimeout(function(){
        let arr = str.split('');
        cb(arr);
    },0)
  
}
function getRidofSpace(str, cb) {
    setTimeout(function(){
        let s = str.replace(/\s/g, '');
        cb(s);
    },0)
}
function loop(arr, cb){
    setTimeout(function(){
        arr.forEach(function(data){
            cb(data);
        });
    },0)
}