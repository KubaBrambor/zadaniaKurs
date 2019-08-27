let dayCheck = function(hour){
    if(hour <= 12){
        console.log("good morning");
    } else if (hour > 12 && hour <= 18) {
        console.log("good day");
    } else {
        console.log("good evening");
    }
    var timeAlert = console.log(`Your time is ${hour}`);
    return hour;
}

let dayCheckStr = function(hour){
    if(hour === "Morning"){
        console.log("good morning");
    } else if (hour === "Afternoon") {
        console.log("good day");
    } else if (hour === "Evening") {
        console.log("good evening");
    }
    var timeAlert = console.log(`Have a nice ${hour}`);
    return hour;
}