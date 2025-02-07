import React from 'react';
import './App.css';
import Hooks from './Hooks.tsx';
import UseState from './UseState.tsx';
import UseEffect from './UseEffect.tsx';
import UseReducer from './UseReducer.tsx';
import UseRef from './UseRef.tsx';
import UseCallback from './UseCallback.tsx';
import UseMemohooks from './UseMemohooks.tsx';
import Example from './Example.tsx';
import Toastmess from './Toastmess.tsx';

function App() {
  return (
    <div className="App">
      {/* <Hooks/>
      <UseState/>
      <UseEffect/>
      <UseReducer/>
      <UseRef/>
      <UseCallback/>
      <UseMemohooks/>
      <Example/> */}
      <Toastmess/>

    </div>
  );
}

export default App;
