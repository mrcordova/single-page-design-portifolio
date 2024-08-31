const sliderImgs = document.querySelectorAll("img[data-img-num]");
const arrows = document.querySelectorAll(".arrows>button");

let currentImgId = 0;

sliderImgs[currentImgId].scrollIntoView({
  block: "center",
  inline: "center",
  behavior: "instant",
});
function scrollToImg(e) {
  currentImgId = (currentImgId + parseInt(e.currentTarget.dataset.value)) % 5;
  if (currentImgId < 0) currentImgId = 4;

  sliderImgs[currentImgId].scrollIntoView({
    block: "center",
    inline: "center",
    behavior: "instant",
  });
}

for (const arrow of arrows) {
  arrow.addEventListener("click", scrollToImg);
}
