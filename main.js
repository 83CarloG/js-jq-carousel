// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

$(document).ready(function () {
	// Tutto il codice qui dentro viene eseguito solamente
	// quando il DOM è stato
	// caricato completamente, a prescindere da dove sia
	// posizionato nella pagina

	// evento quando premo l'immagine next (freccia dx dell'immagine)
	$('.next').click(clickNext);
	// evento quando premo l'immagine prev (freccia sx dell'immagine)
	$('.prev').click(clickPrev);
});



// funzione eseguita per girare immagini verso dx
function clickNext () {
	// salvo in una variabile l'immagine con classe active
	var imgActive = $('img.active');
	// rimuovo la classe per far sparire l'immagine attuale
	imgActive.removeClass('active');
	// ciclo if per capire in quale immagine sono, se sono nell'ultima foto farò apparire la prima dopo il click
	if (imgActive.hasClass('last') === true) {
		var nextImg = $('img.first');
	// altrimenti passo all'immagine successiva
	}	else {
		nextImg = imgActive.next();
	}
	// aggiungo la classe active e l'immagine compare
	nextImg.addClass('active');
}

// funzione eseguita per girare verso sx - vedi sopra
function clickPrev () {
	var imgActive = $('img.active');
	imgActive.removeClass('active');

	if (imgActive.hasClass('first')) {
		var nextImg = $('img.last');
	}	else {
		nextImg = imgActive.prev();
	}

	nextImg.addClass('active');
}

// freccia dx e sx

$(document).keyup(function (e) {
	if (e.keyCode === 37) {			// left
		var imgActive = $('img.active');
		imgActive.removeClass('active');
		if (imgActive.hasClass('last') === true) {
			var nextImg = $('img.first');
		}	else {
			nextImg = imgActive.next();
		}
		nextImg.addClass('active');
	}
}
);

$(document).keyup(function (e) {
	if (e.keyCode === 39) {			// right
		var imgActive = $('img.active');
		imgActive.removeClass('active');

		if (imgActive.hasClass('first')) {
			var nextImg = $('img.last');
		}	else {
			nextImg = imgActive.prev();
		}

		nextImg.addClass('active');
	}
}
);
