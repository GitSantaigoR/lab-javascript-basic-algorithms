let hacker1 = "Anthony";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Santiago";
console.log(`The navigator's name is ${hacker2}`);


if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`) ;
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) ;
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length + hacker2.length} characters!`);
}


let driverString = " ";
for (let i=0; i<hacker1.length; i++) {
  let result = hacker1[i].toUpperCase();
  driverString += result;
}
console.log(driverString);

let navigatorString = " ";
for (let i=hacker2.length - 1; i>=0; i--) {
  let result2 = hacker2[i];
  navigatorString += result2;
}
console.log(navigatorString);
if (driverString < navigatorString) {
  console.log("The driver's name goes first.");
} else if (driverString > navigatorString) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
