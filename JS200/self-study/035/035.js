// 개발자가 예측한 에러, throw문으로 예외처리

function checkNumber(val) {
  if (typeof val !== "number") throw "유효하지 않은 값입니다.";
  console.log("숫자형 값으로 확인되었습니다.");
}

checkNumber(100);
checkNumber("Wrong type"); // throw 에러 발생 후 코드 실행 중단
console.log("완료");
