function Animate() {
	var balls = [];
	this.start = function(n) {
		for (i = 1; i <= n; i++) {
			var ball = new Ball(i);
			ball.create();
			var dimension = parseInt(Math.random() * 80);
			ball.setDimension(dimension, dimension);
			var position = new Position(window.innerWidth - dimension, 0);
			position.generateXY();
			ball.setPosition(position.x, position.y);
			balls.push(ball);
			// ball.move();
			var timeout = Math.random() * 10 * 1000;
			setTimeout(
				(function() {
					var currentBall = ball;
					return function() {
						currentBall.move();
					};
				})(),
				timeout
			);
		}
	};

	this.removeBall = function() {
		setInterval(function() {
			balls.forEach(function(ball, index) {
				if (!ball.isDeleted && ball.getPosition().x > window.innerHeight - ball.getDimension().h) {
					ball.remove();
				}
			});
		}, 1000 / 60);
	};
}
var animate = new Animate();
animate.start(400);
animate.removeBall();
