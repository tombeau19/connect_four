import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Characters from './components/Characters'
import GameBoard from './components/GameBoard'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={GameBoard}/>
            {/* <Route path="/game" component={GameBoard}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
