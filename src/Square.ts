import { Piece } from './Pieces/Piece';

interface ICoordinates {
    x: Number,
    y: Number
}

export class Square {
    private _name: String;
    private _x: Number;
    private _y: Number;
    private _occupant: Piece;

    constructor(name: String, occupant: Piece) {
        this._name = name;

        let coordinates = this.nameToCoordinates(name);
        this._x = coordinates.x;
        this._y = coordinates.y;
        
        this._occupant = occupant;
    }

    public get name() {
        return this._name;
    }

    public get occupant() {
        return this._occupant;
    }

    public set setOccupant(piece: Piece) {
        this._occupant = piece;
    }

    public clear(): void {
        this._occupant = null;
    }

    public coordinatesToName(coordinates: ICoordinates): String {
        return ''; //TODO
    }

    public isEmpty(): Boolean {
        return !this._occupant;
    }

    public nameToCoordinates(name: String): ICoordinates {
        return {
            x: 0,
            y: 0
        }; //TODO
    }
}