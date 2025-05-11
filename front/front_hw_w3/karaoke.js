//현재 날짜 표시 함수
function currentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth()+1; //month는 1을 꼭 더해주기
    const day = currentDate.getDate();

    const dateBox = document.getElementById("date-box");
    const date = `${String(year).padStart(2,"0")}년 ${String(month).padStart(2,"0")}월 ${String(day).padStart(2,"0")}일`; //2자릿수로 만들고, 앞은 0으로 채우기


    dateBox.innerHTML = `<span>${date}</span>`;
}

//타이머 함수
const timer = setInterval(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const timerBox = document.getElementById("timer-box");
    const time = `${String(hours).padStart(2,"0")}시 ${String(minutes).padStart(2,"0")}분 ${String(seconds).padStart(2,"0")}초`; //2자릿수로 만들고, 앞은 0으로 채우기

    timerBox.innerHTML = `<span>${time}</span>`;
},1000); //1초 간격으로 업데이트

const searchForm = document.getElementById("search-form");
    
//노래 불러오기 함수
async function fetchSongs(event) {
    event.preventDefault(); //폼 제출 방지
    const keyword = document.getElementById("search-bar").value.trim(); //공백 제거하여 정확한 검색어 전달하기
    const songContainer = document.getElementById("song-container");
    songContainer.innerHTML = ""; //이전 노래 목록 결과 비워주기
    const response = await fetch(`https://api.manana.kr/karaoke/singer/${keyword}.json`); //keyword에 따라 가져오는 데이터 달라짐
    const songs = await response.json(); //받아온 데이터 JSON으로 바꿀 때까지 대기
    try {
        if(songs.length === 0) { //검색어에 맞는 노래가 없을 시
            alert("검색 결과가 없습니다!"); //'검색 결과 없음' 메시지 출력
        } else {
            songs.forEach((song) => { //모든 요소를 순회
                const songBox = document.createElement("div");
                songBox.className = "songBox";
    
                songBox.innerHTML = `
                    <div class="song-header">
                        <span id="title">${song.title}</span>
                        <span id="num">${song.no}</span>
                    </div>
                    <span id="singer">${song.singer}</span>
                    <div class="song-detail">
                        <p id="composer">작곡: ${song.composer},${song.lyricist}</p>
                        <p id="release">발매일: ${song.release}</p>
                    </div>
                `;
                songContainer.appendChild(songBox);
            });
        }

    } catch (error) { //fetch 요청 실패 시
        console.error("에러 발생:", error);
    }
}

currentDate(); //'현재 날짜 표시' 함수 호출
searchForm.addEventListener("submit", fetchSongs); //검색어 입력하면 '노래 불러오기' 함수 호출