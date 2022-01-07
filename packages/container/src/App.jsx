import React, { Fragment } from 'react'
import { MarketApp, TheHeader } from './components'
import { BrowserRouter } from 'react-router-dom'
export function App() {
  return (
    <BrowserRouter>
      <div>
        <TheHeader />
        <MarketApp />
      </div>
    </BrowserRouter>
  )
}
