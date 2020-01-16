import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import App from './App';


test('strike counter increments by 1 until reaching 2 or greater, then resets to 0', () =>{

    const app = render(<App />);

    const strikeButton = app.getByTestId("strike-btn");
    const strikeContent = app.getByTestId("strikes");


    expect(strikeContent.textContent).toBe(`Strikes: 0`)
        fireEvent.click(strikeButton)
        expect(strikeContent.textContent).toBe(`Strikes: 1`)
        fireEvent.click(strikeButton)
        expect(strikeContent.textContent).toBe(`Strikes: 2`)
        fireEvent.click(strikeButton)
        expect(strikeContent.textContent).toBe(`Strikes: 0`)
}
)

test('ball counter increments by 1 until reaching 3 or greater, then resets to 0', () =>{

    const app = render(<App />);

    const ballButton = app.getByTestId("ball-btn");
    const ballContent = app.getByTestId("balls");


    expect(ballContent.textContent).toBe(`Balls: 0`)
        fireEvent.click(ballButton)
        expect(ballContent.textContent).toBe(`Balls: 1`)
        fireEvent.click(ballButton)
        expect(ballContent.textContent).toBe(`Balls: 2`)
        fireEvent.click(ballButton)
        expect(ballContent.textContent).toBe(`Balls: 3`)
        fireEvent.click(ballButton)
        expect(ballContent.textContent).toBe(`Balls: 0`)
}
)

test('strike counter increments by 1 until reaching 2', () =>{

    const app = render(<App />);

    const foulButton = app.getByTestId("foul-btn");
    const strikeContent = app.getByTestId("strikes");


    expect(strikeContent.textContent).toBe(`Strikes: 0`)
        fireEvent.click(foulButton)
        expect(strikeContent.textContent).toBe(`Strikes: 1`)
        fireEvent.click(foulButton)
        expect(strikeContent.textContent).toBe(`Strikes: 2`)
        fireEvent.click(foulButton)
        expect(strikeContent.textContent).toBe(`Strikes: 2`)
}
)

test('ball and strike counter reset to 0', () =>{

    const app = render(<App />);

    const hitButton = app.getByTestId("hit-btn");
    const strikeContent = app.getByTestId("strikes");
    const ballContent = app.getByTestId("balls");


    expect(ballContent.textContent).toBe(`Balls: 0`)
    expect(strikeContent.textContent).toBe(`Strikes: 0`)
        fireEvent.click(hitButton)
        expect(ballContent.textContent).toBe(`Balls: 0`)
        expect(strikeContent.textContent).toBe(`Strikes: 0`)
})