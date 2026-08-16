////      How to convert a byte array to a String?

// ✅ What does it mean?
// You're given an array of byte values (integers between 0 and 255), 
// and you need to turn that into a readable string.


//   Input: [72, 101, 108, 108, 111]
//   Output: "Hello"

/// Approche 1: Using TextDecoder (Best in Interviews)
function ConvertArrToStr(arr){
  let buffer = new Uint8Array(arr);
  let decoder = new TextDecoder('utf-8');
  let str = decoder.decode(buffer);
  return str
}
console.log(' ConvertArrToStr |', ConvertArrToStr([72, 101, 108, 108, 111]));


/// Approche 2: Using String.fromCharCode
function ConvertArrToStrWithFromCharCode(arr){
  let str = String.fromCharCode(...arr);
  return str
}
console.log('ConvertArrToStrWithFromCharCode |', ConvertArrToStrWithFromCharCode([72, 101, 108, 108, 111]));

