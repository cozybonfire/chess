import { Piece } from './Pieces/Piece';

export class MateChecker {
    private _whiteKingChecked: Boolean;
    private _blackKingChecked: Boolean;
    private _piecesCheckingKing: Array<Piece>;

    constructor() {
        this._whiteKingChecked = false;
        this._blackKingChecked = false;
        this._piecesCheckingKing = [];
    }

    public get whiteKingChecked(): Boolean {
        return this._whiteKingChecked;
    }

    public get blackKingChecked(): Boolean {
        return this._blackKingChecked;
    }

    public get piecesCheckingKing(): Array<Piece> {
        return this._piecesCheckingKing;
    }

    public findPiecesCheckingKing(): Array<Piece> {
        return []; // TODO
    }

    public isPlayerCheckmated(playerIsWhite: Boolean): Boolean {
        return false; //TODO
    }

    public isPlayerStalemated(playerIsWhite: Boolean): Boolean {
        return false; //TODO
    }
}