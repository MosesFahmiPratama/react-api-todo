import React,{ useState } from "react"
import TodoList from "./TodoList"
import TodoCreate from "./TodoCreate"

const Todo = () => {
  const [getTodos,setTodos] = useState([
      {id:1,nama:"moses"}
    ])
    
  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo))
  }
  
  const deleteTodo = (todoId) => {
    const newTodo = getTodos.filter(Todos => Todos.id !== todoId);
    setTodos(newTodo);
  }
  
  return (
    <>
      <h2>Todo List</h2>
      <TodoCreate onCreateTodo={eventCreateTodo}/>
      <TodoList dataTodos={getTodos} deleteTodo={deleteTodo}/>
    </>
    )
}

export default Todo;