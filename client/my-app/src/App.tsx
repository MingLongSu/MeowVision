import React from 'react';

import './app.css';

import AppInterface from './components/AppInterface/AppInterface';
import Topbar from './components/Topbar/Topbar';


const App: React.FC = () => {
  return (
    <div className="App">
      <Topbar> </Topbar>
      <AppInterface> </AppInterface>
    </div>
  );
}

export default App;
