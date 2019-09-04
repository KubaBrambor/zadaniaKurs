// 1.
// Wyszukaj w podanej strukturze strony następujące elementy:

// * kolekcje elementów zawierających klasy w postaci header-*
var headerClass = document.querySelectorAll("[class*='header-']");

// * Element o id searchicon. 
var searchIconElement = document.getElementById("searchicon");

    //druga metoda
    var searchIconElement = document.querySelector("searchicon");

// * Kolekcje elementów listy z menu nawigacyjnego. Ile znajduje się w niej elementów?
var navListCollection = document.querySelector("nav ul");
console.log(`Lista zawiera ${navListCollection.childElementCount} elementów`);

    //druga metoda
    document.getElementsByClassName("menu-item").length;

// * Kolekcje paragrafów zawartych w obu artykułach. Ile ich jest? Czy można zbudować tak złożone zapytanie? Czy jest jakiś sposób łączenia wyników roznych zapytan?
var articleParagraphs = document.querySelectorAll("article p");
console.log(`Liczba paragrafów w obydwu artykułach wynosi ${articleParagraphs.length}`);

    //drugą metodą jest pobranie elementu <p> z jednego oraz drugiego <article> i utworzenie z nich tablic aby je połączyć.
    var articleParagraphs1 = document.querySelectorAll("article p:nth-of-type(1)");
    var articleParagraphs2 = document.querySelectorAll("article p:nth-of-type(2)");

    var arr1 = Array.from(articleParagraphs1);
    var arr2 = Array.from(articleParagraphs2);

    var arrConcat = arr1.concat(arr2);

// * Wszystkie elementy posiadające atrybut data-check. ile ich jest?
var dataCheckElements = document.querySelectorAll("[data-check]"); 
console.log(`Liczba elementów z atrybutem data-check to ${dataCheckElements.length}`);

    //druga metoda
    function getAllElementsWithAttribute(attribute)
        {
        var matchingElements = [];
        var allElements = document.getElementsByTagName('*');
        for (var i = 0; i < allElements.length; i++)
        {
            if (allElements[i].getAttribute(attribute) !== null)
            {
            matchingElements.push(allElements[i]);
            }
        }
        return matchingElements;
        }

        getAllElementsWithAttribute("data-check");

        // W zasadzie wszystkie przeglądarki (Firefox, Internet Explorer, nowsze wersje Opery, Safari, Konqueror 
        // oraz iCab) zwracają null, jeśli bieżący element nie posiada atrybutu o podanej nazwie. 
        // Specyfikacja DOM mówi, że w takiej sytuacji powinien być zwracany pusty ciąg znaków i niektórze 
        // implementacje DOM tak się zachowują. Zatem jeśli jest możliwe, że element nie posiada żądanego atrybutu, 
        // powinieneś użyć metody hasAttribute aby sprawdzić istnienie atrybutu zanim wywołasz getAttribute.
        function getAllElementsWithAttribute(attribute)
            {
            var matchingElements = [];
            var allElements = document.getElementsByTagName('*');
            for (var i = 0; i < allElements.length; i++)
            {
                if (allElements[i].hasAttribute(attribute))
                {
                // Element exists with attribute. Add to array.
                matchingElements.push(allElements[i]);
                }
            }
            return matchingElements;
            }



// Do każdego zadania spróbuj zastosować więcej niż jedną funkcję wyszukującą


// 2.1
// * Zwróć listę klas elementu span, będącęgo dzieckiem elementu o klasie "cart" w header-top menu. 
//Zastosuj metody zwracającą pojedynczy ciąg znaków i kolekcje
var spanElement = document.querySelector("[class*='header-topmenu'] [class*='cart'] span");
spanElement.classList;

var spanElement = document.querySelectorAll("[class*='cart']");
spanElement[1].classList
//     a) Czy możesz sprawdzić czy ten element posiada swoje unikalne Id?
spanElement[1].hasAttribute("id")
// * Zwróć kod HTML wewnątrz drugiego paragrafu, w drugim artykule.
//     a) bez elementu zawierającego
var articleParagraph = document.querySelector("article:nth-of-type(2) p:nth-of-type(2)");
articleParagraph.innerHTML;
//     b) wraz z elementem zawierającym
articleParagraph.outerHTML;
// * Zwroc listę atrybutów elementu img o klasie article-image
getImg[0].attributes;
// * Zwroc listę atrybutów elementu a o klasie brand
getBrandClass[1].attributes
// * Zwroc wartosc atrybutów,jeśli istnieje, background dla elementó product-inner-wrap
var getInnerWrap = document.getElementsByClassName("product-inner-wrap");
if (getInnerWrap[0].hasAttribute("background")){ console.log(getInnerWrap[0].getAttribute("background"))}
//     *nie powinno się stosowac takich atrybutów! usun go w kodzie JS
getInnerWrap[0].removeAttribute("background");