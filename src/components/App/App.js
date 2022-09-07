import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      tricks: [],
      // stance: [],
      // name: [],
      // obstacle: [],
      // tutorial: [],
      // id: []
    }
  }

  mapTricks = () => {
    const mappedTricks = this.state.tricks.map((trick) => {
      return (
      <div className="trickCard">
      stance={trick.stance},
      name={trick.name},
      obstacle={trick.obstacle},
      tutorial={trick.tutorial},
      id={trick.id},
      key={trick.id}
      </div>)
    })
    console.log('mt', mappedTricks)
    return mappedTricks
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(response => this.setState({
        tricks: response,
      }))
      .catch(error => console.log(error))
      this.mapTricks()
  }



  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <p>{this.mapTricks()}</p>
      </div>
    );
  }
}

export default App;

