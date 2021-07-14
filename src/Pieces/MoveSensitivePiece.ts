import { Piece } from './Piece';
import { Square } from '../Square';

export abstract class MoveSensitivePiece extends Piece {
    protected _hasMoved: Boolean;

    constructor(location: Square, isWhite: Boolean) {
        super(location, isWhite);
        this._hasMoved = false;
    }

    public get hasMoved(): Boolean {
        return this._hasMoved;
    }
}