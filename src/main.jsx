import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CatalogoApp } from './CatalogoApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CatalogoApp />
    </BrowserRouter>
  </React.StrictMode>,
)
