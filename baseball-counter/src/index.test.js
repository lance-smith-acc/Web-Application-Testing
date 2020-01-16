import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Dashboard} from './Dashboard';
import {Display} from './Display'

test('strike counter increments by 1 until reaching 2 or greater, then resets to 0', () =>{
    let strikes = 0;
    let strikeButton = e => {
        e = strikes;
        if(e < 2){
            strikes + 1;
        }
        else{
            strikes = 0;
        }
        return strikes;
    }
    
    const {getByText} = render(<Dashboard strikeButton={strikeButton(strikes)}/>)
    const {getByTestId} = render(<Display strikes={strikes}/>)


    const strikeButtonTest = getByText("Strike");
    const strikeContent = getByTestId("strikes").textContent;


    expect(strikeContent).toBe(`Strikes: ${strikes}`)
        fireEvent.click(strikeButtonTest)
        expect(strikeContent).toBe(`Strikes: ${strikes}`)
}
)
