
public class Solution {

    public int[][] matrixReshape(int[][] matrix, int newRows, int newColumns) {

        final int currentRows = matrix.length;
        final int currentColumns = matrix[0].length;
        if (currentRows * currentColumns != newRows * newColumns) {
            return matrix;
        }

        int[][] reshapedMatrix = new int[newRows][newColumns];
        int filledElements = 0;

        for (int r = 0; r < currentRows; r++) {
            for (int c = 0; c < currentColumns; c++) {
                int indexRow = filledElements / newColumns;
                int indexColumn = filledElements % newColumns;
                reshapedMatrix[indexRow][indexColumn] = matrix[r][c];
                filledElements++;
            }
        }
        return reshapedMatrix;
    }
}
