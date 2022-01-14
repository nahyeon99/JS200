var arr = [1, 2, 30, 44, 5];

var [b, c, ...rest] = arr;

console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

var [a = 10, f = 9] = [1];

console.log(a);
console.log(f);

[a, f] = [f, a];
console.log(a);
console.log(f);

function getArr() {
  return [1, 2, 3, 4, 5, 6];
}
[a, , , , , f] = getArr();

console.log(a);
console.log(f);
