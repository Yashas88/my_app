import React from 'react';
import './App.css';
import TestProps from './components/TestProps'
import Counter from './components/Counter';
import EmployeeData from './components/Data';
import InputFocus from './components/Input';
import TestCss1 from './components/TestCss1';
import TestCss2 from './components/TestCss2';
import TestEvents from './components/TestEvents'

import TestAsyncAwait from './components/TestAsyncAwait'
import TestInterface from './components/TestInterface';

function App() {
  return (
    <div>
      <TestProps text="Hello World!"/>
      <Counter/>
      {/* <EmployeeData/> */}
      <InputFocus/>
      <TestCss1/>
      <TestCss2/>
      <TestEvents/>
      <TestInterface/>
      <TestAsyncAwait/>
    </div>
  );
}

export default App;
