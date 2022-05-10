import React from "react";

const TodoList = ({dataTodos,deleteTodo}) => {
  return (
    <>
      <ul className="list">
        {
          dataTodos.map((todo)=>{
            return <li key={todo.id}>{todo.nama} <button onClick={() => deleteTodo(todo.id)}>Delete</button></li>
          })
        }
      </ul>
    </>
    )
}

export default TodoList;