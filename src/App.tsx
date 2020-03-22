import React, { useContext } from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { FavPage } from './pages/fav';
import { StoreContext } from './store';

function App() {

  const { state } = useContext(StoreContext)
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <h1 className="center">Rick rick this is our app</h1>
        <p className="center">Morty I'm a pickle &nbsp;<img style={{width: "50px", height: "50px"}} src="https://i.pinimg.com/originals/4b/79/79/4b79793d2fc4b9a87cb307681bb2f186.png" alt="pickle" /> and we have {state.favourites.length} favorite episodes</p>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/fav" component={FavPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
