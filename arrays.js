
// Arrays
// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
array1=[3,7,34,90,12];
arr2 = [true, "green", "where",12,56]
const lastElement=array1[array1.length-1];
const endingElement=arr2[arr2.length-1];
console.log(lastElement);
console.log(endingElement);

// Write a JS program that will join the following array elements into a string.
// myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join());
// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
// var arr3=[ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

arr3=[-5, 9, 5, 3, 2, -3, 6, 8, 4, 1]
const values=(arr3.sort(function(a,b,...c){a-c}));
console.log(values);


// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
            let array=arr.filter((orange,index)=>{
                return arr.indexOf(orange)==index;
                    
                });
                console.log(array);
                var arr = ["apple","mango","apple","orange","mango","mango"];
                let duplicatedArray = arr.filter((orange,index)=>{
                  return arr.indexOf(orange) !== index;
                 });
                console.log(duplicatedArray);










            
// Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];
if (arr5[1]==["way"]){
    console.log("way")
}
else{
    (arr5[1]!=["way"])
    console.log("the search was not found")
}

// Write a JS script to sort the following string
// let word = "sevink"
//  Option 1

let word = "sevink"
console.log(word.split('').sort().join(''))

