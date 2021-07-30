// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0. 

// 1 2 3 5
// 0 3 4 1
// 3 4 0 5

function zeroMatrix(mat) {
    // iterate through matrix
    const M = mat.length;
    const N = mat[0].length;
    const iObj = {};
    const jObj = {};
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (mat[i][j] === 0) {
                iObj[i] = true;
                jObj[j] = true;
            }
        }
    }

    for (let i in iObj) {
        for (let j = 0; j < N; j++) {
            mat[i][j] = 0;
        }
    }
    for (let j in jObj) {
        for (let i = 0; i < M && !iObj[i]; i++) {
            mat[i][j] = 0;
        }
    }
    return mat;

}

console.log(zeroMatrix([[1,2,3,5], [0,1,2,3], [1,2,0,1]]))