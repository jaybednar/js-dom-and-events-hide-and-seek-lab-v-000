function getFirstSelector(selector) {
	document.querySelector(`${selector}`);
}

function nestedTarget() {
	document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
	const list = document.querySelectorAll('ul.ranked-list li')

	for (let i = 0; i < list.length; i++) {
		list[i].innerHTML = (parseInt(list[i].innerHTML) + 5).toString();
	}
}

function deepestChild() {
	const deepest = document.querySelector('div#grand-node div div div div')
	return deepest
}
