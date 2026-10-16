
const hamburger = document.getElementById("hamburger");
const tabellMeny = document.getElementById("tabellMeny");

hamburger.addEventListener("click", function () {
  tabellMeny.classList.toggle("active");

  const isOpen = tabellMeny.classList.contains("active");

  hamburger.setAttribute("aria-expanded", isOpen);
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Stäng tabellmenyn" : "Öppna tabellmenyn"
  );
});
