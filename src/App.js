import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './containers/Home'
import Create from './containers/Create'
import NotFound from './containers/NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <Link to='/'>首页</Link>
          <Link to='/create'>创建</Link>
          <Link to='/edit/123'>编辑</Link>
        </ul>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/create" exact component={Create}/>
          <Route path="/edit/:id" exact component={Create}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
