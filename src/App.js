import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterTow from './components/CounterTow';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterTow />
      <Users />
    </div>
  );
}

export default App;
