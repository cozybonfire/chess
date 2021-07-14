import { MoveSensitivePiece } from './MoveSensitivePiece';
import { Square } from '../Square';

export class Pawn extends MoveSensitivePiece {
    computeMoves(): Set<Square> {
        return new Set(); //TODO
    }
}