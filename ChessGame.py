# class representing the game itself

class ChessGame:
    standardBoard = {} # TODO decide format and fill this in

    def __init__(self, playerIsWhite=True, board=standardBoard):
        self.board = board
        self.moveHistory = [self.board]
        self.playerIsWhite = playerIsWhite
        self.takenPieces = []

    def ConductMove(self, move):
        return
    
    def DrawBoard(self):
        return
    
    def GetMoveCount(self):
        return len(self.moveHistory) - 1

    def PathOfSquare(self, move):
        return
        
    def Promote(self, piece):
        return

    def Undo(self):
        return
    
    class Piece:
        def __init__(self, name, position, isWhite):
            self.name = name
            self.position = position
            self.isWhite = isWhite
            self.hasMoved = False

        def AvailableSpaces():
            return []
    
    class Square:
        def __init__(self, name, x, y, occupant=None):
            self.name = name
            self.x = x
            self.y = y
            self.occupant = occupant

    class Move:
        def __init__(self, piece, square):
            self.piece = piece
            self.square = square
    
