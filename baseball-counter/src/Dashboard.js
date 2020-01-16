import React from 'react';

export const Dashboard = props => {
    return (
        <div>
            <button data-testid="strike-btn" onClick={props.strikeButton}> Strike</button>
            <button data-testid="ball-btn" onClick={props.ballButton}> Ball</button>
            <button data-testid="foul-btn" onClick={props.foulButton}> Foul</button>
            <button data-testid="hit-btn" onClick={props.hitButton}> Hit</button>  
        </div>
    )
}