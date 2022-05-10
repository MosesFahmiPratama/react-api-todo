import React, { useState } from "react"

const TodoCreate = (props) => {
  const [getInputTodo, setInputTodo] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodo = {
        id:Math.floor(Math.random() * 100)+1,
        nama:getInputTodo
    }
    props.onCreateTodo(newTodo)
    setInputTodo("")
  }
  
  const handleInputTodo = (event) => {
    setInputTodo(event.target.value)
  }
  return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Input Your Name" value={getInputTodo} onChange={handleInputTodo}/>
        <button>Add</button>
      </form>
    )
}

export default TodoCreate;