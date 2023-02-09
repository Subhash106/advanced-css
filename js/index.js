"use strict";

function Person() {}
Person.prototype.walk = function () {
  return this;
};
Person.run = function () {
  return this;
};
let user = new Person();
let walk = user.walk;
console.log(walk()); // undef
console.log(user.walk()); // {}
let run = Person.run;
console.log(run()); // undef
console.log(user.run()); //error

// const str = "abbcccddddeeeeeaabbbcccc";

// let i = 0;
// let seq = 0;
// const result = [];

// while (i < str.length) {
//   const current = str[i];
//   const next = str[i + 1];

//   if (typeof result[seq] === "undefined") {
//     result[seq] = [current, 0];
//   }

//   result[seq][1]++;

//   if (current !== next) {
//     seq++;
//   }

//   i++;
// }

// console.log("result", result);

// const delay = async (item) =>
//   new Promise((resolve) =>
//     setTimeout(() => {
//       console.log(item);
//       resolve(item);
//     }, 1000)
//   );
// console.log(1);
// let arr = [3, 4, 5, 6];
// arr.forEach(async (item) => await delay(item));
// console.log(2);

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   introduction() {
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   }
// }

// // const person1 = new Person("Subhash", "Chandra");
// // person1.introduction();

// function introduction1() {
//   console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
// }

// const introduction2 = () => {
//   console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
// };

// introduction2();
// introduction1();

// const test = () => {
//   console.log("test", this);
// };

// function test2() {
//   console.log("test2", this);
// }

// const t1 = test.bind({ firstName: "test" });
// const t2 = test2.bind({ firstName: "test2" });

// t1();
// t2();

// const obj = {
//   name: "test",
//   prop: {
//     name: "prop name",
//     print: function () {
//       console.log(this.name);
//     },
//   },
//   print: function () {
//     console.log(this.name);
//   },
//   print2: () => console.log(this.name, this),
// };

// obj.print(); // test
// obj.prop.print(); // prop name
// obj.print2(); //

// var foo = { n: 1 };
// var bar = foo;

// console.log(foo === bar);

// bar.x = bar = { n: 2 };

// console.log("foo", foo);
// console.log("bar", bar);

// const length = 5;
// const fns = [];
// const fns2 = [];

// for (var i = 0; i < length; i++) {
//   function closure(k) {
//     fns.push(() => console.log(k));
//   }

//   closure(i);
// }

// for (let i = 0; i < length; i++) {
//   fns2.push(() => console.log(i));
// }

// fns.forEach((fn) => fn());
// fns2.forEach((fn) => fn());

// function foo() {
//   let a = (b = 0);

//   a++;
//   b++;

//   return a;
// }

// foo();

// console.log("b", b);
// console.log("a", a);

// test1();

// function test1() {
//   console.log("test1 called");
// }

// console.log(test2);

// var test2 = function () {
//   console.log("test2 called");
// };

// const myStr = "hello there";
// const myObj = {};
// for (let i = 0; i < myStr.length; i++) {
//   if (myObj[myStr[i]]) {
//     myObj[myStr[i]]++;
//   } else {
//     myObj[myStr[i]] = 1;
//   }
// }

// console.log(myObj);

// for (let data in myObj) {
//   console.log(`${data}=>${myObj[data]}`);
// }
