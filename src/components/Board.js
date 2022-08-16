import React  from "react";
import Square from "./Square";
import { useState } from "react";


function Board() {
    const [square, setSquare] = useState(Array(9).fill(null));
    const [x, setX] = useState(true);
    const winner = winnerFunction(square);
    let status;
    if (winner) {
        status = 'Winner is : ' + winner;
    } else {
        status = 'Player turn  :' + (x ? 'X' : 'O');
    }

    const renderSquare = (i) => {
        return (
          
            <Square value={square[i]} onClick={()=>handleClick(i)} />
        )
    }
    const handleClick = (i) => {
          
    
        const squares = square.slice();
        if (squares[i] === null) {
            squares[i] = x ? 'X' : 'O';
            setSquare(squares);
            setX(!x);
            console.log(squares);
        } else {
            alert('can`t do that');
        }
    }
    function winnerFunction(squares) {
        const lines =
            [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
        
        for (let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return null;
     }



    return (
        <div >
            <div className="Board-row">
            {renderSquare(0)}
            {renderSquare(1)}
             {renderSquare(2)}
            </div>
            <div className="Board-row">
            {renderSquare(3)}
            {renderSquare(4)}
             {renderSquare(5)}
            </div>
            <div className="Board-row">

            {renderSquare(6)}
            {renderSquare(7)}
             {renderSquare(8)}
            </div>
            <div className="winner">
                {status}
                </div>
        </div>
    );
}
export default Board; 