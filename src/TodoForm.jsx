import React from "react";
import { useState } from "react";
import "./TodoForm.css";
import addBtn from "./assets/plus.png";

function TodoForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  function onSubmit() {
    let randKey = crypto.randomUUID();

    let keyList = JSON.parse(localStorage.getItem("keyList"))||[];
    keyList.push(randKey);
    localStorage.setItem("keyList", JSON.stringify(keyList));
    props.incrementList();

    let entry = { title, description };

    localStorage.setItem(JSON.stringify(randKey), JSON.stringify(entry));
  }

  return (
    <>
      <form>
        <label>
          Título:
          <input
            type="text"
            name="title"
            maxLength={25}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Descrição:
          <input
            type="text"
            name="description"
            maxLength={80}
            value={description}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <button type="submit">
          <img className="add" src={addBtn} onClick={onSubmit}></img>
        </button>
      </form>
    </>
  );
}

export default TodoForm;
