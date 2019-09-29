interface Grid {
    rowNum: number;
    colNum: number;
    spaces: number;
    points: number[][];
    checkPoints(): boolean;
}

export default Grid;