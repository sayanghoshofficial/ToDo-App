import React from 'react'
import { useValue } from '../context/context'

const TodoItem = ({ todo, index }) => {
    const { toggleTodo, removeTodo } = useValue();
    return (
        <div key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button onClick={() => removeTodo(index)}>Delete</button>
        </div>
    )
}

export default TodoItem;
