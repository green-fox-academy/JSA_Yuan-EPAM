import Board from './board';
import Grid from './grid';

class Block implements Grid {
    public rowNum: number;
    public colNum: number;
    public spaces: number;
    public grids: number[][];

    constructor(rowNum = 3, colNum = 3, grids) {
        this.rowNum = rowNum;
        this.colNum = colNum;
        this.grids = grids;
    }

    checkGrid(): boolean {
        return false;
    }
}

export default Block;