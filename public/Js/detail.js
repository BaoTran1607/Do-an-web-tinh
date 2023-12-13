
const navigationEl = document.querySelector(".navigation");
const relatedEl = document.querySelector(".related-container");

const navScroll = navigationEl.offsetTop;
const relatedScroll = relatedEl.offsetTop;

window.onscroll = function () {
  checkStickyNav();
  checkStickyRelated();
};

function checkStickyNav() {
  if (window.scrollY >= navScroll) {
    navigationEl.classList.add("sticky-nav");
    navigationEl.classList.remove("nonstick-nav");
  } else {
    navigationEl.classList.remove("sticky-nav");
    navigationEl.classList.add("nonstick-nav");
  }
}

function checkStickyRelated(){
    if(window.scrollY >= relatedScroll) {
        relatedEl.classList.add("sticky-related");
    }else{
        relatedEl.classList.remove("sticky-related");
    }
}
