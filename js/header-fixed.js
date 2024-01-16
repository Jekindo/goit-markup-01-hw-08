const { height: HeaderHeight } = document
  .querySelector(".page-header")
  .getBoundingClientRect();

document.body.style.paddingTop = `${HeaderHeight}px`;
