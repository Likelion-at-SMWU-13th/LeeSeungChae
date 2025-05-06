const date = new Date();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log(`${year}년 ${month}월 ${day}일`);
console.log(`${hours}시 ${minutes}분 ${seconds}초`);

const formattedDate = `${year}-${String(month).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
const formattedHours = `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;