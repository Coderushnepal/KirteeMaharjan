function Position(width, height) {
	//get arguements (width, height) ie (maxy,maxx)-coordinates of the area where we want to plot
	var x = null;
	var y = null;

	this.generateXY = function() {
		this.x = Math.random() * height;
		this.y = Math.random() * width;
	};
}
