
const navigationEl = document.querySelector(".navigation");
const relatedEl = document.querySelector(".related-container");
const viewmoreBtn = document.querySelector(".recent-viewmore");
const recentContainerEl = document.querySelector(".recent-container");

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

function recentViewmore() {
  for (let i = 0; i <= 8; i++) {
    recentContainerEl.innerHTML += `<div class="recent-card">
                    <div class="recent-img">
                      <a class="recent-img-link" href="">
                        <img class="recent-img"
                          src="https://gamek.mediacdn.vn/zoom/310_200/133514250583805952/2023/12/21/vvv-1703152321167607292221-0-0-459-734-crop-17031523259371493211599.png"
                        />
                      </a>
                    </div>

                    <div class="recent-card-text">
                      <div class="recent-title">
                        <a href="">
                          Bom tấn của Capcom tiếp tục "bay màu" sau nhiều lần gắng gượng, có lẽ đã đến lúc kết thúc 
                          một huyền thoại
                        </a>
                      </div>
                      <div class="recent-subtitle">
                        Sau nhiều nỗ lực “vớt vát”, cuối cùng Capcom cũng đưa ra quyết định này.
                      </div>
                      <div class="recent-info">
                        <a href="" class="recent-author">Thế Anh</a> -
                        <span>Mobile & Social</span> <span>21/12/2023</span>
                        <span>20:03</span>
                      </div>
                    </div>
                  </div>`;
  }
}

viewmoreBtn.addEventListener("click", recentViewmore, false);
