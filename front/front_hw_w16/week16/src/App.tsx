// 아이템 interface
interface Item {
  itemName: string; // 상품명
  price: number; // 가격
  category: string; // 카테고리
  isPopular: boolean; // 인기 여부
}

// 세부 정보 interface
interface ItemDetail {
  isFavorite: boolean; // 추천 여부
  boughtAt: string; // 구매 장소
  boughtOn: number; // 구매 날짜
  review: string; // 리뷰
}

interface MangBearItem extends Item, ItemDetail {}

const mangBearItems: MangBearItem[] = [
  {
    itemName: "망그러진 만화 1",
    price: 25000,
    category: "도서",
    isPopular: true,
    isFavorite: true,
    boughtAt: "용산 아이파크몰 영풍문고",
    boughtOn: 2024,
    review: "",
  },
  {
    itemName: "망그러진 만화 2",
    price: 25000,
    category: "도서",
    isPopular: true,
    isFavorite: false,
    boughtAt: "왕십리 영풍문고",
    boughtOn: 2024,
    review: "망그러진 만화 1 만큼의 감동은 없었답니다..😓",
  },
  {
    itemName: "망그러진곰 마우스패드",
    price: 12000,
    category: "문구",
    isPopular: true,
    isFavorite: true,
    boughtAt: "유랑상점(온라인)",
    boughtOn: 2024,
    review:
      "노트북 작업을 할 때 망그러진곰과 함께 할 수 있어서 행복하답니다!😊",
  },
  {
    itemName: "감자 망그러진곰 키링",
    price: 12000,
    category: "키링",
    isPopular: true,
    isFavorite: true,
    boughtAt: "유랑상점(온라인)",
    boughtOn: 2023,
    review: "진짜 밭에서 갓 캔 감자같고 귀여워요!🥔",
  },
  {
    itemName: "울먹 망그러진곰 키링",
    price: 12000,
    category: "키링",
    isPopular: true,
    isFavorite: true,
    boughtAt: "유랑상점(온라인)",
    boughtOn: 2023,
    review: "우는 표정이 너무 리얼해서 지켜주고 싶어요..🥺",
  },
  {
    itemName: "두산베어스 망그러진곰 키링",
    price: 12000,
    category: "키링",
    isPopular: false,
    isFavorite: true,
    boughtAt: "카카오선물하기",
    boughtOn: 2025,
    review:
      "친구한테 생일선물로 받았는데, 가방에 너무 잘 달고 다녀요! 고마워❤️",
  },
  {
    itemName: "망그러진곰 시팅 인형",
    price: 12000,
    category: "인형",
    isPopular: false,
    isFavorite: false,
    boughtAt: "유랑상점(온라인)",
    boughtOn: 2023,
    review: "너무너무 귀여운데.. 부피가 커서 데리고 다닐 수 없어서 아쉬워요😞",
  },
  {
    itemName: "망그러진곰 다이어리",
    price: 12000,
    category: "문구",
    isPopular: false,
    isFavorite: false,
    boughtAt: "용산 아이파크몰 영풍문고",
    boughtOn: 2024,
    review:
      "이건 망그러진 만화와 함께 구매했는데, 손이 안 가서 당근에 팔았답니다..😂",
  },
  {
    itemName: "망그러진곰 세안밴드",
    price: 12000,
    category: "생활용품",
    isPopular: true,
    isFavorite: true,
    boughtAt: "카카오선물하기",
    boughtOn: 2024,
    review:
      "친구가 생일선물로 줬는데, 맨날 세수할 때 쓰고 있어요. 최애템입니다!!❤️",
  },
  {
    itemName: "머리 쿵 망그러진곰 키링",
    price: 12000,
    category: "키링",
    isPopular: true,
    isFavorite: true,
    boughtAt: "유랑상점(온라인)",
    boughtOn: 2025,
    review: "예약판매로 구매해서, 아직 받지는 못했지만 너무 기대돼요!!😍",
  },
];

function introduceOneItem(item: MangBearItem): void {
  console.log("🐻 망그러진 곰 굿즈 중 하나 소개 🐻");
  console.log(`상품명: ${item.itemName}`);
  console.log(`가격: ${item.price}원`);
  console.log(`카테고리: ${item.category}`);
  console.log(
    `인기 여부: ${
      item.isPopular ? "완전 인기템🔥" : "열광할 정도는 아니랍니다!😓"
    }`
  );
  console.log(
    `추천 여부: ${item.isFavorite ? "최애템💖" : "그저 그랬어요!😓"}`
  );
  console.log(`구매 장소: ${item.boughtAt}`);
  console.log(`구매 날짜: ${item.boughtOn}년`);
  console.log(`리뷰: ${item.review}`);
}

introduceOneItem(mangBearItems[0]);
