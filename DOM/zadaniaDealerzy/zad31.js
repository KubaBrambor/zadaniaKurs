// 3.1
// Korzystająć z JavaScript:


// 1. dodaj kolejną pozycję do menu TopSellers na końcu listy.
var topSellers = document.querySelector("section.popular-recipes");
var newPosition = document.createElement("a");
var newPositionText = newPosition.innerText = "pozycja1";
topSellers.appendChild(newPositionText);

// 2. dodaj kolejną pozycję do menu TopSellers na 2. miejscu listy
var a2 = topSellers.querySelector("a:nth-of-type(2)");
topSellers.insertBefore(newPosition, a2);

// 3. podmien pozycje dealerzy w menu głównym (nav)  na 'kontakt'
menuNav = document.querySelector("nav ul");
newLi = document.createElement("li");
newLi.innerText = "kontakt";
menuNav.replaceChild(newLi, menuNav.children[3]);

// 4. podmien slogan pod każdym tytułem artykułu na wybraną przez siebie treść.
var h3 = document.getElementsByTagName("h3");
h3[0].innerHTML = "Mercedes jest kiepski";
h3[1].innerHTML = "BMW jest dla wiesniackie";
h3[2].innerHTML = "Skoda jest kozak";

// 5. usun ostatni element TopSellers.
topSellers.removeChild(topSellers.lastElementChild);

// 6. usun drugi artykuł
sectionArticle = document.getElementsByClassName("articles");
sectionArticle[0].removeChild(sectionArticle[0].children[1])