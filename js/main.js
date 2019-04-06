let link = document.querySelector("#main__map__block__information--button");
let overlay = document.querySelector("#overlay");
let form = document.querySelector("#modal-window");
let close = document.querySelector("#close");

link.addEventListener("click", function() {
  event.preventDefault();
  overlay.classList.add("overlay-show");
  form.classList.add("modal-window-show");
});

close.addEventListener("click", function() {
  event.preventDefault();
  overlay.classList.remove("overlay-show");
  form.classList.remove("modal-window-show");
});

overlay.addEventListener("click", function() {
  event.preventDefault();
  overlay.classList.remove("overlay-show");
  form.classList.remove("modal-window-show");
});
