const redLines = document.querySelectorAll("#redLineProzent");
const prozents = document.querySelectorAll("#prozent");
const date = document.querySelectorAll("#datum");
const bigPics = document.querySelectorAll(".bigPic");

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

window.addEventListener("scroll", function () {
	const p1Punkt1 = document.querySelector("#punkt1");
	const p1Punkt2 = document.querySelector("#punkt2");
	const p1Punkt3 = document.querySelector("#punkt3");
	const p1Punkt4 = document.querySelector("#punkt4");

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
const p1PicsSlides = document.querySelectorAll("#pic");
const p1SlideButtons = document.querySelectorAll("#punkte");

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

const heute = new Date();

const workingDatum = new Date("2025-01-01");

const diffinMiliSec = heute - workingDatum;

const diffDays = Math.ceil(diffinMiliSec / (1000 * 60 * 60 * 24));

date.forEach((el) => {
	el.innerText = `${diffDays} days ago`;
});
