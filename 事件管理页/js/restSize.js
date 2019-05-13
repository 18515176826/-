function resetScreenSize () {
	
	var init = function() {
		var _el = document.getElementById('app');
		var hScale = window.innerHeight / 1080;
		var wScale = window.innerWidth  / 1920;
//		console.log(window.innerHeight, window.innerWidth);
		var transformSize =  'transform:scaleX('+wScale+') scaleY('+hScale+'); -ms-transform:scaleX('+wScale+') scaleY('+hScale+');transform-origin:0 0; -ms-transform-origin:0 0;'
		_el.setAttribute('style', transformSize)		
		
	}
	var lazyFun;
	window.onresize = function() {
		clearTimeout(lazyFun);
		lazyFun = setTimeout(function() {
			init()
		}, 600)
	}
	init()
}

resetScreenSize();