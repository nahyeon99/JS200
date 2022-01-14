var obj = { a: 1, b: 2, c: 30, d: 44, e: 5 };

var { a, b } = obj;

console.log(`a >>> ${a}`);
console.log(`b >>> ${b}`);

var { a: newA = 10, f: newF = 5 } = obj;

console.log(`${newA}`);
console.log(`${newF}`);
console.log(a);
