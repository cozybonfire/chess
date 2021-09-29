import { Board } from './Board';
import { Piece } from './Pieces/Piece';
import { Square } from './Square';

class Game {
    _moveHistory: Array<Board>;
    _status: number;
    _statusDict: Object;

    constructor() {
        this._moveHistory = [];
        this._status = 0;
        this._statusDict = {
            0: 'White to Move',
            1: 'Black to Move',
            2: 'White Wins',
            3: 'Black Wins',
            4: 'Draw'
        };
    }

    public get moveCount() {
        return this._moveHistory.length;
    }

    public get status() {
        return this._status;
    }

    public set status(code: number) {
        if (code < 0 || code > 4) {
            throw new Error(`Invalid code: ${code}`)
        }
        this._status = code;
    }

    public get statusText() {
        return this._statusDict[this._status];
    }

    // TODO
    public checkMove(piece: Piece, square: Square) {
        
    }

    public undo() {
        
    }
}