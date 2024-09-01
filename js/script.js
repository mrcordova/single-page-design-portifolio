const sliderImgs = document.querySelectorAll("img[data-img-num]");
const arrows = document.querySelectorAll(".arrows>button");

let currentImgId = 0;
const TOTAl_NUM_IMGS = 5;

sliderImgs[currentImgId].scrollIntoView({
  block: "center",
  inline: "center",
});

function scrollToImg(e) {
  currentImgId =
    (currentImgId + parseInt(e.currentTarget.dataset.value)) % TOTAl_NUM_IMGS;
  if (currentImgId < 0) currentImgId = TOTAl_NUM_IMGS - 1;

  sliderImgs[currentImgId].scrollIntoView({
    block: "center",
    inline: "center",
  });
}

for (const arrow of arrows) {
  arrow.addEventListener("click", scrollToImg);
}
