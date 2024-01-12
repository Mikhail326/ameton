const referencesItems = document.querySelectorAll(".reference__item .item__title");
const slider = document.querySelector(".questions__list");
const sliderArrows = document.querySelectorAll(".slider-arrow");
const sliderFirstItem = slider.querySelectorAll(".questions__item")[0];

const accordionToggle = (e) => {
  e.currentTarget.classList.toggle("active");
  const item = e.currentTarget.nextElementSibling;
  if (e.currentTarget.classList.contains("active")) {
    item.style.maxHeight = item.scrollHeight + "px";
  } else {
    item.style.maxHeight = 0;
  }
};

const showHideArrow = () => {
  let scrollWidth = slider.scrollWidth - slider.clientWidth;
  sliderArrows[0].style.display = slider.scrollLeft == 0 ? "none" : "block";
  sliderArrows[1].style.display = slider.scrollLeft == scrollWidth ? "none" : "block";
};

referencesItems.forEach((r) => {
  r.addEventListener("click", accordionToggle);
});

sliderArrows.forEach((a) => {
  a.addEventListener("click", () => {
    let sliderFirstItemWidth = sliderFirstItem.clientWidth + 24;
    slider.scrollLeft +=
      a.id == "left" ? -sliderFirstItemWidth : sliderFirstItemWidth;
    showHideArrow();
  });
});
