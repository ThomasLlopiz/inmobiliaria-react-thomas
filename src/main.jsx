import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NavBar } from './components/NavBar'
import { Sliders } from './components/Sliders'
import { sliders } from './assets/data/data.json'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <NavBar></NavBar>
      <Sliders data={sliders}></Sliders>
      <Sliders data={sliders}></Sliders>
    </>

  </React.StrictMode>
)
