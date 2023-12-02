import { getUploads } from "./services/upload.service.js";

const uploadContainerEl = document.querySelector(".upload-container");

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
