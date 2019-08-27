var check = function(expr){

    let a = 10;
    let b = 5;

    switch(expr){
        case "*":
            var c = a*b;
            console.log(c);
            break;
        case "/":
            var c = a/b;
            console.log(c);
            break;
        case "-":
            var c = a-b;
            console.log(c);
            break;
        default:
            var c = a+b;
            console.log(c);
    }
    return c;
}