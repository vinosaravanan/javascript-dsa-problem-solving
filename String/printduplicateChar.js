/////////        Q ,How do you print duplicate characters from a string?;

////// input = "programming";
///// output =  r, g, m;

/// 4 Approaches


//// Using Plain Object(hash map)

function PrintDublicateWithObj(str){
   let charObj = {};
   let Dublicate = [];

   for (const char of str) {
       charObj[char] = (charObj[char] || 0) + 1
   }
 
   for (const char in charObj) {
       if (charObj[char] > 1) {
         Dublicate.push(char)
       }
   }
   return Dublicate

}


console.log('Print Dublicate With Obj',PrintDublicateWithObj("programming"))
