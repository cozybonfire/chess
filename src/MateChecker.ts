import { Piece } from './Pieces/Piece';

export class MateChecker {
    private _whiteKingChecked: boolean;
    private _blackKingChecked: boolean;
    private _piecesCheckingKing: Array<Piece>;

    constructor() {
        this._whiteKingChecked = false;
        this._blackKingChecked = false;
        this._piecesCheckingKing = [];
    }

    public get whiteKingChecked(): boolean {
        return this._whiteKingChecked;
    }

    public get blackKingChecked(): boolean {
        return this._blackKingChecked;
    }

    public get piecesCheckingKing(): Array<Piece> {
        return this._piecesCheckingKing;
    }

    public findPiecesCheckingKing(): Array<Piece> {
        return []; // TODO
    }

    public isPlayerCheckmated(playerIsWhite: boolean): boolean {
        return false; //TODO
    }

    public isPlayerStalemated(playerIsWhite: boolean): boolean {
        return false; //TODO
    }
}