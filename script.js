window.addEventListener("scroll", function () {
  const section = document.querySelector(".with-bg");
  const bg = section?.querySelector("::before"); // pseudo-elements can't be accessed directly

  const scrollY = window.scrollY;
  const maxScroll = 300; // adjust sensitivity
  const blur = Math.max(6 - scrollY / 50, 0); // blur from 6 to 0
  const opacity = Math.min(0.4 + scrollY / 600, 1); // opacity from 0.4 to 1

  // Instead, update via CSS variable or class
  section.style.setProperty("--scroll-blur", `${blur}px`);
  section.style.setProperty("--scroll-opacity", opacity);
});
