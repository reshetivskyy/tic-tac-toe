import { useState } from "react";

let blocks = Array(9).fill(null);
const PLAYER_X = "X";
const PLAYER_O = "O";

const TicTacToe = () => {
    const [player, setPlayer] = useState(PLAYER_X);
    const [line, setLine] = useState("");

    const checkTiles = (index) => {
        if (blocks[index] !== null) return;
        const newArray = [...blocks];
        newArray[index] = player;
        blocks = newArray;
        if (player === PLAYER_X) {
            setPlayer(PLAYER_O);
        } else {
            setPlayer(PLAYER_X);
        }
    };
    const checkWinner = (index) => {
        if (
            blocks[0] === blocks[3] &&
            blocks[3] === blocks[6] &&
            blocks[6] !== null
        ) {
            setLine("left");
        } else if (
            blocks[1] === blocks[4] &&
            blocks[4] === blocks[7] &&
            blocks[7] !== null
        ) {
            setLine("center-v");
        } else if (
            blocks[2] === blocks[5] &&
            blocks[5] === blocks[8] &&
            blocks[8] !== null
        ) {
            setLine("right");
        } else if (
            blocks[0] === blocks[1] &&
            blocks[1] === blocks[2] &&
            blocks[2] !== null
        ) {
            setLine("top");
        } else if (
            blocks[3] === blocks[4] &&
            blocks[4] === blocks[5] &&
            blocks[5] !== null
        ) {
            setLine("center-h");
        } else if (
            blocks[6] === blocks[7] &&
            blocks[7] === blocks[8] &&
            blocks[8] !== null
        ) {
            setLine("bottom");
        } else if (
            blocks[0] === blocks[4] &&
            blocks[4] === blocks[8] &&
            blocks[8] !== null
        ) {
            setLine("l-diag");
        } else if (
            blocks[2] === blocks[4] &&
            blocks[4] === blocks[6] &&
            blocks[6] !== null
        ) {
            setLine("r-diag");
        }
    };
    const reset = () => {
        setLine("");
        blocks = Array(9).fill(null);
    };

    return (
        <>
            <h1 className="title">Tic Tac Toe</h1>
            <div className="board">
                {blocks.map((item, index) => {
                    return (
                        <div
                            className="tile"
                            key={index}
                            onClick={() => {
                                checkTiles(index);
                                checkWinner(index);
                            }}
                        >
                            {item}
                        </div>
                    );
                })}
                {line && <span className={`line ${line}`} />}
                {line && (
                    <div className="reset">
                        <p className="reset-text">
                            PLAYER {player} WINS
                            <br />
                            <br />
                            <a href="#!" className="reset-btn" onClick={reset}>
                                RESET
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default TicTacToe;
