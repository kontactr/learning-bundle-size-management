import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Home , Schedule , Header} from './LoadRoutes'
import Roster from './Roster';


const Main = () => (
  <main>
    <Header />
    Home is loaded by default as start so, it won't fetch again<br /><br />
    Home Starts
    <br/><br/>
    <Home />
    <br /><br />
    Home Ends
    <br />
    <Switch>
      
      <Route exact path='/' component={Home}/>
      <Route path='/schedule' component={Schedule}/>
      <Route exact path='/roster' component={Roster}/>
    </Switch>
  </main>
)

export default Main
