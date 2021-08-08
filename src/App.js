import React  from 'react';
import './App.css';
import Person from './Components/Person';
import { Component } from 'react';

class App extends React.Component {
  render(){
    return(
      <div>
        <Person/>
      </div>
    )
  }
}
export default App;