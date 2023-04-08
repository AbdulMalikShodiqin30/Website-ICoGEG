function scrollNavHeader() {
  const nav = document.getElementById("nav");

  if (this.scrollY >= 50) {
    nav.classList.add("w-full", "mt-0", "rounded-none", "px-12");
    nav.classList.remove("w-[92vw]", "mt-4", "rounded-lg", "px-4");
  } else {
    nav.classList.add("w-[92vw]", "mt-4", "rounded-lg", "px-4");
    nav.classList.remove("w-full", "mt-0", "rounded-none", "px-12");
  }
}

window.addEventListener("scroll", scrollNavHeader);
