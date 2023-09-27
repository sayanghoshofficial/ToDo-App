import React from 'react'
import { useValue } from '../context/context';

const TodoForm = () => {
    const{todoText,setTodoText,addTodo}= useValue();
  return (
    <div className="todo-form">
                <input
                    type="text"
                    placeholder="Add a new todo"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') addTodo();
                    }}
                />
                <button onClick={addTodo}>Add</button>
            </div>
  )
}

export default TodoForm
