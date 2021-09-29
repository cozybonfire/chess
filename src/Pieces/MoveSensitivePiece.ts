import { Piece } from './Piece';
import { Square } from '../Square';

export abstract class MoveSensitivePiece extends Piece {
    protected _hasMoved: boolean;

    constructor(location: Square, isWhite: boolean) {
        super(location, isWhite);
        this._hasMoved = false;
    }

    public get hasMoved(): boolean {
        return this._hasMoved;
    }
}