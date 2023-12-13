import { getUploads } from "./services/upload.service.js";

const navigationEl = document.querySelector(".navigation");
const viewmoreBtn = document.querySelector(".recent-viewmore");
const recentContainerEl = document.querySelector(".recent-container");

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
    navigationEl.classList.remove("nonstick-nav");
  } else {
    navigationEl.classList.remove("sticky-nav");
    navigationEl.classList.add("nonstick-nav");
  }
}

function recentViewmore(){
  for(let i = 0; i <= 8; i++){
    recentContainerEl.innerHTML += `<div class="recent-card">
                    <div class="recent-img">
                      <a class="recent-img-link" href="">
                        <img class="recent-img"
                          src="https://gamek.mediacdn.vn/zoom/310_200/133514250583805952/2023/12/9/avatar1702112830521-17021128308761221146901-0-38-280-486-crop-17021129700721075675624.jpg"
                        />
                      </a>
                    </div>

                    <div class="recent-card-text">
                      <div class="recent-title">
                        <a href="">
                          Nhá hàng nhân vật mới tại TGA, Honkai: Star Rail khiến
                          fan điêu đứng hơn cả việc giật giải
                        </a>
                      </div>
                      <div class="recent-subtitle">
                        Xuất hiện chỉ vỏn vẹn vài giây, thế nhưng nhân vật này
                        đã khiến cả cộng đồng Honkai: Star Rail phải mê mẩn.
                      </div>
                      <div class="recent-info">
                        <a href="" class="recent-author">Thế Anh</a> -
                        <span>Mobile & Social</span> <span>09/12/2023</span>
                        <span>18:32</span>
                      </div>
                    </div>
                  </div>`;
  }
}

viewmoreBtn.addEventListener("click", recentViewmore, false);
