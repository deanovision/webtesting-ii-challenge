import React from "react";
import "./App.css";
import Display from "./Display";
import Dashboard from "./Dashboard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0,
      fouls: 0,
      hits: 0
    };
  }
  strikes = () => {
    const { strikes } = this.state;
    if (strikes === 2) {
      this.setState({
        ...this.state,
        balls: 0,
        strikes: 0,
        fouls: 0,
        hits: 0
      });
    } else {
      this.setState(prevState => {
        return {
          ...this.state,
          strikes: prevState.strikes + 1
        };
      });
    }
  };
  fouls = () => {
    const { strikes } = this.state;
    if (strikes < 2) {
      this.setState(prevState => {
        return {
          ...this.state,
          strikes: prevState.strikes + 1
        };
      });
    }
  };
  balls = () => {
    const { balls } = this.state;
    if (balls === 3) {
      this.setState({
        ...this.state,
        balls: 0,
        strikes: 0,
        fouls: 0,
        hits: 0
      });
    } else {
      this.setState(prevState => {
        return {
          ...this.state,
          balls: prevState.balls + 1
        };
      });
    }
  };
  hits = () => {
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0,
      hits: 0
    });
  };
  render() {
    return (
      <div className="App">
        <Display info={this.state} />
        <Dashboard
          strikes={this.strikes}
          fouls={this.fouls}
          balls={this.balls}
          hits={this.hits}
        />
      </div>
    );
  }
}

export default App;
