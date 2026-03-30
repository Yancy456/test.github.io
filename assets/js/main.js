(function () {
  "use strict";

  var navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  var sections = [];

  navLinks.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var el = document.getElementById(id);
    if (el) sections.push({ id: id, el: el, link: link });
  });

  function setActiveNav() {
    var y = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.el.offsetTop <= y) current = s;
    });
    navLinks.forEach(function (l) {
      l.classList.remove("is-active");
    });
    if (current && current.link) current.link.classList.add("is-active");
  }

  window.addEventListener("scroll", setActiveNav, { passive: true });
  setActiveNav();

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", "#" + id);
      }
    });
  });

  var copyBtn = document.getElementById("copy-bibtex");
  var bibPre = document.getElementById("bibtex-content");
  if (copyBtn && bibPre) {
    copyBtn.addEventListener("click", function () {
      var text = bibPre.textContent || "";
      navigator.clipboard.writeText(text).then(
        function () {
          var orig = copyBtn.textContent;
          copyBtn.textContent = "Copied!";
          setTimeout(function () {
            copyBtn.textContent = orig;
          }, 2000);
        },
        function () {
          copyBtn.textContent = "Failed";
        }
      );
    });
  }
})();
