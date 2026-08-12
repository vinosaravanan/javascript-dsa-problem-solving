////   How do you find duplicates from an unsorted array?

//////// input -  [4, 3, 6, 5, 3, 4, 7, 8, 4];
/////// output - [4,3]

function FindDublicateInUnsortedArr(arr){
    let seen = new Set();

    let dublicate = [];
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
             dublicate.push(arr[i])
        }else{
             seen.add(arr[i])
        }
    }
    return dublicate
}
console.log('FindDublicateInUnsortedArr |', FindDublicateInUnsortedArr([4, 3, 6, 5, 3, 4, 7, 8, 4]));
