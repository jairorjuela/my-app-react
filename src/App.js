import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import './App.css';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const NoMatch = () => <h1>Página no Encontrada</h1>;
const Message = (props) => <h1> Mesage {props.params.id} </h1>;

const Template = (props) => {
  return (
    <div>
      <h1> Mi superi aplicacion </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">Ir al About</Link></li>
      </ul>
      {props.children}
    </div>
  )
};

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Template} >
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
        </Route>
        <Route path="messages/:id" component={Message} />
        <Route path="*" component={NoMatch} />
      </Router>
    );
  }



}

export default App;
