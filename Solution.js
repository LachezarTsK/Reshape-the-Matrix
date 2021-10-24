
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (matrix, r, c) {


    let n = matrix.length;
    let m = matrix[0].length;
    if (n * m !== r * c) {
        return matrix;
    }

    var reshapedMatrix = new Array(r);
    for (let i = 0; i < r; i++) {
        reshapedMatrix[i] = new Array(c);
    }

    let new_r = 0;
    let new_c = 0;

    for (let row = 0; row < n; row++) {
        for (let column = 0; column < m; column++) {
            reshapedMatrix[new_r][new_c] = matrix[row][column];
            new_c = c > 1 ? (++new_c) % c : 0;
            new_r = new_c === 0 ? ++new_r : new_r;
        }
    }
    return reshapedMatrix;
};
