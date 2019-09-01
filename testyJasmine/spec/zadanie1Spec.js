describe("Sprawdzanie metod dla pseudo-klasy Car", function(){
    var auto;
    beforeEach(function(){
        auto = new Car("VW", "yellow", "2003", 292000, 0);
    });

    it("Sprawdzenie metody drive", function(){
        let result = auto.drive(1000);
        expect(result).toBe(293000);
    });
    it("Sprawdź czy oilNum jest równy przejechanym kilometron", function(){
        auto.drive(2000);
        expect(auto.oilNum).toEqual(2000);
    });
    it("Sprawdź czy metoda message zwraca string", function(){
        let result = auto.message();
        expect(result).toEqual(jasmine.any(String));
    })
})