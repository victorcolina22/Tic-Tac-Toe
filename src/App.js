import React from 'react';
import { Board } from './components/Board';
import './index.css';

export const App = () => {

    return (

        <>
            <div className="container">

                <h1 className="animate__animated animate__bounceIn">Tic Tac Toe React.js</h1>

                <Board />

            </div>

        </>

    )
}
