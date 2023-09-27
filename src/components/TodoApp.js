import React from 'react';
import { useValue } from '../context/context';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function TodoApp() {

    const { todos } = useValue();



    return (
        <div className="todo-app">
            <h1>Todo App</h1>
            <TodoForm />
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index} />
                ))}
            </div>
        </div>
    );
}

export default TodoApp;
