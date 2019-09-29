import DataProcessing from '../dataProcessing';
import Grid from './grid';
// import Block from './block';

class Board implements Grid{
    public rowNum: number;
    public colNum: number;
    public spaces: number;
    public points: number[][];
    public basePoints: number[][];

    constructor(rowNum: number = 9, colNum: number = 9, points: number[][]) {
        this.rowNum = rowNum;
        this.colNum = colNum;
        this.spaces = this.rowNum * this.colNum;
        this.points = points;
        this.basePoints = [];
    }

    buildBasePoints(): number[][] {
        let blockStep: number = Math.ceil(Math.sqrt(this.rowNum));
        let blockPoints: number[] = Array(blockStep).fill(0).map((x,y) => x + y * blockStep );
        for (let r = 0; r < blockStep; r++) {
            for (let c = 0; c < blockStep; c++) {
                this.basePoints.push([r, c]);
            }
        }
        return this.basePoints;
    }

    checkRow(): boolean {
        // Check correction of a row
        return false;
    }

    checkCol(): boolean {
        // Check correction of a columns
        return false;
    }

    checkPoints(): boolean {
        // Check correction of the whole board
        return false;
    }

    currentStatus(): void {
        this.points.forEach(line => {
            console.log(line);
        });
    }

    addDigit (x: number, y: number, val: number): void {
        this.points[x][y] = val;
    }

    getBasePoints(): number[][] {
        return this.points;
    }
}


// console.log(puzzle.split('\n'));

export default Board;

let puzzle: string = `6 _ 5 _ _ _ _ 9 _
                        _ _ _ _ _ 7 _ 2 _
                        1 _ _ _ _ _ _ _ _
                        _ _ _ 9 _ 8 _ _ _
                        _ _ _ _ _ _ 5 _ _
                        4 _ _ _ _ _ 1 _ 6
                        _ 8 _ _ _ 3 _ _ _
                        _ _ _ 5 1 _ _ _ _`;
                        // _ 2 _ _ _ _ _ _ _`;
// let dataProcessing = new DataProcessing();
// let data = dataProcessing.loadData(puzzle);

// let board = new Board(data.length, data[0].length, data);
// board.currentStatus();

// console.log(board.buildBasePoints());