
// let fruits = ['apple', 'banana', 'cherry'];

//  console.log(fruits[1]);

// function sumArray(arr){
//     let sum = 0;

//         for (let i = 0; i < arr.length; i++){
            
//             sum += arr [i];

            
//         }
//     return sum;
// }
// console.log(sumArray([10, 20, 30])) 

// function findMax(arr) {
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         } 
//     }
//  return max;
// }
// console.log(findMax([3, 5, 7, 2, 8])); //output: 8

function findSmallest(arr) {
    let smallest = arr[0];
 for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest){
        smallest = arr [i];
    }
 }
 return smallest;
} 
console.log(findSmallest([2,3,4,200,120,10,230]));