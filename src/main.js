const redLines = document.querySelectorAll("#redLineProzent");
const prozents = document.querySelectorAll("#prozent");
const date = document.querySelectorAll("#datum");
const bigPics = document.querySelectorAll(".bigPic");

const p1PicsSlides = document.querySelectorAll("#pic");
const p1SlideButtons = document.querySelectorAll("#punkte");

const allButn = document.querySelector(".all");
const workIdeasButn = document.querySelector(".work");
const mockupButn = document.querySelector(".mockUp");
const designBtn = document.querySelector(".psd");
const logoButn = document.querySelector(".logoB");
const presentationButn = document.querySelector(".present");
const iconsButn = document.querySelector(".icon");
const gridItems = document.querySelectorAll(".grid");

// hier big Pic slide automatically every 3 sec
let currentSlide = 0;
const showPics = () => {
	bigPics.forEach((slide, index) => {
		slide.classList.toggle("active", index === currentSlide);
	});
};
const goToNextPic = () => {
	// hier currentslite immer erhöhen und mit '%' wird nie die länder der bgpics überschrotten
	currentSlide = (currentSlide + 1) % bigPics.length;
};
const slideFunction = () => {
	showPics();
	goToNextPic();
};
// slidefunktion soll alle 4 sekunden ausgeführt werden
setInterval(slideFunction, 3000);
// am Anfang gleich die erste Funktion starten, sonnst muss 4 sec gewartet werden
slideFunction();

// hier scroll function, mit Procenten
window.addEventListener("scroll", function () {
	// const p1Punkt1 = document.querySelector("#punkt1");
	// const p1Punkt2 = document.querySelector("#punkt2");
	// const p1Punkt3 = document.querySelector("#punkt3");
	// const p1Punkt4 = document.querySelector("#punkt4");

	// hier balken und prozente beim scrollen anpassen
	const scrollUp = window.scrollY; // aktuelle scrollposition
	const windowHohe = document.documentElement.scrollHeight - window.innerHeight;
	const scrollProzentuall = Math.min(
		100,
		Math.max(0, (scrollUp / windowHohe) * 100),
	);

	redLines.forEach((redLin, index) => {
		redLin.style.width = `${scrollProzentuall}%`;
		prozents[index].innerText = `${Math.round(scrollProzentuall)}%`;
	});
});

// slide Page 1 Pics in the middle
document.addEventListener("DOMContentLoaded", () => {
	function zeigPic(index) {
		// Entferne "active" von allen Bildern
		p1PicsSlides.forEach((el) => el.classList.remove("active"));

		// Füge "active" zum Bild mit dem gegebenen Index hinzu
		p1PicsSlides[index].classList.add("active");
	}

	// Event-Listener für jeden Button hinzufügen
	p1SlideButtons.forEach((button, index) => {
		button.addEventListener("click", () => zeigPic(index));
	});

	// Zeige das erste Bild beim Laden der Seite
	zeigPic(0);
});

// ...
const slideBtns = document.querySelectorAll(".vierEkickePunkte");
const slideInhalts = document.querySelectorAll("#slideFooter");

document.addEventListener("DOMContentLoaded", () => {
	function zeigslide(index) {
		// Entferne "active" von allen Bildern
		slideInhalts.forEach((el) => el.classList.remove("active"));

		// Füge "active" zum Bild mit dem gegebenen Index hinzu
		slideInhalts[index].classList.add("active");
	}

	// Event-Listener für jeden Button hinzufügen
	slideBtns.forEach((button, index) => {
		button.addEventListener("click", () => zeigslide(index));
	});

	// Zeige das erste Bild beim Laden der Seite
	zeigslide(0);
});

// ab hier Last Project
const heute = new Date();

const workingDatum = new Date("2025-01-01");

const diffinMiliSec = heute - workingDatum;

const diffDays = Math.ceil(diffinMiliSec / (1000 * 60 * 60 * 24));

date.forEach((el) => {
	el.innerText = `${diffDays} days ago`;
});

// document.addEventListener("DOMContentLoaded", () => {
// 	function zeigInfoSlide(index) {
// 		slideInhalts.forEach((slide) => slide.classList.remove("active"));

// 		slideInhalts[index].classList.add("active");

// 		slideBtns.forEach((button, index) => {
// 			button.addEventListener("click", () => zeigInfoSlide(index));
// 		});
// 		zeigInfoSlide(0);
// 	}
// });

// hier die funktion zum verwenden
function filterGrid(category) {
	gridItems.forEach((pic) => {
		if (pic.classList.contains(category)) {
			pic.style.opacity = "1";
		} else {
			pic.style.opacity = "0.1";
		}
	});
}

// hier beliebieg verwenden
workIdeasButn.addEventListener("click", () => filterGrid("workIdeas"));
mockupButn.addEventListener("click", () => filterGrid("mockup"));
designBtn.addEventListener("click", () => filterGrid("design"));
logoButn.addEventListener("click", () => filterGrid("logo"));
presentationButn.addEventListener("click", () => filterGrid("presentation"));
iconsButn.addEventListener("click", () => filterGrid("icons"));
allButn.addEventListener("click", () => filterGrid("alle"));
