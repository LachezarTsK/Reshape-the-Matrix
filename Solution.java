
public class Solution {

    public int[][] matrixReshape(int[][] matrix, int r, int c) {

        int n = matrix.length;
        int m = matrix[0].length;
        if (n * m != r * c) {
            return matrix;
        }

        int[][] reshapedMatrix = new int[r][c];
        int new_r = 0;
        int new_c = 0;

        for (int row = 0; row < n; row++) {
            for (int column = 0; column < m; column++) {
                reshapedMatrix[new_r][new_c] = matrix[row][column];
                new_c = c > 1 ? (++new_c) % c : 0;
                new_r = new_c == 0 ? ++new_r : new_r;
            }
        }
        return reshapedMatrix;
    }
}
