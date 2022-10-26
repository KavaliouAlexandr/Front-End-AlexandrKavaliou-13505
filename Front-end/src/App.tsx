import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Profil } from './pages/Profil'
import { AboutPage } from './pages/AboutPage'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { GlobalStyle } from './style/global'

//funkcja musi zwracać jsx
const App: React.FC = () => {
  return (
        <>
        <GlobalStyle />
        <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            {/*Ссылки для страниц инфо и список дел*/}
            <Route component={Home} path="/Home"/>
            <Route component={Profil} path="/Profil"/>
            <Route component={AboutPage} path="/about" />
            <Route component={Login} path="/Login"/>
            
          </Switch>
        </div>
      </BrowserRouter>
      </>
  );
  
  
}

export default App
