class Product {
  static build(name, price) {
    // Static 키워드를 사용하여 build 정적 메소드를 정의
    const id = Math.floor(Math.random() * 1000);
    return new Product(id, name, price);
  }
  static getTaxPrice(product) {
    // getTaxPrice 정적 메소드 정의 (세금을 계산하여 반환)
    return product.price * 0.1 + product.price;
  }

  constructor(id, name, price) {
    // Product 클래스의 생성자 함수 정의
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// 상속의 종류
// 1. 생성자함수의 prototype 기반의 상속
// 2. 클래스로 상속(ES6) -> 정적 메소드 또한 상속하게 된다.

// 폐기가 가능한 상품 클래스를 정의, Product 클래스를 상속
class DeposableProduct extends Product {
  depose() {
    this.deposed = true;
  }
}
// 일반메소드를 호출할 때
// const gum = new Product();
// gum.build("껌", 1000);

// 정적메소드를 호출할 때
const candy = Product.build("사탕", 1000);
console.log(candy);

const clothes = new DeposableProduct(1, "옷", 2000);
console.log(clothes);

const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);
