import React, { Component } from 'react';
import Welcome from './Welcome';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   title: "Hola mundo desde estado"
    // }

    this.state = {
      tasks: ["tarea1", "tarea2"]
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
        <h1>Hola Mundo</h1>
        <ul>
          {this.state.tasks.map(task =>
            <li>{task}</li>
          )}
        </ul>

        <button onClick={this.addTask.bind(this)}>Agrega elemento</button>
        <button onClick={this.updateTask.bind(this)}>Modificar Tarea 2</button>

      </div>
    );
  }

  // changeTitle(){
  //   this.setState({
  //     title: "Nuevo titulo"
  //   });
  // }

  addTask(){
    this.setState({
      tasks: this.state.tasks.concat("Nuevo Elemento")
    });
  }

  updateTask(){
    const index = this.state.tasks.findIndex(task =>
      task === "tarea2"
    );

    this.setState({
      tasks: this.state.tasks.map((task, i) =>
        i === index ? "Actualizada la tarea" : task
      )
    });
  }

}

export default App;
