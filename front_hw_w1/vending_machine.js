// 각 음료의 이름과 가격 정보가 포함된 객체 타입의 배열 생성
const drinks = [
    {name: "포카리스웨트", price: 1300},
    {name: "데미소다", price: 2000},
    {name: "모구모구", price: 3000},
    {name: "토레타", price: 2500},
    {name: "제로콜라", price: 1800},
    {name: "삼다수", price: 1000},
];

let my_money = 5000; // 지갑 금액을 변수로 설정

// 음료 랜덤 선택 기능 - 함수로 구현
function randomSelectDrink(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

// 출력 문자열 반환 기능 - 함수로 구현
function paymentResult(a,b) {
    console.log("음료 결제 중입니다..💳");
    if (a.price <= b) { //선택된 음료 가격이 지갑 금액보다 작거나 같을 시
        let left_money = b - a.price; //남은 금액 계산
        console.log(`${a.name}가 나왔어요! (가격: ${a.price}원) 
지갑에 남은 돈: ${left_money}원`);
        my_money = left_money; //남은 금액을 지갑 금액으로 업데이트
        return left_money;


    } else { // 선택된 음료 가격이 지갑 금액보다 더 비쌀 시
        console.log("돈이 부족해요! 음료를 살 수 없어요!");
    }

};

//자판기 음료 종류 출력 함수
function printDrinks() {
    console.log("~ 구매 가능한 음료와 가격을 확인하세요! ~ \n");
    for (var i = 0; i < drinks.length; i++) {
        console.log(`[${i+1}] ${drinks[i].name} (${drinks[i].price}원)`); //
        
    }
}


// 음료 자판기 프로그램 함수
function buyDrink() {
    let count = 0;

    do {
        let random_drink = randomSelectDrink(drinks);
        console.log(`🧃음료 자판기 프로그램🧃 \n`);
        printDrinks();
        console.log("\n")
        console.log(`내가 선택한 음료: ${random_drink.name}`);
        console.log("\n")
        paymentResult(random_drink, my_money); 
        console.log("------------------------------------------");
        count++;
    } while(count < 3); //구매 성공 여부와 상관없이 3번 반복

}

buyDrink(); //모든 기능이 동작하도록 하는 buyDrink 함수 호출