var imgClicked = false;

function staggerSubNav(navItem) {
	var subNavTween = new TweenMax.staggerFromTo(navItem, 0.5, {x: '32px', autoAlpha: 0, ease: Power4.easeOut},{x: '0px', autoAlpha: 1}, 0.1);
}

$(document).on('click', function(event) {
	if (event.target.className == 'breadboard') {
		if (!imgClicked) {
			imgClicked = true;
			TweenMax.to(event.target, 1, {zIndex: 1000, maxWidth: '80vw', maxHeight: '80vh', position: 'fixed', left: '50%', top: '50%', x: '-50%', y: '-50%', boxShadow: '0px 0px 0px 9000px rgba(0,0,0,0.8)', background: 'rgba(0,0,0,0.8)', ease: Power4.easeOut });
		} else {
			imgClicked = false;
			TweenMax.to('.breadboard', 0.5, {zIndex: 'initial', maxWidth: '128px', maxHeight: 'initial', position: 'absolute', left: 'initial', top: 'initial', x: '0%', y: '0%', boxShadow: '0px 0px 0px 9000px rgba(0,0,0,0)', background: 'rgba(0,0,0,0)' });
		}
	} else {
		if (imgClicked) {
			imgClicked = false;
			TweenMax.to('.breadboard', 0.5, {zIndex: 'initial', maxWidth: '128px', maxHeight: 'initial', position: 'absolute', left: 'initial', top: 'initial', x: '0%', y: '0%', boxShadow: '0px 0px 0px 9000px rgba(0,0,0,0)', background: 'rgba(0,0,0,0)' });
		}
	}
});

$('nav > ul > li').on('mouseenter', function() {
	staggerSubNav($(this).find('li'));
});

$( "code:contains('greenLedPin')" ).css( "color", "green" );
$( "code:contains('yellowLedPin')" ).css( "color", "yellow" );
$( "code:contains('redLedPin')" ).css( "color", "red" );