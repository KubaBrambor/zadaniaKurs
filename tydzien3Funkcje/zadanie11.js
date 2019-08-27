var someArr = [2, 3, 4, 20, 50, 29, 100];

var fooArrSum = someArr.reduce(function(a, b){
    return a + b;
});

var fooArrMultiple = someArr.reduce(function(a, b){
    return a * b;
});

var fooArrToString = someArr.join("&");

var fooArrAverage = someArr.reduce(function(a,b){
    return a + b}) / someArr.length;