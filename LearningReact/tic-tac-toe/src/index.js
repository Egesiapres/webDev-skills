import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// here we make the button working. When there is a click, it happens something
class Square extends React.Component {
  // i make the app remember using state
  constructor(props) {
    // if there is the state, there is also the constructor
    super(props); // it's the kind of start that a react class with a constructor has
    this.state = {
      // states allow the app to remember
      value: null,
    };
  }

  render() {
    return (
      // here we make the button working. When there is a click, it happens something
      <button
        className="square"
        //
        onClick={() => {
          this.setState({ value: "X" });
        }}
      >
        {this.state.value}
      </button> // this.props.value is like a receiver. It receives the value from the p
    );
  }
}

// Board is square's parent element
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />; // the prop is passed from the p to the c
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
