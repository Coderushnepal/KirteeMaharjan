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
var i = 0;

//------ getting heoight of window and frame ------
const frameHeight = container.clientHeight;
const frameWidth = container.clientWidth;
const margin = window.innerHeight - frameHeight;

//------ generate ball on click ---------------------
btn.onclick = function() {
	var newCircle = document.createElement('div');
	createBall(newCircle);
	newCircle.classList.add('pointer');
	newCircle.id = i;
	var ballHeight = parseInt(newCircle.style.height);
	var ballWidth = parseInt(newCircle.style.width);

	newCircle.style.top = Math.abs(Math.random() * (frameHeight - ballHeight)) + 'px';
	newCircle.style.left = Math.abs(Math.random() * (frameWidth - ballWidth)) + 'px';

	newCircle.addEventListener('click', function() {
		setInterval(
			(function() {
				var ball = newCircle;
				var dir = direction;
				return function() {
					var currentTop = ball.style.top;
					var nextTop = parseInt(currentTop) + 15 * dir;
					ball.style.top = nextTop + 'px';
					if (nextTop >= frameHeight - ballHeight || nextTop <= 0) {
						dir *= -1;
					}
				};
			})(),
			1000 / 60
		);
	});

	container.appendChild(newCircle);
	i++;
};
