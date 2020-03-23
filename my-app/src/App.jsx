import React from 'react';
import './App.css';
import Webpage from './Components/index.jsx'

// This page can be used to make API calls to then cascade down to children
class App extends React.Component {
  render() {
    return (
      <div className="App">
      	<Webpage />
      </div>
    )
  }
}
export default App;
