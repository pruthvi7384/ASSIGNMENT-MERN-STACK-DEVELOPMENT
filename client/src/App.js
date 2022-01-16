import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Errore from './Pages/Error'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Registration from './Pages/Registration'

function App() {
  return (
    <Switch>
      <Route exact path = "/" >
          <NavBar path = "/"/>
          <Registration/>
      </Route>
      <Route exact path = "/login" >
          <NavBar path = "/login"/>
          <Login/>
      </Route>
      <Route exact path = "/profile" >
          <NavBar path = "/profile"/>
          <Profile/>
      </Route>
      <Route>
        <Errore/>
      </Route>
    </Switch>
  )
}

export default App
