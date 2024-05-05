import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, onTileClick, playerTurn }) {

    const rightandbottomborder = "right-border bottom-border";
    const bottomborder = " bottom-border "
    const rightborder = " right-border "
    return (
        <div className="board">
            <Tile
                playerTurn={playerTurn} 
                onClick={()=> onTileClick(0)}
                value={tiles[0]} 
                className={rightandbottomborder}
            />
            <Tile
                playerTurn={playerTurn} 
                onClick={() => onTileClick(1)} 
                value={tiles[1]} 
                className={rightandbottomborder}
            />
            <Tile
                playerTurn={playerTurn} 
                onClick={() => onTileClick(2)} 
                value={tiles[2]} 
                className={bottomborder}
            />
            <Tile
                playerTurn={playerTurn} 
                onClick={() => onTileClick(3)} 
                value={tiles[3]} 
                className={rightandbottomborder}
            />
            <Tile
                playerTurn={playerTurn} 
                onClick={() => onTileClick(4)} 
                value={tiles[4]} 
                className={rightandbottomborder}
            />
            <Tile
                playerTurn={playerTurn} 
                onClick={() => onTileClick(5)} 
                value={tiles[5]} 
                className={bottomborder}
            />
            <Tile
                playerTurn={playerTurn} 
                onClick={() => onTileClick(6)} 
                value={tiles[6]} 
                className={rightborder}
            />
            <Tile
                playerTurn={playerTurn} 
                onClick={() => onTileClick(7)} 
                value={tiles[7]} 
                className={rightborder}
            />
            <Tile
                playerTurn={playerTurn} 
                onClick={() => onTileClick(8)} 
                value={tiles[8]} 
                className={""}
            />
            <Strike/>
        </div>
    )
}

export default Board;