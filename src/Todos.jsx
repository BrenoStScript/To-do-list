import React from "react";
import "./Todos.css";
import trashBin from "./assets/trashcan.png";

function Todos(props) {
  let keyTitle = props.todo;

  function deleteTodo() {
    let keyList = JSON.parse(localStorage.getItem("keyList"));
    let newList = keyList.filter((keyList) => keyList !== keyTitle);
    localStorage.setItem("keyList", JSON.stringify(newList));
    localStorage.removeItem(JSON.stringify(keyTitle));
    props.decrementList();
  }

  return (
    <div id={props.todo} className="todo">
      <h1>{props.title}</h1>
      <h2>{props.description} </h2>
      <img className="trash" src={trashBin} onClick={deleteTodo}></img>
    </div>
  );
}

export default Todos;
