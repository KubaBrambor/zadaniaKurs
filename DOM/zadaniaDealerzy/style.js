// 2.2
// Na stronie 2 brakuje kilku kluczowych elementów. Uzupelni je korzystajac z JavaScript:
// 1. przyporzadkuj kazdemu artykulowi obrazek odpowiadajacy jego marce
// 2. naglowek powinien miec swoj unikalny obrazek
// 3. strona powinna miec tematyczne tlo
// 4. elementy z menu bocznego TypSellers powinny po kliknieciu przekierowywać strone producenta danej marki
// 5. elementy menu powinny się wyswietlać w jednej linii. popraw kod dopisujac do listy odpowiednia klase zdefiniowana w css


// 3.1
// Korzystająć z JavaScript:
// 1. dodaj kolejną pozycję do menu TopSellers na końcu listy.
// 2. dodaj kolejną pozycję do menu TopSellers na 2. miejscu listy
// 3. podmien pozycje dealerzy w menu głównym (nav)  na 'kontakt'
// 4. podmien slogan pod każdym tytułem artykułu na wybraną przez siebie treść.
// 5. usun ostatni element TopSellers.
// 6. usun drugi artykuł

var topSellers = document.querySelector("section.popular-recipes");
var newPosition = document.createElement("a");
var newPositionText = newPosition.innerText = "pozycja1";
topSellers.appendChild(newPositionText);

var a2 = topSellers.querySelector("a:nth-of-type(2)");
topSellers.insertBefore(newPosition, a2);

var navMenu = document.querySelector("nav ul li:nth-of-type(4)");
navMenu.innerHTML="kontakt"

var h3 = document.getElementsByTagName("h3");
h3[0].innerHTML = "Mercedes jest kiepski";
h3[1].innerHTML = "BMW jest dla wiesniackie";
h3[2].innerHTML = "Skoda jest kozak";

topSellers.replaceChild(topSellers.querySelector(`a:last-of-type`));

