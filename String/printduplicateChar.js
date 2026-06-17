/////////        Q ,How do you print duplicate characters from a string?;

////// input = "programming";
///// output =  r, g, m;

/// 4 Approaches

//// Using Plain Object(hash map)

function PrintDublicateWithObj(str) {
  let charObj = {};
  let Dublicate = [];

  for (const char of str) {
    charObj[char] = (charObj[char] || 0) + 1;
  }

  for (const char in charObj) {
    if (charObj[char] > 1) {
      Dublicate.push(char);
    }
  }
  return Dublicate;
}
console.log("Print Dublicate With Obj", PrintDublicateWithObj("programming"));

/////////// Approche 2 Using a Array ;

function PrintDublicateWithArray(str) {
  let charSeen = [];
  let dublicate = [];
  for (const char of str) {
    if (charSeen.includes(char)) {
      if (!dublicate.includes(char)) {
        dublicate.push(char);
      }
    } else {
      charSeen.push(char);
    }
  }
  return dublicate
}

console.log(
  "Print Dublicate With Array",
  PrintDublicateWithArray("programming"),
);

//// approche 3 Using a map
function PrintDublicateWithMap(str){
     let charMap = new Map();
     let dublicate = [];
     for (const char of str) {
         charMap.set(char, (charMap.get(char) || 0) + 1)
     };
     for (const [char, count] of charMap) {
        if (count > 1) {
           dublicate.push(char)
        }
     }
     return dublicate
}

console.log(
  "Print Dublicate With Map",
  PrintDublicateWithMap("programming"),
);