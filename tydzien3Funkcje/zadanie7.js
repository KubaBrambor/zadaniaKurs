var addFunc = function(a, b){
    if(isNaN(a) || isNaN(b)){
        console.log(`wprowadzono niepoprawne dane: ${a} i ${b}`);
    } else {
        var sum = a + b;
        return sum;
    }
}