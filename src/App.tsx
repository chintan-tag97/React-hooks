import React from 'react';
import './App.css';
import Hooks from './Hooks.tsx';
import UseState from './UseState.tsx';
import UseEffect from './UseEffect.tsx';
import UseReducer from './UseReducer.tsx';
import UseRef from './UseRef.tsx';
import UseCallback from './UseCallback.tsx';

function App() {
  return (
    <div className="App">
      <Hooks/>
      <UseState/>
      <UseEffect/>
      <UseReducer/>
      <UseRef/>
      <UseCallback/>
    </div>
  );
}

export default App;
