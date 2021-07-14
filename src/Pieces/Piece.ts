import { Square } from '../Square';
import { Board } from '../Board';

export abstract class Piece {
    protected _isWhite: Boolean;
    protected _location: Square;

    constructor(location: Square, isWhite: Boolean) {
        this._isWhite = isWhite;
        this._location = location;
    }

    public get isWhite(): Boolean {
        return this._isWhite;
    }

    public get location(): Square {
        return this._location;
    }

    public abstract computeMoves(): Set<Square>;

    public move(board: Board, square: Square): void {
        board.clearSquare(this._location);
        board.setSquare(square, this);
        this._location = square;

        if (!square.isEmpty()) {
            board.capture(square.occupant);
        }
    }
}