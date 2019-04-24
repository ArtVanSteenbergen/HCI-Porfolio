function staggerSubNav(navItem) {
	var subNavTween = new TweenMax.staggerFromTo(navItem, 0.5, {x: '32px', autoAlpha: 0, ease: Power4.easeOut},{x: '0px', autoAlpha: 1}, 0.1);
}
$('nav > ul > li').on('mouseenter', function() {
	staggerSubNav($(this).find('li'));
});