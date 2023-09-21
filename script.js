let openModalBtn = document.querySelector("#open-modal");
let closeModalBtn = document.querySelector("#close-modal");
let modalWindow = document.querySelector(".modal-overlay");

openModalBtn.addEventListener(
  "click",
  () => (modalWindow.style.visibility = "visible")
);

closeModalBtn.addEventListener(
  "click",
  () => (modalWindow.style.visibility = "hidden")
);
