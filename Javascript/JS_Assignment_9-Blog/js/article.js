var objectList = [];
var main = document.getElementById('main');
function CreateArticle(i) {
	this.id = i;

	this.articleDiv = document.createElement('article');
	main.appendChild(this.articleDiv);

	this.idContainer = function(val) {
		this.numDiv = document.createElement('div');
		this.numDiv.className = 'number';
		this.numDiv.id = i;
		this.numDiv.innerHTML = val;
		this.articleDiv.appendChild(this.numDiv);
	};

	this.contentContainer = function(title, description) {
		this.contentDivC = document.createElement('div');
		this.contentDivC.className = 'content';
		this.articleDiv.appendChild(this.contentDivC);

		this.titleDiv = document.createElement('div');
		this.titleDiv.className = 'title';
		this.titleDiv.innerHTML = title;
		this.contentDivC.appendChild(this.titleDiv);

		this.descriptionDiv = document.createElement('div');
		this.descriptionDiv.className = 'description';
		this.descriptionDiv.innerHTML = description;
		this.contentDivC.appendChild(this.descriptionDiv);
	};
}

// var article1 = new CreateArticle(1);
// article1.idContainer(1);
// article1.contentContainer(
// 	'this is a title',
// 	'this is a content description section this is a content description section'
// );
