import { useRef, useState } from "react";

const TodoForm = ({ dispatch }) => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef();

    const handleAddTodo = () => {
        if (!inputValue) return;
        const newTodo = { id: Date.now(), text: inputValue, completed: false };
        dispatch({ type: "ADD", payload: newTodo });
        setInputValue("");
        inputRef.current.focus();
    };

    return (
        <div className="todo-form">
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a task..."
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default TodoForm;
