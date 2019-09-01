// 1.
// Wyszukaj w podanej strukturze strony następujące elementy:
// * kolekcje elementów zawierających klasy w postaci header-*
// * Element o id searchicon. 
// * Kolekcje elementów listy z menu nawigacyjnego. Ile znajduje się w niej elementów?
// * Kolekcje paragrafów zawartych w obu artykułach. Ile ich jest? Czy można zbudować tak złożone zapytanie? Czy jest jakiś sposób łączenia wyników roznych zapytan?
// * Wszystkie elementy posiadające atrybut data-check. ile ich jest?

// Do każdego zadania spróbuj zastosować więcej niż jedną funkcję wyszukującą

var getByClass = document.querySelectorAll('[class*=\'header\-\']');
var elementId = document.getElementById("searchicon");

var navBar = document.getElementsByTagName("nav");
var list = navBar[0].getElementsByTagName("li");

var articles = document.getElementsByTagName("article");
var paraph1 = Array.from(articles[0].getElementsByTagName("p"));
var paraph2 = Array.from(articles[1].getElementsByTagName("p"));
var paraph3 = paraph2.concat(paraph1);



// Zwróć listę klas elementu span, będącęgo dzieckiem elementu o klasie "cart" w header-top menu. Zastosuj metody zwracającą pojedynczy ciąg znaków i kolekcje
//     a) Czy możesz sprawdzić czy ten element posiada swoje unikalne Id?
// * Zwróć kod HTML wewnątrz drugiego paragrafu, w drugim artykule.
//     a) bez elementu zawierającego
//     b) wraz z elementem zawierającym
// * Zwroc listę atrybutów elementu img o klasie article-image
// * Zwroc listę atrybutów elementu a o klasie brand
// * Zwroc wartosc atrybutów,jeśli istnieje, background dla elementó product-inner-wrap
//     *nie powinno się stosowac takich atrybutów! usun go w kodzie JS


var takeOne = document.querySelector(".cart");
var takeSpan = takeOne.getElementsByTagName("span");
var spanClassList = takeSpan[0].classList;
var spanId = takeSpan[0].id;

var getArticle = document.querySelector("article:nth-of-type(2)");
// ------------------------------------------------------------------
// var getArticle = document.querySelector("article:nth-of-type(2) p:nth-of-type(2)");
// ------------------------------------------------------------------
var getParaph = getArticle.querySelector("p:nth-of-type(2)");
var theInnerHTML = getParaph.innerHTML;
var theOuterHTML = getParaph.outerHTML;

var getImg = document.querySelector(".article-image");
var getImgAtt = getImg.attributes;






