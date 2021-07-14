import { Piece } from './Piece';
import { Square } from '../Square';

export class Knight extends Piece {
    computeMoves(): Set<Square> {
        return new Set(); //TODO
    }
}