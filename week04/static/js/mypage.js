const buttons = document.querySelectorAll(".delete-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.remove();
  });
});