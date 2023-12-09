import { getUploads } from "./services/upload.service.js";

const navigationEl = document.querySelector(".navigation");

const navScroll = navigationEl.offsetTop;

getUploads().then(function (uploads) {
  for (let item of uploads) {
    uploadContainerEl.innerHTML += `<div class="upload-card">
        <div class="card-img">
          <img src="${item.thumbnail}">
        </div>
        <div class="card-title">${item.title}</div>
        <div class="card-author">${item.author}</div>
      </div>`;
  }
});
window.onscroll = function(){checkStickyNav();}

function checkStickyNav(){
  if (window.scrollY >= navScroll) {
    navigationEl.classList.add("sticky-nav");
  } else {
    navigationEl.classList.remove("sticky-nav");
  }
}