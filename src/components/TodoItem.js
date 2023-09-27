import React from 'react'
import { useValue } from '../context/context';
import { AiFillDelete } from 'react-icons/ai';

const TodoItem = ({ todo, index }) => {
    const { toggleTodo, removeTodo } = useValue();
    
    return (
        <div key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button onClick={() => removeTodo(index)}>
            <AiFillDelete style={{color:"red"}} size={30} />
            </button>
        </div>
    )
}

export default TodoItem;
