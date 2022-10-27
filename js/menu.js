// (() => {
// 	const openMenuBtn = document.querySelector("[data-menu-open]");
// 	const closeMenuBtn = document.querySelector("[data-menu-close]");
// 	const mobileMenuRef = document.querySelector("[data-menu]");
//   
// 	menuBtnRef.addEventListener("click", () => {
// 	  const expanded =
// 		menuBtnRef.getAttribute("aria-expanded") === "true" || false;
//   
// 	  menuBtnRef.classList.toggle("menu-button--open");
// 	  menuBtnRef.setAttribute("aria-expanded", !expanded);
//   
// 	  mobileMenuRef.classList.toggle("mobile-menu--open");
// 	});
//   })();

(() => {
	const refs = {
	  openMenuBtn: document.querySelector("[data-menu-open]"),
	  closeMenuBtn: document.querySelector("[data-menu-close]"),
	  menu: document.querySelector("[data-menu]"),
	};
  
	refs.openMenuBtn.addEventListener("click", toggleMenu);
	refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
	function toggleMenu() {
	  refs.menu.classList.toggle("mobile-menu--hidden");
	  document.body.classList.toggle("modal-open");
	}
  })();
