var moduloFunc = function(num){
    var moduloArr = [];
    for(let i = 0; i <= num; i++){
        if(num%i === 0){
            moduloArr.push(i);
        }
    }
    return moduloArr;
}