import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  render(){
      return (
        <div className="App">
          <h1>Project TVMV</h1>
        </div>
      );
   }
}

export default App;
