// Click any project image to see it larger. Esc, the × button, or a click closes it.
(function () {
  var dlg = document.getElementById("lightbox");
  if (!dlg || typeof dlg.showModal !== "function") return; // old browsers just open the image file
  var img = dlg.querySelector("img");
  var cap = dlg.querySelector(".lb-cap");

  document.addEventListener("click", function (e) {
    var a = e.target.closest("a.zoom");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    var thumb = a.querySelector("img");
    var fig = a.closest("figure");
    var fc = fig ? fig.querySelector("figcaption") : null;
    img.src = a.href;
    img.alt = thumb ? thumb.alt : "";
    cap.textContent = fc ? fc.textContent : "";
    dlg.showModal();
  });

  dlg.addEventListener("click", function (e) {
    if (e.target === dlg || e.target === img) dlg.close();
  });
  dlg.addEventListener("close", function () {
    img.removeAttribute("src");
  });
})();
