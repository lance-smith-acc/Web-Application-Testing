import React from 'react';

export const Display = props => {
    return (
        <div>
            <h1>Balls: {props.balls}</h1>
            <h1 data-testid="strikes">Strikes: {props.strikes}</h1>
        </div>
    )
}