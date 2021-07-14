import { Piece } from './Pieces/Piece';
import { Square } from './Square';

export class Board {
    private _squares: Set<Square>;
    private whitePiecesCaptured: Set<Piece>;
    private blackPiecesCaptured: Set<Piece>;

    constructor(squares: Set<Square>) {
        this._squares = squares;
        this.whitePiecesCaptured = new Set();
        this.blackPiecesCaptured = new Set();
    }

    public get squares(): Set<Square> {
        return this._squares;
    }

    public capture(piece: Piece): void {
        if (piece.isWhite) {
            this.whitePiecesCaptured.add(piece);
        } else {
            this.blackPiecesCaptured.add(piece);
        }
    }

    public clearSquare(square: Square): void {
        this._squares.delete(square);
        this._squares.add(new Square(square.name, null))
    }

    public isCaptured(piece: Piece): Boolean {
        return this.whitePiecesCaptured.has(piece) || this.blackPiecesCaptured.has(piece);
    }

    public setSquare(square: Square, piece: Piece): void {
        this._squares.delete(square);
        this._squares.add(new Square(square.name, piece));
    }
}