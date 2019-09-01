// 2.2
// Na stronie 2 brakuje kilku kluczowych elementów. Uzupelni je korzystajac z JavaScript:
// 1. przyporzadkuj kazdemu artykulowi obrazek odpowiadajacy jego marce:
document.querySelectorAll("figure img")[0].setAttribute("src", "indeks.png")
document.querySelectorAll("figure img")[1].setAttribute("src", "bmw-logo.png")
document.querySelectorAll("figure img")[2].setAttribute("src", "indeks.png")

// 2. naglowek powinien miec swoj unikalny obrazek
var headImg = document.createElement("img")
headImg.setAttribute("src", "panorama.jpg");

document.querySelector("div.wrapper").insertBefore(headImg, document.querySelector("div.wrapper").children[0]);

// 3. strona powinna miec tematyczne tlo
// 4. elementy z menu bocznego TypSellers powinny po kliknieciu przekierowywać strone producenta danej marki
// 5. elementy menu powinny się wyswietlać w jednej linii. popraw kod dopisujac do listy odpowiednia klase zdefiniowana w css
var elementMenu = document.querySelector("header nav ul");
elementMenu.setAttribute("class", "menu-items");

