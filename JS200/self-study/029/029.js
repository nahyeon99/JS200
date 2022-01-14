// var family = {
//   address: "Seoul",
//   members: {},
//   addFamily: function (age, name, role) {
//     this.members[role] = {
//       age: age,
//       name: name,
//     };
//   },
//   getHeadCount: function () {
//     return Object.keys(this.members).length;
//   },
// };

// family.addFamily(30, "chloe", "aunt");
// family.addFamily(3, "lyn", "niece");
// family.addFamily(10, "dangidangi", "dog");

// var printMembers = function () {
//   var members = family.members;
//   console.log("members ", members);

//   for (role in members) {
//     console.log(
//       "role => " +
//         role +
//         ", name => " +
//         members[role].name +
//         ", age => " +
//         members[role].age
//     );
//   }
// };

// printMembers();

// var members = family.members;
// members["nephew"] = { age: 3, name: "hyun" };
// members.niece = { age: 5, name: "lyn" };

// printMembers();

// delete members.aunt;
// delete members["dog"];

// printMembers();

var family = {
  address: "Seoul",
  members: {},
  addFamily: function (age, name, role) {
    this.members[role] = {
      age,
      name,
    };
  },
  getHeadcount: function () {
    return Object.keys(this.members).length;
  },
};

family.addFamily(3, "na", "father");
family.addFamily(13, "nahy", "mother");
family.addFamily(23, "naeon", "sister");

var printMembers = function () {
  var members = family.members;
  for (var role in members) {
    console.log(
      "role => " +
        role +
        ", name => " +
        members[role].name +
        ", age => " +
        members[role].age
    );
  }
};

printMembers();

var members = family.members;
members["nephew"] = { age: 3, name: "hyun" };
members.niece = { age: 4, name: "hello" };

printMembers();

delete members.father;
delete members["mother"];

printMembers();
