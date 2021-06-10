import React from 'react';
import './App.css';
import { MapView } from './components/Map/MapView';
import { ResidenceForm } from './components/ResidenceForm/ResidenceForm';

import { TopBar } from './components/TopBar/TopBar';

class App extends React.Component {
    
  render(){
    return (
      <div className="App">    
          <TopBar></TopBar>    
          <MapView></MapView>    
      </div>
    );
  }
}

export default App;
