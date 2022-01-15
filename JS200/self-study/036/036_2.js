function addNum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    // arguments.length, 함수로 전달된 인수의 총 개수 확인 가능(특징1)
    sum += arguments[i]; // arguments의 index로 각각의 인수에 바로 접근 가능(특징2)
  }
  return sum;
}

console.log(addNum(1, 2, 3)); // 6
console.log(addNum(1, 2)); // 3
console.log(addNum(1)); // 1
console.log(addNum()); // 0
console.log(addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
