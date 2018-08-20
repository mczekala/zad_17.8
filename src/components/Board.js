import React, { Component } from "react";
import sudoku from "sudoku-umd";
import { Tile } from "./Tile";
import style from "./Board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.generate = this.generate.bind(this);
  }
  generate() {
    let id = 0;
    return sudoku.board_string_to_grid(this.props.sudoku).map(line => (
      <div key={id + 200} className={style.Line} >
        {
          line.map(tile => (
            <Tile key={id + 100} id={id++} content={tile} className={style.Tile} onChange={this.props.onChange} />
          ))
        }
      </div>
    ));
  }
  render() {
    return this.generate();
  }
}
export default Board;