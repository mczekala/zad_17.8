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
    console.log(board[arg]);
    board[arg] = value;
    console.log(board[arg]);
    this.setState({
      sudoku: {
        board
      }
    });
  }
  render() {
    return ( <
      div >
      <
      h1 > Sudoku < /h1>



      <
      Board sudoku = {
        this.state.sudoku
      }
      onChange = {
        this.onChange
      }
      />



      <
      div className = "buttons" >

      <
      button > Check < /button> <button onClick={this.onNewGame}> New Game </button >
      <
      button > Solve < /button> <button> Restart </button >
      <
      /div> < /
      div >
    );
  }
}

export default App;