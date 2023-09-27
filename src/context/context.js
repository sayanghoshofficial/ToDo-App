import { createContext, useContext } from "react";
import { useState, useEffect } from "react";


export const itemContext = createContext();

function useValue() {
    const value = useContext(itemContext);
    return value;
}



function CustomItemProvider({ children }) {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Function to add a new todo
    const addTodo = () => {
        if (todoText.trim() !== '') {
            setTodos([...todos, { text: todoText, completed: false }]);
            setTodoText('');
        }
    };

    // Function to toggle the completion status of a todo
    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    // Function to remove a todo
    const removeTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };




    return (
        <itemContext.Provider value={{ addTodo, toggleTodo, removeTodo, todos, setTodos, todoText, setTodoText }}>
            {children}
        </itemContext.Provider>
    )
}

export default CustomItemProvider;
export { useValue };