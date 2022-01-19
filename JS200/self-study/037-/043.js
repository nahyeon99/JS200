var person = "harin";

function print() {
  var person2 = "jay";

  function innerPrint() {
    console.log(person); // harin - 1
    console.log(person2); // jay - 2
  }

  innerPrint();

  console.log("print finished"); // - 3
}

print();
console.log("finished"); // - 4
