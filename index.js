document.querySelector('.btn-comenzar').addEventListener('click', function(){
	document.querySelector('.timeline').style.display='block';
	document.body.style.backgroundImage = 'none';
	document.querySelector('.conclusion').style.display='block';
	console.log("se está haciendo click");
});

document.querySelector('.btn-ocultar').addEventListener('click', function(){
	document.querySelector('.timeline').style.display='none';
	console.log("se está haciendo click");
});