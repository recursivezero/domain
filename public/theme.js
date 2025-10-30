(function () {
  const savedTheme = localStorage.getItem("theme");
  console.log("Saved theme:", savedTheme);
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
})();
