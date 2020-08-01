const orgDatas = {
	0: {
		id: 1,
		title: `sed do eiusmod tempor incididunt ut labore`,
		description:
			'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> '
	},
	1: {
		id: 2,
		title: `Nulla aliquet enim tortor`,
		description:
			'<p>Nulla aliquet enim tortor at auctor urna nunc id. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit.</p><p>Donec enim diam vulputate ut. Imperdiet dui accumsan sit amet. Nisl nisi scelerisque eu ultrices vitae auctor. Sed blandit libero volutpat sed cras.</p><p>Netus et malesuada fames ac turpis egestas integer eget. Molestie nunc non blandit massa enim nec. Consectetur adipiscing elit duis tristique sollicitudin nibh. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Felis imperdiet proin fermentum leo vel. Sit amet risus nullam eget felis. Leo vel orci porta non pulvinar neque. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. </p><p>Netus et malesuada fames ac turpis egestas integer eget. Molestie nunc non blandit massa enim nec. Consectetur adipiscing elit duis tristique sollicitudin nibh. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Felis imperdiet proin fermentum leo vel. Sit amet risus nullam eget felis. Leo vel orci porta non pulvinar neque. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. </p>'
	},
	2: {
		id: 3,
		title: 'Diam sit amet nisl suscipit adipiscing bibendum est',
		description:
			'<p>Sapien eget mi proin sed libero enim. Orci dapibus ultrices in iaculis nunc sed. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Felis donec et odio pellentesque diam volutpat. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Massa tempor nec feugiat nisl pretium fusce.</p><p> Sit amet nisl purus in mollis nunc. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vivamus at augue eget arcu. Nulla porttitor massa id neque aliquam vestibulum. In metus vulputate eu scelerisque felis imperdiet. Integer feugiat scelerisque varius morbi. Ac tortor vitae purus faucibus ornare suspendisse. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Diam ut venenatis tellus in. Vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi.</p>'
	},
	3: {
		id: 4,
		title: `Nulla aliquet enim`,
		description: `<p>Vitae semper quis lectus nulla at volutpat diam ut venenatis. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Netus et malesuada fames ac turpis egestas integer eget. Molestie nunc non blandit massa enim nec. Consectetur adipiscing elit duis tristique</p><p>sollicitudin nibh. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Felis imperdiet proin fermentum leo vel.</p>`
	},
	4: {
		id: 5,
		// day: '',
		// date: '',
		title: `Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus`,
		description: `<p>Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Egestas tellus rutrum tellus pellentesque. Placerat duis ultricies lacus sed turpis tincidunt.</p><p>Mauris sit amet massa vitae tortor condimentum. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Quis ipsum suspendisse ultrices gravida. Leo a diam sollicitudin tempor id eu nisl nunc. Velit laoreet id donec ultrices tincidunt arcu non sodales. Purus non enim praesent elementum facilisis leo vel.</p><p>Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Convallis aenean et tortor at risus viverra adipiscing at. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. </p>`
	}
};

//converting into arrays of objects
const datas = Object.keys(orgDatas).map((key, index) => {
	return orgDatas[key];
});

//for each object creating elements in dom
datas.forEach(function(obj, index) {
	// console.log(obj);
	var article = new CreateArticle(index);
	article.idContainer(obj.id);
	article.contentContainer(obj.title, obj.description);
});

// only show 1st para and hide remaining
var contents = document.getElementsByClassName('description');
// console.log(contents);
var pTags = Array.from(contents).forEach(function(content, index) {
	var p = content.querySelectorAll('p');
	for (i = 1; i < p.length; i++) {
		p[i].style.display = 'none';
	}
});

// filter posts using only 1st para
var firstPara = document.querySelectorAll('.description p:first-child');
var searchField = document.querySelector('.search-bar input');
var searchButton = document.querySelector('.search-bar button');
// console.log(firstPara, searchField, searchButton);
var firstParaContents = Array.from(firstPara).map((p, index) => {
	return p.innerHTML;
});
console.log(firstParaContents);

searchField.addEventListener('keyup', function(e) {
	// console.log(e);
	// console.log(searchField.value);
	firstPara.forEach((p, index) => {
		p.innerHTML = firstParaContents[index];
	});
	search();
});

var articles = document.getElementsByTagName('article');
function search() {
	searchFor = searchField.value;
	firstPara.forEach((para, index) => {
		pContent = para.innerHTML;
		searchIn = pContent.toUpperCase();
		// console.log(searchFor, searchIn);
		// console.log(searchIn.indexOf(searchFor));
		position = searchIn.indexOf(searchFor.toUpperCase());
		// word = pContent.slice(position, searchFor.length);
		// word is always an empty string !!!!!!!! why?????
		// console.log(position, searchFor.length, word, pContent);
		if (position > -1) {
			articles[index].style.display = 'block';
			newContent =
				//instead of searchFor there should be word....BUT WORD IS ALWAYS EMPTY so it deletes the searched word!!!
				pContent.slice(0, position) + `<span>${searchFor}</span>` + pContent.slice(position + searchFor.length);
			console.log(newContent);
			para.innerHTML = newContent;
		} else {
			articles[index].style.display = 'none';
		}
	});
}
