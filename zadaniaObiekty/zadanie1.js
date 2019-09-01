var Car = function(brand, color, year, distance, oilNum){
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.distance = distance;
    this.oilNum = oilNum;
}

Car.prototype.drive = function(kilometers){
    this.distance = this.distance + kilometers
    console.log(this.distance);
    this.oilNum = this.oilNum + kilometers;
    if (this.oilNum > 10000){
        console.log("Nalezy wymienic olej");
        this.oilNum = 0;
    }
}

Car.prototype.colore = function(color){
    this.color = color;
}

Car.prototype.message = function(){
    console.log(`Przebieg dla samochodu o marce ${this.brand} wynosi ${this.distance}`);
}

var ford = new Car("Ford", "red", "1998", 120000, 0);
var vw = new Car("VW", "yellow", "2003", 292000, 0);
var mazda = new Car("Mazda", "green", "2010", 92000, 0);
