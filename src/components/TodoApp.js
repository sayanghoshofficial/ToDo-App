import React from 'react';
import { useValue } from '../context/context';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoItemManager from './TodoItemManager';

function TodoApp() {

    const { todos } = useValue();

    // Sort the todos so that completed todos come after active todos
    const sortedTodos = todos.sort((a, b) => {
        if (a.completed && !b.completed) {
            return 1; // a should come after b if a is completed and b is not
        }
        if (!a.completed && b.completed) {
            return -1; // a should come before b if b is completed and a is not
        }
        return 0; // no change in order otherwise
    });

    return (
        <div className="todo-app">
            <h1>Todo App</h1>
            <TodoForm />
            <div className="todo-list">
                {sortedTodos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index} />
                ))}
            </div>
            {todos.length > 0 ? (<TodoItemManager />) : ''}

        </div>
    );
}

export default TodoApp;
