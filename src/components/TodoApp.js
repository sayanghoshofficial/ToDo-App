import React from 'react';
import { useValue } from '../context/context';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoItemManager from './TodoItemManager';

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
            {todos.length > 0 ? (<TodoItemManager />) : ''}

        </div>
    );
}

export default TodoApp;
