// ProductWithCode.CODE_PREFIX = "PRODUCT-";
class ProductWithCode {
  // 가독성을 높이려면 함수의 body 안에 정의하는 것을 권장
  static get CODE_PREFIX() {
    return "PRODUCT-";
  }

  constructor(id) {
    this.id;
    this.code = ProductWithCode.CODE_PREFIX + id;
  }
}

const product1 = new ProductWithCode("001");
console.log(ProductWithCode.CODE_PREFIX); // 정적속성 CODE_PREFIX
console.log(product1.code); // 인스턴스로 접근
