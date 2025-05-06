const likeBtn = document.getElementById("like_icon");
const likeNum = document.getElementById("like_num");
const saveBtn = document.getElementById("save_icon");
const seeMoreBtn = document.getElementById("see_more_btn");
const content = document.getElementById("content");



function clickLikeBtn() {
    const likeImg = likeBtn.getAttribute("src");
    if (likeImg === "empty_heart.png") {
        likeBtn.setAttribute("src","red_heart.svg");
        likeNum.innerText = parseInt(likeNum.textContent) + 1;
    } else {
        likeBtn.setAttribute("src","empty_heart.png");
        likeNum.innerText = parseInt(likeNum.textContent) - 1;
    }
}

function clickSaveBtn() {
    const saveImg = saveBtn.getAttribute("src");
    if(saveImg === "filled_save.svg") {
        saveBtn.setAttribute("src","empty_save.png");
    } else {
        saveBtn.setAttribute("src","filled_save.svg");
    }

}

function seeMoreContent() {
    const summaryContent = `<strong>ss_chae__ </strong>망원동의 귀여운 음식점 ‘토마토코엔🍅’ 메뉴는 바로!!`;
    const fullContent = `<strong>ss_chae__ </strong>망원동의 귀여운 음식점 ‘토마토코엔🍅’ 메뉴는 바로!!<br>
                                🍛 오므라이스<br>
                                😸 냥박스테이크<br>
                                🍝 나폴리탄 파스타<br>
                                🍗 치킨 가라아게 카레라이스`;
    if(seeMoreBtn.innerHTML === "...더보기") {
        content.innerHTML = fullContent;
        seeMoreBtn.innerText = "접기";
    } 
    
    else {
        content.innerHTML = summaryContent;
        seeMoreBtn.innerText = "...더보기";
    }
    

}

likeBtn.addEventListener('click', clickLikeBtn);
saveBtn.addEventListener('click', clickSaveBtn);
seeMoreBtn.addEventListener('click', seeMoreContent);