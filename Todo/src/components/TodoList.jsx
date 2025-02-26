import TodoItem from "./TodoItem";

const TodoList = ({ todos, dispatch }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
        </ul>
    );
};

export default TodoList;
