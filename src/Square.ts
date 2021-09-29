import { Piece } from './Pieces/Piece';

interface ICoordinates {
    x: number,
    y: number
}

export class Square {
    private _coordinates: ICoordinates;
    private _occupant: Piece;

    constructor(x: number, y: number, occupant: Piece) {
        this._coordinates = {
            x: x,
            y: y
        }
        
        this._occupant = occupant;
    }

    public get coordinates(): ICoordinates {
        return this._coordinates;
    }

    public get name(): string {
        return this.coordinatesToName(this._coordinates);
    }

    public get occupant() {
        return this._occupant;
    }

    public get x() {
        return this._coordinates.x;
    }

    public get y() {
        return this._coordinates.y;
    }

    public set occupant(piece: Piece) {
        this._occupant = piece;
    }

    public clear(): void {
        this._occupant = null;
    }

    public coordinatesToName(coordinates: ICoordinates): string {
        let dictionary: Object = {
            0: 'A',
            1: 'B',
            2: 'C',
            3: 'D',
            4: 'E',
            5: 'F',
            6: 'G',
            7: 'H'
        }

        return `${dictionary[coordinates.x]}${coordinates.y + 1}`;
    }

    public isEmpty(): boolean {
        return !this._occupant;
    }

    public nameToCoordinates(name: string): ICoordinates {
        if (name.length > 2) {
            throw new Error(`Invalid square name: ${name}`);
        }

        let dictionary: Object = {
            'a': 0,
            'b': 1,
            'c': 2,
            'd': 3,
            'e': 4,
            'f': 5,
            'g': 6,
            'h': 7
        };
        let x: number = dictionary[name[0].toLowerCase()];
        let y: number = parseInt(name[1]) - 1;

        let result: ICoordinates = {
            x: x,
            y: y
        }
        return result;
    }
}