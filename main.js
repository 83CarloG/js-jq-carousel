// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

$(document).ready(function ()	{

	$('.next').click(nextImg);
	//	Faccio l'inverso per prev
	$('.prev').click(prevImg);

	$('.nav i').click(
		function () {
			var circleIndex = $(this).index();
			// rimuovo a img e ai pallini la classe active
			$('img, .nav i').removeClass('active');
			// Calcolo l'index delle immagini
			var indexImg = circleIndex + 1;
			// Uso nth-child come selettore css (parte da 1) aggiungendo a img active corrispondente
			$('img:nth-child(' + indexImg + ')').addClass('active');
			// Aggiungo la classe active solo a this (ovvero al pallino cliccato)
			$(this).addClass('active');
		}
	);

	// uso delle frecce
	$(document).keydown(
		function (event) {
			if (event.which === 39) {
				nextImg();
			} else if (event.which === 37) {
				prevImg();
			}
		}
	);
});

// Funzioni

function nextImg () {
	// seleziono l'elemento con  la classe active
	var imgActive = $('img.active');
	// prendere imgActive e rimuovere la classe 'active'
	imgActive.removeClass('active');
	// seleziono i pallini
	var circleActive = $('i.active');
	circleActive.removeClass('active');

	// quando sei all'ultimo torna indietro e uso la classe di appoggio 'last'
	if (imgActive.hasClass('last')) {
		var nextImg = $('img.first');
		var nextCircle = $('i.first');
	} else {
		nextImg = imgActive.next();
		nextCircle = circleActive.next();
	}
	// devo applicarla all'elemento successivo - guarda la doc jQuery -> traversing
	nextImg.addClass('active');
	nextCircle.addClass('active');
}

function prevImg () {
	var imgActive = $('img.active');
	imgActive.removeClass('active');
	var circleActive = $('i.active');
	circleActive.removeClass('active');
	if (imgActive.hasClass('first')) {
		var nextImg = $('img.last');
		var nextCircle = $('i.last');
	} else {
		nextImg = imgActive.prev();
		nextCircle = circleActive.prev();
	}
	nextImg.addClass('active');
	nextCircle.addClass('active');
}
