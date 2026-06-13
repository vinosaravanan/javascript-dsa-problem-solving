/////           1,  How do you reverse a given string
//////                       input - hollo
/////                        output - olloh

////  4 Approache

/// 1, Using loop
function ReverseStrWithLoop(str) {
  let text = "";
  for (let i = str.length - 1; i >= 0; i--) {
    text += str[i];
  }
  return text;
}

console.log(ReverseStrWithLoop("Hollo"));

//// 2, Using Recursion
function ReverseStrWithRecursion(str) {
  if (str === "") {
    return "";
  }
  return ReverseStrWithRecursion(str.slice(1)) + str[0];
}
console.log("Str REverse with REcursion ---", ReverseStrWithRecursion("hollo"));

/// 3. Using build-in method like split, reverse, and join;
function ReverseStrWithBuildmethod(str) {
  return str.split("").reverse().join("");
}
console.log(
  "REverse Str With Build-method ---",
  ReverseStrWithBuildmethod("world"),
);

/// 4,  Using Reduce build-method
function ReverseStrWithReduce(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}
console.log("ReverseStrWithReduce", ReverseStrWithReduce("world"));
