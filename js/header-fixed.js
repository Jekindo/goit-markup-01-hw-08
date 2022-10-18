console.log(
	document.querySelector(".page-header--fixed").getBoundingClientRect().height
);

const { height: HeaderHeight } = document
	.querySelector(".page-header--fixed")
	.getBoundingClientRect();

document.body.style.paddingTop = `${HeaderHeight}px`;