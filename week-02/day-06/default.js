function matrix(r, c, ...data) {
    if (data.length != (r * c)) {
        return null;
    }
    var matrix = [];
    for (var i = 0; i < r; i++) {
        var row = [];
        for (var j = 0; j < c; j++) {
            row.push(data[i * r + j]);
        }
        matrix.push(row);
    }
    return matrix;
}

console.log(matrix(2, 3, 1, 2, 3, 4, 5, 6));