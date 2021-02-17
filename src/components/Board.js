import React, { useState } from 'react'
import { Square } from './Square';

export const Board = () => {

    // ------------------------------------------------------------------------------------------------------------------------

    // Tabla de array con 9 cuadros vacios
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));

    // State para determinar el siguiente turno el cual su valor inicial es true "X"
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (index) => {

        // Se hace una copia del tablero para poder modificarlo al hacer click y que cambie su valor, ya sea "X" u "O"
        const squares = [...boardSquares];

        // Condicional para determinar si el cuadro tiene un valor que retorne el mismo contenido
        if (calculateWinner(boardSquares) || squares[index]) return;

        // agregar "X" y "O"
        squares[index] = xIsNext ? 'X' : 'O';

        // Calcular el siguiente turno
        // colocar el estado del board
        setBoardSquares(squares);

        // colocar el estado del turno
        setXIsNext(!xIsNext);

    };

    // ------------------------------------------------------------------------------------------------------------------------

    const reset = () => {

        setBoardSquares(Array(9).fill(null));

    };

    // Funcion para calcular al ganador
    const calculateWinner = (squares) => {

        // Array para determinar los posibles casos del ganador
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // Se genera un loop junto con un condicinal para determinar la posicion del jugador y asi verificar al ganador
        for (let i = 0; i < winningLines.length; i++) {

            const [a, b, c] = winningLines[i];

            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }

        };

        return null;

    };

    let player;
    const winner = calculateWinner(boardSquares);

    player = winner ? `Winner is: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    // ------------------------------------------------------------------------------------------------------------------------

    return (

        <>

            <h2 className="animate__animated animate__bounceIn">{player}</h2>

            <button className="animate__animated animate__bounceIn" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '15px' }} onClick={reset}>Reset</button>

            <div>

                <Square
                    boardSquares={boardSquares}
                    handleClick={handleClick}
                />

            </div>

        </>

    )
};
