import { MoveSensitivePiece } from './MoveSensitivePiece';
import { Square } from '../Square';

export class Rook extends MoveSensitivePiece {
    computeMoves(): Set<Square> {
        return new Set(); //TODO
    }
}