import { useEffect, useMemo, useReducer, useState } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { todoReducer } from "./reducer";

const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos) {
            dispatch({ type: "SET", payload: storedTodos });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const filteredTodos = useMemo(() => ({
        incomplete: todos.filter(todo => !todo.completed),
        completed: todos.filter(todo => todo.completed),
    }), [todos]);

    return (
        <div id="root">
            <div className={`app ${darkMode ? "dark" : "light"}`}>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
                <h1>Todo List</h1>
                <TodoForm dispatch={dispatch} />
                <h2>Incomplete Tasks</h2>
                <TodoList todos={filteredTodos.incomplete} dispatch={dispatch} />
                <h2>Completed Tasks</h2>
                <TodoList todos={filteredTodos.completed} dispatch={dispatch} />
            </div>
        </div>
    );
};

export default App;