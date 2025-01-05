const redLines = document.querySelectorAll("#redLineProzent");
const prozents = document.querySelectorAll("#prozent");

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
