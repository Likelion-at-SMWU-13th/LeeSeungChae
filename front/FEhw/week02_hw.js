// DOM 요소 선택
const moreBtn = document.querySelector(".more");
const shortText = document.querySelector(".text-short");
const fullText = document.querySelector(".text-full");

const likeBtn = document.querySelector(".like-icon");
const likeCount = document.querySelector(".like-count");

const bookmarkBtn = document.querySelector(".bookmark");

// 더보기 기능
moreBtn.addEventListener("click", () => {
  fullText.style.display = "inline";
  moreBtn.style.display = "none";
});

// 좋아요
let liked = false;
let count = parseInt(likeCount.textContent);

likeBtn.addEventListener("click", () => {
  liked = !liked;

  if (liked) {
    likeBtn.src = "red_heart.svg";
    count++;
  } else {
    likeBtn.src = "heart.svg";
    count--;
  }

  likeCount.textContent = count;
});

// 북마크
let marked = false;

bookmarkBtn.addEventListener("click", () => {
  marked = !marked;

  if (marked) {
    bookmarkBtn.src = "black_bookmark.svg";
  } else {
    bookmarkBtn.src = "bookmark.svg";
  }
});
