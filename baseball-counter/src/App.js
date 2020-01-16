import React, {useState, useEffect} from 'react';
import {Display} from './Display'
import {Dashboard} from './Dashboard'
import './App.css';

function App() {
  let [balls, setBalls] = useState(0);
  let [strikes, setStrikes] = useState(0);

  function ballButton(){
    if(balls < 3){
      setBalls(balls + 1);
    }
    else{
      setBalls(0);
    }
  }

  function strikeButton(){
    if(strikes < 2){
      setStrikes(strikes + 1);
    }
    else{
      setStrikes(0);
    }
  }

  function foulButton(){
    if(strikes === 0 || strikes === 1){
      setStrikes(strikes + 1);
    }
  }

  function hitButton(){
    setStrikes(0);
    setBalls(0);
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard ballButton={ballButton} strikeButton={strikeButton} foulButton={foulButton} hitButton={hitButton}/>
    </div>
  );
}

export default App;
