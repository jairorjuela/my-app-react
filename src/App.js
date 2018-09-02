import React, { Component } from 'react';
import Welcome from './Welcome';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "Hola mundo desde estado"
    }
  }
  render() {
    // const names = ["Jairo", "Andres", "Orjuela", "Hower"];
    return (
      // <div>
      // {names.map(name =>
      //   <Welcome name= {name}/>
      // )}
      // </div>
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle.bind(this)}>Cambia el titulo</button>
      </div>
    );
  }

  changeTitle(){
    this.setState({
      title: "Nuevo titulo"
    });
  }
}

export default App;
