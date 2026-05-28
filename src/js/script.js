const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const currentYear = document.querySelector("#currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu?.classList.toggle("is-hidden");
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    mobileMenu.classList.add("is-hidden");
  });
});

document.querySelectorAll("[data-cta]").forEach((cta) => {
  cta.addEventListener("click", () => {
    window.dispatchEvent(
      new CustomEvent("landing:cta-click", {
        detail: {
          id: cta.dataset.cta,
          href: cta.getAttribute("href"),
          page: "dra-aurora-silva"
        }
      })
    );
  });
});

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
