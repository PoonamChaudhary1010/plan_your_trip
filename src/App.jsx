import { useState } from 'react'
import React from 'react'
import data from './data'
import Tours from'./assets/Tours'

import './App.css'

function App() {

  const [tours, setTours]=useState(data)

  function removeTour(id){
    const newTours = tours.filter(tour=> tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h1 className='title'>Plan Your Trip</h1>
        <h2 className='heading'>No Tours Left</h2>
        <button className='btn-white' onClick={()=> setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className='app'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
