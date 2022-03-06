
/**
 * @param {number[][]} matrix
 * @param {number} newRows
 * @param {number} newColumns
 * @return {number[][]}
 */
var matrixReshape = function (matrix, newRows, newColumns) {
    const currentRows = matrix.length;
    const currentColumns = matrix[0].length;
    if (currentRows * currentColumns !== newRows * newColumns) {
        return matrix;
    }

    const reshapedMatrix = new Array(newRows);
    for (let r = 0; r < newRows; r++) {
        reshapedMatrix[r] = new Array(newColumns).fill(0);
    }
    let filledElements = 0;

    for (let r = 0; r < currentRows; r++) {
        for (let c = 0; c < currentColumns; c++) {
            let indexRow = Math.floor(filledElements / newColumns);
            let indexColumn = filledElements % newColumns;
            reshapedMatrix[indexRow][indexColumn] = matrix[r][c];
            filledElements++;
        }
    }
    return reshapedMatrix;
};
