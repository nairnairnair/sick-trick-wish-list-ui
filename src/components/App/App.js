import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
    return fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;

//stance
//name
//obstacle
//tutorial
//id