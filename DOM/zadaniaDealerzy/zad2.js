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
document.getElementsByTagName("body")[0].setAttribute("style", "background-image: url('background.jpg')");
// 4. elementy z menu bocznego TypSellers powinny po kliknieciu przekierowywać strone producenta danej marki
var asideMenu = document.querySelectorAll("aside section.popular-recipes a");
asideMenu[0].setAttribute("href", "https:\\www.lada.ru");
asideMenu[1].setAttribute("href", "https:\\www.audi.com");
asideMenu[2].setAttribute("href", "https:\\www.skoda-auto.com");
// 5. elementy menu powinny się wyswietlać w jednej linii. popraw kod dopisujac do listy odpowiednia klase zdefiniowana w css
var elementMenu = document.querySelector("header nav ul");
elementMenu.setAttribute("class", "menu-items");

