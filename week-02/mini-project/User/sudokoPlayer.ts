import Person from './person';
import Board from '../Sudoku/board';
import SudokoPlayable from './sudokuPlayable';

class SudokoPlayer extends Person implements SudokoPlayable{
    public level: string;

    constructor(name: string = 'John Snow', gender = 'male') {
        super(name, gender);
    }

    getUserInput(x, y, val): void {
        // User input 
    }

    fillDigit(board: Board, x: number, y:number, val: number): void {
        board.addDigit(x, y, val);
    }
}