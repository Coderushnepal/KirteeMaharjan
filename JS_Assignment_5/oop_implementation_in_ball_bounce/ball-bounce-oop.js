function Ball(x = 0, y = 0, w = 10, h = 10, container) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.ball = document.createElement('div');
	this.container = container;
	// this.direction = 1;
	var direction = 1;
	this.getX = function() {
		return this.x;
	};
	this.getY = function() {
		return this.y;
	};

	this.setX = function(xValue) {
		this.x = xValue;
	};
	this.setY = function(yValue) {
		this.y = yValue;
	};

	this.createBall = function() {
		ball = this.ball;
		ball.style.height = this.height + 'px';
		ball.style.width = this.width + 'px';
		ball.style.borderRadius = '50%';
		ball.style.position = 'absolute';
		ball.style.top = this.x + 'px';
		ball.style.left = this.y + 'px';
		ball.style.backgroundColor = 'red';
		ball.style.cursor = 'pointer';
	};

	this.bounce = function() {
		frameHeight = this.container.clientHeight;
		frameWidth = this.container.clientWidth;
		setInterval(() => {
			var currentTop = this.ball.style.top;
			var nextTop = parseInt(currentTop) + 3 * direction;
			this.ball.style.top = nextTop + 'px';
			if (nextTop >= frameHeight - this.height || nextTop <= 0) {
				direction *= -1;
			}
		}, 1000 / 60);
	};

	this.ball.addEventListener('click', function() {
		this.style.backgroundColor = 'green';
		direction = 0;
	});

	// this.ball.addEventListener('mousedown', function() {
	// 	this.direction = 0;
	// 	// console.log('hellooooooooo ' + this.direction);
	// });
	// this.ball.addEventListener('mouseup', function() {
	// 	this.direction = 1;
	// });

	this.render = function() {
		this.container.appendChild(this.ball);
	};
}

const btn = document.getElementById('btn');
const frame = document.getElementById('frame');

// ------- creating instances --------------------
var newBalls = [];
btn.onclick = function() {
	for (i = 0; i < 7; i++) {
		var h = i * 10 + 7;
		var w = i * 10 + 7;
		var y = Math.random() * (frame.clientWidth - w);
		// x = Math.random() * (frame.clientWidth - h);
		newBalls[i] = new Ball(0, y, w, h, frame);
		console.log(newBalls[i].x, newBalls[i].y, newBalls[i].height);
		newBalls[i].createBall();
		newBalls[i].render();
		console.log(newBalls[i]);
		newBalls[i].bounce();
	}
};
