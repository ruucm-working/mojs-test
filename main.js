var shape2 = new mojs.Shape({
	shape: 'circle',
	scale: { 0: 1 },
	duration: 1000,
	delay: 1000,
	easing: 'cubic.out',
	repeat: 999
}).play();
var square = document.querySelector('#js-square');
console.log('square : ');
console.log(square);
new mojs.Tween({
	repeat: 999,
	delay: 2000,
	onUpdate: function(progress) {
		square.style.transform = 'translateY(' + 200 * progress + 'px)';
	}
}).play();