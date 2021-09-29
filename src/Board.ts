import { Piece } from './Pieces/Piece';
import { Square } from './Square';

export class Board {
    private _squares: Set<Square>;
    private _whitePiecesCaptured: Set<Piece>;
    private _blackPiecesCaptured: Set<Piece>;

    constructor(squares: Set<Square>) {
        this._squares = squares;
        this._whitePiecesCaptured = new Set();
        this._blackPiecesCaptured = new Set();
    }

    public get squares(): Set<Square> {
        return this._squares;
    }

    public capture(piece: Piece): void {
        if (piece.isWhite) {
            this._whitePiecesCaptured.add(piece);
        } else {
            this._blackPiecesCaptured.add(piece);
        }
    }

    public clearSquare(square: Square): void {
        this._squares.delete(square);
        this._squares.add(new Square(square.x, square.y, null))
    }

    public isCaptured(piece: Piece): boolean {
        return this._whitePiecesCaptured.has(piece) || this._blackPiecesCaptured.has(piece);
    }

    public setSquare(square: Square, piece: Piece): void {
        this._squares.delete(square);
        this._squares.add(new Square(square.x, square.y, piece));
    }
}