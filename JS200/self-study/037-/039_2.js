var a = "global"; // 전역변수

function print1() {
  console.log(a);
  console.log("-----");
}

function print2() {
  var a = "local"; // 지역변수
  print1();
}

print1();
print2();
