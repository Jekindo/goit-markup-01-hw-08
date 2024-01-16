const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  backdrop: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", onModalOpen);
refs.closeModalBtn.addEventListener("click", onModalClose);
refs.backdrop.addEventListener("click", onBackDropClick);

function onModalOpen() {
  window.addEventListener("keydown", onEscapeKeypress);
  document.body.classList.add("modal-open");
  refs.backdrop.classList.remove("backdrop--hidden");
}

function onModalClose() {
  window.removeEventListener("keydown", onEscapeKeypress);
  document.body.classList.remove("modal-open");
  refs.backdrop.classList.add("backdrop--hidden");
}

function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onModalClose();
  }
}

function onEscapeKeypress(event) {
  if (event.code === "Escape") {
    onModalClose();
  }
}
