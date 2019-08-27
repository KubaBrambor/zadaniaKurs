function moduloFunc(){

    var even = 0;
    var odd = 0;

    for(i=1; i <= 20; i++){
        if(i%2 == 0){
            even = even + i;
        } else {
            odd = odd +i;
        }
    }
    return {evenSum: even,
            oddSum: odd};
}

