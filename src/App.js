import React from 'react';
import Drawing from './components/Drawing';
import Controls from './components/Controls';
import { SettingsContextProvider } from "./reducer";

import './App.css';

const App = () => {
  return (
    <SettingsContextProvider>
      <div style={{ display: 'flex', height: '100vh'}}>
        <div style={{ padding: '32px', flex: '75%' }}>
          <Drawing />
        </div>
        <div style={{ padding: '32px', flex: '25%', background: '#eee', boxShadow: '-5px 0px 36px -18px rgba(0,0,0,0.75)' }}>
          <Controls />
        </div>
      </div>
    </SettingsContextProvider>
  );
}

export default App;
