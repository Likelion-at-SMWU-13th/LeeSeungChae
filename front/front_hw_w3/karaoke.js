


async function fetchSongs() {
    try {
        const keyword = ;
        const response = await fetch(`https://api.manana.kr/karaoke/singer/${keyword}.json`);
        const songs = await response.json();
        const songList = songs.filter((song) => song.singer === keyword);
        
        songList.forEach((song) => {
            const songBox = document.createElement("div");
            songBox.className = "songBox";

            songBox.innerHTML = `
            <h1 class="title">제목: ${song.title}</h1>
            <h2 class="num">번호: ${song.no}</h2>
            <p class="singer">가수: ${song.singer}</p>
            <p class="composer">작사|작곡: ${song.composer},${song.lyricist}</p>
            <p class="release">발매일: ${song.release}</p>
            `;
            song-container.appendChild(songBox);
        })
    } catch (error) {
        console.error("에러 발생:", error);
    }
}

fetchSongs();