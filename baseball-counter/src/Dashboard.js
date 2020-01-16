import React from 'react';

export const Dashboard = props => {
    return (
        <div>
            <button onClick={props.strikeButton}> Strike</button>
            <button onClick={props.ballButton}> Ball</button>
            <button onClick={props.foulButton}> Foul</button>
            <button onClick={props.hitButton}> Hit</button>  
        </div>
    )
}