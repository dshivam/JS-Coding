// // Given an image represented by an NxN matrix, where each pixel in the image is 4
// // bytes, write a method to rotate the image by 90 degrees. (an you do this in place? 

// [1  2  3  4]      13  9 5 1
// 5  6  7  8      14 10 6 2
// 9 10 11 12      15 11 7 3
// 13 14 15 16      16 12 8 4

// function rotateMatrix(matrix) {
//     if (!matrix.length || matrix.length !== matrix[0].length) {
//         return false
//     }
//     const len = matrix.length;
//     //rotate topLayer
//     let layer = 0;
//     for(let i = layer; i <= Math.floor(len/2); i++) {
//         //temp = top
//         let temp = matrix[layer][i];
//         //top = left
//         matrix[layer][i] = matrix[len - i][layer];
//         //left = bottom
//         matrix[len - i][layer] = matrix[len - layer][]

//     }
// }