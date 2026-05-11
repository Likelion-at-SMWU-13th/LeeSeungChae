const movies = [
  { title: "만약에 우리", rating: 8.83, genre: "로맨스", isAdult: false },
  { title: "왕과 사는 남자", rating: 8.87, genre: "드라마", isAdult: false },
  { title: "야당", rating: 8.55, genre: "범죄", isAdult: true },
  {
    title: "악마는 프라다를 입는다2",
    rating: 9.14,
    genre: "드라마",
    isAdult: false,
  },
  { title: "서브스턴스", rating: 8.51, genre: "스릴러", isAdult: true },
  { title: "프로젝트 헤일메리", rating: 9.21, genre: "SF", isAdult: false },
  { title: "짱구", rating: 8.08, genre: "드라마", isAdult: false },
  { title: "살목지", rating: 8.35, genre: "공포", isAdult: false },
];

// 1. forEach: 각 영화의 제목을 콘솔에 바로 출력
movies.forEach((movie) => {
  console.log("영화 제목: ", movie.title);
});

// 2. map: 영화 제목과 장르를 추출해 '새로운' 객체 배열 만들기
const titleAndGenre = movies.map((movie) => ({
  title: movie.title,
  genre: movie.genre,
}));

console.log("제목+장르만 담긴 배열: ", titleAndGenre);

// 3. filter: 평점이 9점 이상인 영화만 걸러내기
const highRated = movies.filter((movie) => {
  return movie.rating >= 9;
});

console.log("평점 높은 영화 목록: ", highRated);

// 4. find: 평점이 9점 이상인 첫 번째 영화 찾기
const highRatedMovie = movies.find((movie) => movie.rating >= 9);

console.log("평점 높은 영화: ", highRatedMovie);

// 5. some: 청소년 관람불가 영화가 하나라도 있는지 확인
const hasAdultMovie = movies.some((movie) => movie.isAdult === true);

console.log("청소년 관람불가 영화 존재 여부: ", hasAdultMovie);

// 장르에 '드'가 들어가는 영화만 걸러내기
const dramaMovies = movies.filter((movie) => movie.genre.includes("드"));

console.log("드가 들어가는 장르의 영화 목록: ", dramaMovies);

// 장르에 '드'가 들어가는 영화만 걸러내기
const dramaMovies2 = movies.filter((movie) => {
  return movie.genre.includes("드");
});

console.log("드가 들어가는 장르의 영화 목록: ", dramaMovies2);

async function fetchMovies() {
  try {
    const response = await fetch("movies.json");
    const movies = await response.json();
    const container = document.getElementById("movieContainer");
    const movieList = movies.filter((movie) => movie.genre === "드라마");

    movieList.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="card-body">
        <h2 class="card-title">${movie.title}</h2>
        <p class="card-rating">⭐${movie.rating}</p>
        <p class="card-description">${movie.genre}</p>
      </div>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("에러 발생: ", error);
  }
}

fetchMovies();
