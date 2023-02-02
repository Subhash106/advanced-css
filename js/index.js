const myStr = "hello there";
const myObj = {};
for (let i = 0; i < myStr.length; i++) {
  if (myObj[myStr[i]]) {
    myObj[myStr[i]]++;
  } else {
    myObj[myStr[i]] = 1;
  }
}

console.log(myObj);

for (let data in myObj) {
  console.log(`${data}=>${myObj[data]}`);
}
