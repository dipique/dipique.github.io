const btnSpin = document.getElementById('spin')
btnSpin.addEventListener('click', () => {
    var min = 1024;
	var max = 9999;

	var deg = Math.floor(Math.random() * (min - max)) + max;

	document.getElementById('box').style.transform = `rotate(${deg}deg)`;

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
	}, 5000);
})