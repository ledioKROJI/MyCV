	function getRandomRGB() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
	
	function randomBackground() {
		document.body.style.backgroundColor = getRandomRGB();
	}
	
	function resetBackground() {
		document.body.style.backgroundColor = "#808080";
	}
