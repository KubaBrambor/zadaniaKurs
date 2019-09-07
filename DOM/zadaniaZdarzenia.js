// 1. Utworz skrypt, w ktorym wyszukasz kolekcje wszystkich elementów z sidemenu TopSellers.
// a) Umiesc skrypt sekcji header
// b) Umiesc skrypt przed samym zamknieciem elementu </body>

// Co spowodowalo zmiane w zachowaniu skryptu? Jaki jest inny sposob zapewnienia poprawnego dzialania skryptu? Zakoduj je!

// 2. Napisz skrypt, ktory działa w nastepujacy sposób:
// a) Po kliknieciu w tytuł kazdego artykułu, tlo artykułu zmieni się na wybrany przez ciebie kolor.
// b) Po kliknieciu w inny tytul, tlo aktualnego artykulu zmieni sie na wybrany przez ciebie kolor, a tlo wszystkich pozostalych artykulow wroci do swojej domyslnej wartosci

// [osobny html]
// 3. Utworz stronę html, z elementem DIV o wymiarach 200x200px. Do strony dołącz skrypt z nastepujaca funkcjonalnoscia:
// Po kliknieciu w DIV jego kolor zmieni sie w nastepujacy sposob:
// 1) jedno klikniecie : zolty
// 2) drugie klikniecia: zielony
// 3) trzecie klikniecie: niebieski
// 4) czwarte klikniecie: znowu żółty 
// itd.

// Tło musi zmieniać się w kółko na jeden z wybranych kolor. Wskazowka: uzyj zmiennej przechowujacej aktualna liczbe klikniec

// 4. W sidemenu dodaj  przycisk. Po kliknieciu w ten przycisk z listy TopSellers powinien zostac usuniety ostatni element listy.

// 5. Dodaj pole input i nowy przycisk w sidemenu. Po kliknieciu w przycisk do listy powinna zostac dodana nowa pozycja o nazwie wpisanej w inpucie. Nie wykonuj operacji, jesli input jest pusty


1.

var getAside = document.querySelectorAll("aside");
var topSellers = aside[0].childNodes[1].children;

2.
var getArticle = document.getElementsByTagName("article");
var colorArr = ["black", "red", "blue", "yellow", "pink", "brown", "purple"];
function changeColor(event){
	var color = colorArr[Math.floor(Math.random()*colorArr.length)];
	if(event.target.localName == "hgroup" || event.target.localName == "h2" || event.target.localName == "h3"){
		for(let i=0; i<getArticle.length; i++){
		getArticle[i].style.background="#f55b5b";
	}
	event.currentTarget.style.background = color;
	}
}

for(let i=0; i<getArticle.length; i++){
getArticle[i].addEventListener("click", changeColor);
}	

3.
var count = 0;
var getBox = document.getElementById("box");
var getP = document.getElementById("textCount");
var colorArr = ["yellow", "green", "blue", "yellow"];
function changeColor(event){
	count++
	getP.innerHTML = count;
	var color = colorArr[count-1];
	event.target.style.background = color;
	if(count === 4){
		count = 0;
	}
}
getBox.addEventListener("click", changeColor);

4.
