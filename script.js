let openModalBtn = document.querySelector("#open-modal");
let closeModalBtn = document.querySelector("#close-modal");
let modalWindow = document.querySelector(".modal-overlay");

openModalBtn.addEventListener("click", () =>
  modalWindow.classList.add("show-modal")
);

closeModalBtn.addEventListener("click", () =>
  modalWindow.classList.remove("show-modal")
);
