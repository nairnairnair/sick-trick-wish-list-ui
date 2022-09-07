import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      tricks: [],
      stance: [],
      name: [],
      obstacle: [],
      tutorial: [],
      id: []
    }
  }

  mapTricks = () => {
    const mappedTricks = this.state.tricks.map((trick) => {
      return (
      <div className="trickCard" id={trick.id} key={trick.id}>
      Stance: {trick.stance},
      Name: {trick.name},
      Obstacle: {trick.obstacle},
      Tutorial: {trick.tutorial},
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

  handleChangeStance = (event) => {
    this.setState({stance: event.target.value})
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  handleChangeObstacle = (event) => {
    this.setState({obstacle: event.target.value})
  }

  handleChangeTutorial = (event) => {
    this.setState({tutorial: event.target.value})
  }

  handleClick = () => {
    fetch('http://localhost:3001/api/v1/tricks', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify( {stance: this.state.stance, name: this.state.name, obstacle: this.state.obstacle, tutorial: this.state.tutorial})
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <form>
          <select className="stanceInput" onChange={this.handleChangeStance}>
            <option value="" disabled hidden>Choose your Stance</option>
            <option value="Regular">Regular</option>
            <option value="Switch">Switch</option>
          </select>
          <input className="nameInput" onChange={this.handleChangeName} placeholder="Name of Trick"></input>
          <select className="obstacleInput" onChange={this.handleChangeObstacle}>
            <option value="" disabled hidden>Choose your Obstacle</option>
            <option value="Flatground">Flatground</option>
            <option value="Ledge">Ledge</option>
            <option value="Rail">Rail</option>
            <option value="Stands">Stands</option>
            <option value="Pool">Pool</option>
          </select>
          <input className="tutorialInput" onChange={this.handleChangeTutorial} placeholder="Link to Tutorial"></input>
          <button className="sendIt" onClick={this.handleClick}>Send it!</button>
        </form>
        <div>{this.mapTricks()}</div>
      </div>
    );
  }
}

export default App;

