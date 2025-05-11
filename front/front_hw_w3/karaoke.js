function currentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth()+1;
    const day = currentDate.getDate();

    const dateBox = document.getElementById("date-box");
    const date = `${String(year).padStart(2,"0")}년 ${String(month).padStart(2,"0")}월 ${String(day).padStart(2,"0")}일`;

    dateBox.innerHTML = `<span>${date}</span>`;
}

const timer = setInterval(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const timerBox = document.getElementById("timer-box");
    const time = `${String(hours).padStart(2,"0")}시 ${String(minutes).padStart(2,"0")}분 ${String(seconds).padStart(2,"0")}초`; //2자릿수로 만들고, 앞은 0으로 채우기

    timerBox.innerHTML = `
    <span id="time">${time}</span>
    `;
},1000); //1초 간격으로 업데이트

const searchForm = document.getElementById("search-form");
    
async function fetchSongs(event) {
    event.preventDefault(); //폼 제출 방지
    const keyword = document.getElementById("search-bar").value.trim();
    const songContainer = document.getElementById("song-container");
    try {
        const response = await fetch(`https://api.manana.kr/karaoke/singer/${keyword}.json`);
        const songs = await response.json();
        
        songs.forEach((song) => {
            const songBox = document.createElement("div");
            songBox.className = "songBox";

            songBox.innerHTML = `
                <div class="song-header">
                    <span class="title">${song.title}</span>
                    <span class="num">${song.no}</span>
                </div>
                <span class="singer">${song.singer}</span>
                <div class="song-detail">
                    <p class="composer">작곡: ${song.composer},${song.lyricist}</p>
                    <p class="release">발매일: ${song.release}</p>
                </div>
            `;
            songContainer.appendChild(songBox);
        })
    } catch (error) {
        console.error("에러 발생:", error);
    }
}

currentDate();
searchForm.addEventListener("submit", fetchSongs);