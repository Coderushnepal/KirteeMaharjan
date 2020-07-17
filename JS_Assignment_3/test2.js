const btn = document.getElementById('btn');
const frame = document.getElementById('frame');
// console.log(frame);
const height = frame.clientHeight;
const width = frame.clientWidth;
const margin = window.innerHeight - height;
console.log(height, width, margin);
btn.onclick = function(e) {
	var newCircle = document.createElement('div');
	newCircle.classList.add('circle');
	newCircle.style.top = margin + Math.random() * height + 'px';
	newCircle.style.left = Math.random() * width + 'px';
	frame.appendChild(newCircle);
};
