var store = { snack: 1000, flower: 2000, bevarage: 3000 };

for (var item in store) {
  if (!store.hasOwnProperty(item)) continue;
  console.log(item + "는 가격이 " + store[item]);
}
