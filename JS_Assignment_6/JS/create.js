function Ball(i) {
	var id = i;
	// var ball = null;
	var interval = null;
	this.isDeleteable = false;
	this.isDeleted = false;
	var that = this;

	this.create = function() {
		this.ball = document.createElement('div');
		this.ball.id = i;
		this.ball.style.borderRadius = '50%';
		this.ball.style.backgroundColor = colors[parseInt(Math.random() * colors.length)];
		this.ball.style.position = 'absolute';
		document.body.appendChild(this.ball);

		this.ball.addEventListener('click', function() {
			if (that.isDeleteable) {
				that.remove();
			}
		});
	};

	this.setDimension = function(width, height) {
		this.ball.style.width = width + 'px';
		this.ball.style.height = height + 'px';
	};

	this.getDimension = function() {
		return {
			h: parseInt(this.ball.style.height),
			w: parseInt(this.ball.style.width)
		};
	};

	this.setPosition = function(x, y) {
		this.ball.style.top = x + 'px';
		this.ball.style.left = y + 'px';
	};

	this.getPosition = function() {
		// console.log(this.ball.style.top);
		return {
			x: parseInt(this.ball.style.top),
			y: parseInt(this.ball.style.left)
		};
	};

	this.move = function() {
		this.isDeleteable = true;
		var rand = Math.random();
		this.interval = setInterval(() => {
			var currentTop = parseInt(that.ball.style.top);
			var nextTop = currentTop + (rand * 200) % 3 + 1;
			that.ball.style.top = nextTop + 'px';
		}, 1000 / 60);
	};

	this.remove = function() {
		// console.log(this.ball);
		document.body.removeChild(this.ball);
		clearInterval(this.interval);
		this.isDeleted = true;
	};
}
