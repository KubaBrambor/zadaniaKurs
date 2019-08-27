function silnia(n){
    if(isNaN(n)){
        console.log("Nie można wywołać funkcji! Zmienna n nie jest numerem!");
    } else {
        if(!n){ 
            return 1;
        } else { 
            return n*silnia(n-1); 
        }
    }
}
