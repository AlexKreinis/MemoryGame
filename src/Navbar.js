import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.state = {
      button: 'Click here to start'
    };
  }
  startGame() {
    this.props.onNewGame();
    this.setState({ button: 'Restart' });
  }
  render() {
    return (
      <header>
        <h2>
          <a>Memory Game</a>
        </h2>
        <nav>
          <li>
            <a onClick={this.startGame}>{this.state.button}</a>
          </li>
        </nav>
      </header>
    );
  }
}
export default Navbar;
