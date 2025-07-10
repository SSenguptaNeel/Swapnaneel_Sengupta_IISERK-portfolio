window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".with-bg");

  if (aboutSection) {
    const scrollTop = window.scrollY;
    const maxScroll = 300;

    const blur = Math.max(4 - scrollTop / 80, 0.5); // From 4px to 0.5px
    const opacity = Math.min(0.5 + scrollTop / 1000, 0.9); // From 0.5 to 0.9

    aboutSection.style.setProperty('--scroll-blur', `${blur}px`);
    aboutSection.style.setProperty('--scroll-opacity', `${opacity}`);
  }
});
