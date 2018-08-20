import React from "react";
import Board from "./Board";
import sudoku from "sudoku-umd";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initSudoku: '',
      sudoku: ''
    };
    this.onNewGame = this.onNewGame.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSolve = this.onSolve.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onRestart = this.onRestart.bind(this);
  }
  onNewGame() {
    let value = sudoku.generate("easy");
    this.setState({
      initSudoku: value,
      sudoku: value
    });
  }
  onChange(arg, value) {
    let board = this.state.sudoku;
    board = board.substr(0, arg) + value + board.substr(arg + 1);
    this.setState({
      sudoku: board
    });
  }
  onSolve() {
    this.setState({
      sudoku: sudoku.solve(this.state.initSudoku)
    });
  }
  onCheck() {
    const solution = sudoku.solve(this.state.initSudoku);
    let correct = 0;
    for (let i = 0; i < 81; i++) {
      if (((this.state.sudoku[i] === solution[i]) || (this.state.sudoku[i] === '.'))) {
        correct++;
      }
    }
    if (correct === 81) {
      alert('dobrze');
    }
    else {
      alert('zle');
    }
  }
  onRestart() {
    this.setState({
      sudoku: this.state.initSudoku
    });
  }

  render() {
    return (
      <div>
        <h1> Sudoku </h1>
        <Board sudoku={this.state.sudoku} onChange={this.onChange} />
        <div className="buttons">
          <button onClick={this.onCheck}> Check </button>
          <button onClick={this.onNewGame}> New Game </button >
          <button onClick={this.onSolve}> Solve </button>
          <button onClick={this.onRestart} > Restart </button >
        </div>
      </div >
    );
  }
}
export default App;