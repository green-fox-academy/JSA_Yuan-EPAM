interface SudokuPlayable {
    level: string;
    getUserInput(x, y, val): void;
    fillDigit(board: Object, x: number, y:number, val: number): void;
}

export default SudokuPlayable;