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
