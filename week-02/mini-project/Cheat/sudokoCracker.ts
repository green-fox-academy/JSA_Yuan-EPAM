import DataProcessing from '../dataProcessing';
import Board from '../Sudoku/board';
import SudokuPlayable from '../User/sudokuPlayable';

class SudokuCracker implements SudokuPlayable {
    level: string;
    public notes: Object;
    public newPoints: number[][];
    public record: number[][];

    constructor() {
        this.level = "God";
        this.notes = {};
        this.newPoints = []; // A queue
        this.record = []; // A stack
    }

    getUserInput(x: number, y: number, val: number): void {

    }

    initialize(board: Board): Object{
        // Initialize values for potential values of points 
        let boardPoints = board.getBasePoints();
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (boardPoints[r][c] !== 0) {
                    this.notes[`${r}${c}`] = boardPoints[r][c];
                    this.newPoints.push([r, c]);
                } else {
                    this.notes[`${r}${c}`] = Array(9).fill(1).map((x, y) => x　+ y);
                }
            }
        }

        return this.notes;
    }

    fillDigit(board: Board, x: number, y: number, val: number) {
        board.addDigit(x, y, val);
    }

    check_note(tokens: Array<string>, val: number): void {
        for (let key of Object.keys(tokens)) {
            let noteVal = this.notes[key];
            if (typeof(noteVal) === 'object') {
                let idx = noteVal.indexOf(val);
                if (idx != -1) {
                    noteVal.splice(val, idx);
                }

                // Check the len of elements left after removed
                if (noteVal.length === 1) {
                    this.newPoints.push(key.split('').map(x => parseInt(x)));
                    this.notes[key] = noteVal[0];
                } else {
                    this.notes[key] = noteVal;
                }
            }
        }
    }

    getRowToken(row: number, start: number, num: number) {
        return Array(num).fill(start).map((x, y) => `${row}${x + y}`);
    }

    getColToken(col: number, start: number, num: number) {
        return Array(num).fill(start).map((x, y) => `${x + y}${col}`);
    }

    remove_num(point: number[]) {
        let row: number = point[0];
        let col: number = point[1];
        let val = this.notes[`${row}${col}`];

        /* Check row, if there is a digit, remove current val from notes*/
        let rowToken: Array<string> = this.getRowToken(row, 0, 9);
        /* Check column, if there is a digit, remove current val from ntoes*/
        let colToken: Array<string> = this.getColToken(col, 0, 9);
        this.check_note(rowToken, val);
        this.check_note(colToken, val);

        // for (let key of Object.keys(rowToken)) {
        //     let noteVal = this.notes[key];
        //     if (typeof(noteVal) === 'object') {
        //         let idx = noteVal.indexOf(val);
        //         if (idx != -1) {
        //             noteVal.splice(val, idx);
        //         }

        //         // Check the len of elements left after removed
        //         if (noteVal.length === 1) {
        //             this.newPoints.push(key.split('').map(x => parseInt(x)));
        //             this.notes[key] = noteVal[0];
        //         } else {
        //             this.notes[key] = noteVal;
        //         }
        //     }
        // }

        let blockBasePoint: number[] = point.map(x => Math.floor(x / 3) * 3);
        let blockRow: Array<String> = this.getRowToken(blockBasePoint[0], 0, 3);
        let blockCol: Array<String> = this.getColToken(blockBasePoint[1], 0, 3);
        

    }

    noteInfo(): void {

    }

}


function test() {
    let puzzle: string = `6 _ 5 _ _ _ _ 9 _
                            _ _ _ _ _ 7 _ 2 _
                            1 _ _ _ _ _ _ _ _
                            _ _ _ 9 _ 8 _ _ _
                            _ _ _ _ _ _ 5 _ _
                            4 _ _ _ _ _ 1 _ 6
                            _ 8 _ _ _ 3 _ _ _
                            _ _ _ 5 1 _ _ _ _
                            _ 2 _ _ _ _ _ _ _`;
    let dataProcessing = new DataProcessing();
    let data = dataProcessing.loadData(puzzle);

    let board = new Board(data.length, data[0].length, data);
    board.currentStatus();
    console.log(board.buildBasePoints());

    let sudokuCracker = new SudokuCracker();
    console.log(sudokuCracker.initialize(board));
}


