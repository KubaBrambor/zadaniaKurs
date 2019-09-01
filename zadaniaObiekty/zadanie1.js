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


// 2.
// a) Dodaj nową metodę wspólną dla wszystkich utworzony obiektów z zadania 1.
// Metoda musi nazywać się checkEngine() i wyświetla informacje , gdy przebieg samochodu wynosi > 10,000 km, o konieczności wykonania przeglądu.
// b) Dodaj nową metodę oilChange(), która w nowo utworzonej tablicy umieści aktualną datę wykonania przeglądu.

// Zaproponuj kod dla obiektu wykorzystywanego w pilotach telewizyjnych. Wytyczne:
// a) pilot posiada listę zapisanych kanałów w tablicy. W przypadku przełączania na kanał, którego nie ma w tablicy, metoda musi zwrócić odpowiednią informację.
// b) pilot musi posiadać informacje o aktualnie wybranym kanale.
// c) pilot musi posiadać informacje o aktualnie wybranym poziomie głośności.
// d) pilot może zmieniać kanały
// e) pilot może zmieniać głośność Góra/Dół: uwaga maksymalna głośność to 20, a minimalna 0

// Zaproponuj strukturę obiektów dla programu ewidencji czasu i zadań pracowników. Skorzystaj z mechanizmu dziedziczenia obiektów. Struktura wygląda następująco

// --pracownik
// ---- manager

// ---- programista
// |---- front-end developer (programuje w angular)
// |---- back-end developer (programuje w java)
// ---- tester
// |---- tester automatyczny (ma dodatkowa umiejetnosc pisania testów automatycznych)