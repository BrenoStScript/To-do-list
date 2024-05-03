import React, { useEffect, useState } from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";
import "./TodoWrapper.css";

function TodoWrapper() {
  let keyList = JSON.parse(localStorage.getItem("keyList")) ||[];

  const [count, setCount] = useState(keyList.length);

  function incrementList() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrementList() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="wrapper">
      <TodoForm incrementList={incrementList} />

      <h1 className="counter">Você tem {count} tarefas</h1>
      <div className="container">
        {keyList.map((element) => {
          let entry = JSON.parse(localStorage.getItem(JSON.stringify(element)));
          return (
            <div className="keyWrapper" key={element}>
              <Todos
                title={entry.title}
                description={entry.description}
                todo={element}
                decrementList={decrementList}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoWrapper;
