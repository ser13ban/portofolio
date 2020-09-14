const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  document.querySelectorAll(".inverted").forEach((result) => {
    result.classList.toggle("invert");
  });
});

// ONE BUG:
// you have to fix the problem wiht the images, they are inverted.
