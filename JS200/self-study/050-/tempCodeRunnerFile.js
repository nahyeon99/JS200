function Storage() {
  // Storage 생성자함수 정의
  this.dataStore = {}; // 내부 속성으로 dataStore를 가지고 빈 객체를 할당
}

Storage.prototype.put = function (key, data) {
  // 생성자 함수의 프로토타입 객체에 put 메소드를 추가 (주어진 키에 해당하는 값을 dataStore 속성에 할당)
  this.dataStore[key] = data;
};

Storage.prototype.getData = function (key) {
  return this.dataStore[key];
};

const productStorage = new Storage(); // Storage 타입의 인스턴스 productStorage 생성
productStorage.put("id001", { name: "키보드", price: 2000 }); // 상속받은 생성자함수의 프로토타입에 정의된 메소드들을 사용할 수 있다.
console.log(productStorage.getData("id001"));

function RemovableStorage() {
  Storage.call(this); // Storage 생성자함수에서의 dataStore를 this에 추가
}
RemovableStorage.prototype = Object.create(Storage.prototype);

RemovableStorage.prototype.removeAll = function () {
  this.dataStore = {};
};

const productStorage2 = new RemovableStorage();
productStorage2.put("id001", { name: "키보드", price: 2000 });
console.log(productStorage2);
productStorage2.removeAll();
console.log(productStorage2);

const item2 = productStorage2.getData("id001");
console.log(item2);
