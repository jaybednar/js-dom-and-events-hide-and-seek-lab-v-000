function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
	const list = document.querySelectorAll('ul.ranked-list li')

	for (let i = 0; i < list.length; i++) {
		list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
	}
}

function deepestChild() {
	let node = document.querySelector('div#grand-node');
	let nextChild = node.children[0];
	
	while (nextChild) {
		node = nextChild;
		nextChild = node.children[0];
	}

	return node;
}
