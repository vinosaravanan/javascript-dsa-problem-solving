/////           1,  How do you reverse a given string in place?
//////                       input - hollo
/////                        output - olloh

////  4 Approache

///  Using loop 
function ReverseStrWithLoop(str){
    let text = '';
    for (let i = str.length - 1; i >= 0; i--) {
       text += str[i]
        
    }
    return text
};

console.log(ReverseStrWithLoop('Hollo'));

