import React from 'react';
import Drawing from './components/Drawing';
import Controls from './components/Controls';
import { SettingsContextProvider } from "./reducer";

import './App.css';

const App = () => {
  return (
    <SettingsContextProvider>
      <div style={{ display: 'flex', height: '100%'}}>
        <div style={{ padding: '32px', flex: '75%' }}>
          <Drawing />
        </div>
        <div style={{ padding: '32px', flex: '25%', background: '#eee' }}>
          <Controls />
        </div>
      </div>
    </SettingsContextProvider>
  );
}

export default App;
