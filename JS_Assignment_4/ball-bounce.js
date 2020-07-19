// ----- function to add style properties to a ball --------
var createBall = function(element) {
	element.style.height = '30px';
	element.style.width = '30px';
	element.style.borderRadius = '50%';
	element.style.backgroundColor = 'red';
	element.style.position = 'absolute';
	element.style.border = '1px solid';
};

//----------- accessing elements ----------
var btn = document.getElementById('btn');
var container = document.getElementById('frame');
var interval;
var direction = 1;

//------ getting heoight of window and frame ------
const frameHeight = container.clientHeight;
const frameWidth = container.clientWidth;
const margin = window.innerHeight - frameHeight;

//------ generate ball on click ---------------------
btn.onclick = function() {
	var newCircle = document.createElement('div');
	createBall(newCircle);
	var ballHeight = parseInt(newCircle.style.height);
	var ballWidth = parseInt(newCircle.style.width);
	console.log(ballHeight, ballWidth);
	newCircle.style.top = Math.abs(Math.random() * frameHeight - ballHeight) + 'px';
	newCircle.style.left = Math.abs(Math.random() * frameWidth - ballWidth) + 'px';
	container.appendChild(newCircle);

	newCircle.addEventListener('click', function() {
		interval = setInterval(function() {
			var currentTop = newCircle.style.top;
			var nextTop = parseInt(currentTop) + 10 * direction;
			console.log(nextTop, frameHeight);
			newCircle.style.top = nextTop + 'px';
			if (nextTop >= frameHeight - ballHeight || nextTop <= 0) {
				direction *= -1;
			}
		}, 1000 / 60);
	});
};
