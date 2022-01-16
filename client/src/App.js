import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import { ProfileProvider } from './Context.Provider'
import Errore from './Pages/Error'
import Login from './Pages/Login'
import Logout from './Pages/Logout'
import Profile from './Pages/Profile'
import Registration from './Pages/Registration'

function App() {
  return (
    <ProfileProvider>
    <Switch>
      <Route exact path = "/" >
          <NavBar path = "/"/>
          <Registration/>
      </Route>
      <Route exact path = "/login" >
          <NavBar path = "/login"/>
          <Login/>
      </Route>
      <Route exact path = "/logout" >
          <Logout/>
      </Route>
      <Route exact path = "/profile" >
          <NavBar path = "/profile"/>
          <Profile/>
      </Route>
      <Route>
        <Errore/>
      </Route>
    </Switch>
    </ProfileProvider>
  )
}

export default App
