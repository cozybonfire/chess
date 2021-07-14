import { Piece } from './Piece';
import { Square } from '../Square';

export class Queen extends Piece {
    computeMoves(): Set<Square> {
        return new Set(); //TODO
    }
}