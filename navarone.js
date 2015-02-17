function parallax() {
	var prlx_layer_1 = document.getElementById('prlx_layer_1');
	var prlx_layer_2 = document.getElementById('prlx_layer_2');
	prlx_layer_1.style.top = (window.pageYOffset / 4)+'px';
	prlx_layer_2.style.top = -(window.pageYOffset / 8)+'px';
}
window.addEventListener("scroll", parallax, false);