// Napisz funkcję, która wyliczy ostateczną wartość promocji w sklepie odzieżowym wg kryteriów:

// Przy zakupie dwóch rzeczy, droższy produkt jest 30% tańszy
// Przy zakupie trzech rzeczy każda z nich jest tańsza o 30 zł od ceny na metce, ale nie tańszy niż 20 zł
// Przy zakupie 4 rzeczy, rabat jest naliczany dla każdego kompletu (2 sztuki) tak jak w pkt1 zadania. Wybierz zawsze najkorzystniejsza kombinacje dla klienta
// Przy zakupie 5 rzeczy najtańsza rzecz jest gratis, a pozostałe 4 wg promocji dla kompletów lub wg kombinacji 3 + 2. Która metoda jest najkorzystniejsza?


var funcObj = {
    twoProducts: function(a,b){
        let moreExpensive = Math.max(a,b) * 0.3;
        let salePrice = (a + b) - moreExpensive;
        console.log(`Ostateczna cena po promocji wynosi ${salePrice}`);
        return salePrice;
    },
    threeProducts: function(a,b,c){
        let arrPrice = [];
        /* pętla odejmująca 30 zł od każdego produktu */
        for(i=0; i<arguments.length; i++){
            var number = arguments[i] - 30;
            arrPrice.push(number);
            
            if(arrPrice[i]<20){
                arrPrice[i] = 20;
            }
        }
        console.log(`Ceny trzech produktów po promocji ${arrPrice}`);
        let arrSum = function(arrPrice){
            return arrPrice.reduce(function(a,b){
              return a + b
            }, 0);
          };
        
        return arrSum(arrPrice);
    },
    fourProducts: function(a,b,c,d){
        let arrPrice = [a,b,c,d];
        arrPrice.sort(function(a,b){return b-a});
        let salePrice = (arrPrice[0]*0.7) + (arrPrice[1]*0.7) + arrPrice[2] + arrPrice[3];
        console.log(`Najkorzystniejsza cena po promocji dwóch kompletów wynosi ${salePrice}`);
    },
    fiveProducts: function(a,b,c,d,e){
        function comprasionOne(a,b,c,d,e){
            let arrPrice = [a,b,c,d,e];
            arrPrice.sort(function(a,b){return b-a});
            arrPrice[4] = 0;
            let salePrice = (arrPrice[0]*0.7) + (arrPrice[1]*0.7) + arrPrice[2] + arrPrice[3];
            return salePrice;
        }
        function comprasionTwo(a,b,c,d,e){
            let arrPrice = [a,b,c,d,e];
            arrPrice.sort(function(a,b){return b-a});
            let funcTwo = funcObj.twoProductsNonText(arrPrice[0], arrPrice[4]);
            let funcThree = funcObj.threeProductsNonText(arrPrice[1], arrPrice[2], arrPrice[3]);
            let sum = funcTwo + funcThree;
            return sum;
        }

        let compOne = comprasionOne(a,b,c,d,e);
        let compTwo = comprasionTwo(a,b,c,d,e);
        let comprasionPrice = Math.min(compOne, compTwo);
        console.log(comprasionPrice);
        return comprasionPrice;
    },

    /* na potrzeby funkcji fiveProducts, funkcje bez metody log */
    twoProductsNonText: function(a,b){
        let moreExpensive = Math.max(a,b) * 0.3;
        let salePrice = (a + b) - moreExpensive;
        return salePrice;
    },
    threeProductsNonText: function(a,b,c){
        let arrPrice = [];
        /* pętla odejmująca 30 zł od każdego produktu */
        for(i=0; i<arguments.length; i++){
            var number = arguments[i] - 30;
            arrPrice.push(number);
            
            if(arrPrice[i]<20){
                arrPrice[i] = 20;
            }
        }
        let arrSum = function(arrPrice){
            return arrPrice.reduce(function(a,b){
              return a + b
            }, 0);
          };
        
        return arrSum(arrPrice);
    }
}


var sale = function(a,b,c,d,e){
    switch(arguments.length){
        case 2:
            funcObj.twoProducts(a,b);
            break;
        case 3:
            funcObj.threeProducts(a,b,c);
            break;
        case 4:
            funcObj.fourProducts(a,b,c,d);
            break;
        case 5:
            funcObj.fiveProducts(a,b,c,d,e);
            break;
    }            
}
