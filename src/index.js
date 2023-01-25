// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) {
        return [];
    }
    for (let index = 0; index < matrix.length; index++) {
        const element = matrix[index];
        if (index % 2 != 0) {
            element.reverse();
        }
        result.push(...element);
    }
    return result;
};
