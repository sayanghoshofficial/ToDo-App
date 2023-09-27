import React from 'react'
import { useValue } from '../context/context'

const TodoItemManager = () => {
    const { todos, setAllToCompleted, deleteAllTodos } = useValue();
    return (
        <div className='todo-item-manager'>
            <div>Total Item: {todos.length}</div>
            <div onClick={() => setAllToCompleted()}>Completed all</div>
            <div onClick={() => deleteAllTodos()}>Clear all</div>
        </div>
    )
}

export default TodoItemManager
