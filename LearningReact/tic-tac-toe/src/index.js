import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// SQUARE: elemento figlio

// STATE
// this.state fa in modo che Square si ricordi che è stato fatto click
// inserendo constructor(), devo mette anche super() - inizio standard
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  // onClick = {function() {console.log('click'); }} e
  // onClick = {() => console.log('click')}
  // è la stessa cosa. Meglio la arrow function =>
  // risolve problemi con i this.
  // onClick è una props

  // {this.props.value} è il ricevitore. Riceve value, la prop presente in Board (l'elemento padre)

  // sostituendo {this.props.value} in {this.state.value} visualizziamo il valore corrente dello stato quando clicchiamo il bottone
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: "X" });
        }}
      >
        {this.state.value}
      </button>
    );
  }
}

// Board: elemento PADRE

// PROPS
// value è una props. Le prop permettono il passaggio di informazioni fra componenti padre e figlio
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
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
