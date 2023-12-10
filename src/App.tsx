import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data/etsy.json'
import Listing from './components/Listing'

function App() {

  console.log(data);
  

  const newdata = data.filter(el => el.state === 'active');
  console.log(newdata);
  return (
    <>
      <Listing array={newdata}/>        
    </>
  )
}

export default App
