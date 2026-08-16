////// //  How to Convert a String to a Byte Array in JavaScript?

//  ✅What does it mean
//  You’re given a string like `"Hello"` and you need to convert it into an **array of bytes** 
//  (integers between `0` and `255`), which represent the character codes.

/// input : str = 'Hello'
/// output :[ 72, 101, 108, 108, 111 ]

/// Approche 1: TextEncoder (Most Recommended in Interviews)



function StrToArrWithTextEncoder(str){
  let encoder = new TextEncoder();
  let bytes = encoder.encode(str);
  return bytes

}
console.log('StrToArrWithTextEncoder |', StrToArrWithTextEncoder("Hello"));
