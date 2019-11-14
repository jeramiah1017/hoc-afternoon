import React, { Component } from 'react'
import './App.css'

import CurrencyHOC from './components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Higher Order Component</h2>
        <CurrencyHOC />
      </div>
    )
  }
}

export default App