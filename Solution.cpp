
#include <vector>
using namespace std;

class Solution {
    
public:

    vector<vector<int>> matrixReshape(vector<vector<int>>&matrix, const size_t newRows, const size_t newColumns) {
        const size_t currentRows = matrix.size();
        const size_t currentColumns = matrix[0].size();
        if (currentRows * currentColumns != newRows * newColumns) {
            return matrix;
        }

        vector<vector<int>> reshapedMatrix {newRows, vector<int>(newColumns, 0)};
        int filledElements = 0;

        for (size_t r = 0; r < currentRows; r++) {
            for (size_t c = 0; c < currentColumns; c++) {
                const size_t indexRow = filledElements / newColumns;
                const size_t indexColumn = filledElements % newColumns;
                reshapedMatrix[indexRow][indexColumn] = matrix[r][c];
                filledElements++;
            }
        }
        return reshapedMatrix;
    }
};
