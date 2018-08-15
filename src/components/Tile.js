import React from "react";
import style from "./Tile.css";

export const Tile = props => {
  return <div className = {
      style.Tile
    } >
    <
    input
  className = {
    style.Input
  }
  value = {
    props.content
  }
  onChange = {
    (event) => props.onChange(props.id, event.target.value)
  }
  type = "number"
  min = '1'
  max = '9'
  name = "name" / >
    <
    /div>;
};