let buttons = document.querySelectorAll("[type=button]");
buttons.forEach(function (e) {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});
