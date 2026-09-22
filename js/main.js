(function () {
  var btn = document.getElementById("menu-btn");
  var panel = document.getElementById("mobile-panel");
  if (!btn || !panel) return;
  btn.addEventListener("click", function () {
    var open = panel.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      panel.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
})();
