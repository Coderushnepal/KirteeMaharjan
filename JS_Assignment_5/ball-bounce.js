// ----- function to add style properties to a ball --------
var createBall = function(element) {
	element.style.height = '20px';
	element.style.width = '20px';
	element.style.borderRadius = '50%';
	element.style.backgroundColor = 'red';
	element.style.position = 'absolute';
	element.style.border = '1px solid';
};

//----------- elements ------------
const btn = document.getElementById('btn');
const container = document.getElementById('frame');

var interval;
var direction = 1;
var i = 0;

//------ getting heoight of window and frame ------
const frameHeight = container.clientHeight;
const frameWidth = container.clientWidth;
const margin = window.innerHeight - frameHeight;

//------ generate ball on click ---------------------
var generateAndBounce = function() {
	for (var j = 1; j <= 4; j++) {
		var newBall = document.createElement('div');
		createBall(newBall);
		newBall.classList.add('pointer');
		newBall.id = i;
		var ballHeight = parseInt(newBall.style.height);
		var ballWidth = parseInt(newBall.style.width);

		newBall.style.top = Math.random() * (frameHeight - ballHeight) + 'px';
		newBall.style.left = Math.random() * (frameWidth - ballWidth) + 'px';

		setInterval(
			(function() {
				var ball = newBall;
				var dir = direction;
				return function() {
					var currentTop = ball.style.top;
					var nextTop = parseInt(currentTop) + ((i * 5) % 8 + 10) * dir;
					ball.style.top = nextTop + 'px';
					if (nextTop >= frameHeight - ballHeight || nextTop <= 0) {
						dir *= -1;
					}
				};
			})(),
			1000 / 60
		);
		container.appendChild(newBall);
		i++;
	}
};
//------ call function on click ----------------
btn.onclick = generateAndBounce;
