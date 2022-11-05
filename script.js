const r = document.querySelector(":root");
const button = document.querySelector(".page-count");
const navList = document.querySelector(".nav__list");
const darkMood = document.querySelector(".dark-mood");
const iconDark = document.querySelector(".footer__contact-icon--dark");
const iconLight = document.querySelector(".footer__contact-icon--light");
const searchIconDark = document.querySelector(".search__icon--dark");
const searchIconLight = document.querySelector(".search__icon--light");

function myFunction_set(value, newValue) {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty(value, newValue);
}

function getStyle(value) {
  return getComputedStyle(r).getPropertyValue(value);
}

if (darkMood)
  darkMood.addEventListener("click", (e) => {
    e.preventDefault();

    //Change to Dark dcreen
    if (darkMood.classList.contains("light-mood")) {
      myFunction_set("--color-primary", "#090f46");
      myFunction_set("--color-white", "#fff");
      myFunction_set("--color-white-bg", "#efefef");
      myFunction_set("--color-gray", "#f7f8fd");
      myFunction_set("--color-black", "#010101");
      myFunction_set("--color-card-bg", "#f7f8fd");
      myFunction_set("--color-card-bg-light", "#f7f8fdeb");
      myFunction_set("--color-primary-text", "#090f46ad");
      myFunction_set("--color-nav-selected", "#eff0f1");

      darkMood.src = "./Images/Vector-light.png";
      darkMood.classList.remove("light-mood");

      iconLight.classList.remove("hidden");
      iconDark.classList.add("hidden");

      searchIconDark.classList.remove("hidden");
      searchIconLight.classList.add("hidden");
    }

    //Change to light screen
    else {
      myFunction_set("--color-primary", "#fff");
      myFunction_set("--color-white", "#000");
      myFunction_set("--color-white-bg", "#131111");
      myFunction_set("--color-gray", "#010101");
      myFunction_set("--color-black", "#010101");
      myFunction_set("--color-card-bg", "#000000a6");
      myFunction_set("--color-card-bg-light", "#000000a6");
      myFunction_set("--color-primary-text", "#fff");
      myFunction_set("--color-nav-selected", "#1d1d1d");

      darkMood.src = "./Images/akar-icons_sun-fill.png";
      darkMood.classList.add("light-mood");

      iconLight.classList.add("hidden");
      iconDark.classList.remove("hidden");

      searchIconDark.classList.add("hidden");
      searchIconLight.classList.remove("hidden");
    }
  });

button.addEventListener("click", (e) => {
  e.preventDefault();

  const clicked = e.target.classList.contains("page-count__btn");

  if (!clicked) return;

  button.querySelectorAll("button").forEach((btn) => {
    btn.classList.remove("page-count__btn--selected");
    e.target.classList.add("page-count__btn--selected");
  });
});

navList.addEventListener("click", (e) => {
  e.preventDefault();

  const clicked = e.target.classList.contains("nav__nav");

  if (!clicked || e.target.closest("nav__icon")) return;

  console.log(e.target);

  navList.querySelectorAll("li").forEach((el) => {
    el.classList.remove("nav__nav--selected");
    e.target.classList.add("nav__nav--selected");
  });
});
