
let girl = document.getElementById("girl");
let boy = document.getElementById("boy");


girl.addEventListener("mouseenter", () => {
  girl.classList.add("hidden");
  boy.classList.remove("hidden");
});

boy.addEventListener("mouseenter", () => {
  boy.classList.add("hidden");
  girl.classList.remove("hidden");
});
