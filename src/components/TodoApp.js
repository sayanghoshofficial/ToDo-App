import React from 'react';
import { useValue } from '../context/context';

function TodoApp() {

    const { addTodo, toggleTodo, removeTodo, todos, todoText, setTodoText } = useValue();



    return (
        <div className="todo-app">
            <h1>Todo App</h1>
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
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <div key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <span onClick={() => toggleTodo(index)}>{todo.text}</span>
                        <button onClick={() => removeTodo(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoApp;
