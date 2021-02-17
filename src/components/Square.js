import React from 'react'

export const Square = ({ boardSquares, handleClick }) => {

    return (

        <div className="animate__animated animate__bounceIn" style={{marginLeft:'19px', marginTop:'10px'}}>
            {
                boardSquares.map(( square, index ) => (

                    <button key={ index } onClick={ () => handleClick( index ) } className="square">{square}</button>

                ))
            }
        </div>

    )
};
