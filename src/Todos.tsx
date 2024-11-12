import { motion } from "framer-motion";
import { useState, ChangeEvent, useEffect } from "react";

function Todos() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState<string[]>(
    ((todos) => {
      try {
        const serializedTodos = localStorage.getItem(todos);
        if (serializedTodos === null) {
          return [];
        }
        return JSON.parse(serializedTodos);
      } catch (err) {
        return [];
      }
    })("todos")
  );

  const addTodo = (): void => {
    setTodos(todos.concat(currentTodo));
    setCurrentTodo("");
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setCurrentTodo(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, type: "spring", bounce: 0.25 }}
      className="h-screen flex flex-col py-4 gap-6 items-center bg-base-200"
    >
      <div className="flex flex-col items-center gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={currentTodo}
          onChange={handleChange}
        />
        <button className="btn btn-outline btn-wide" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul>
        {todos.length >= 1 ? (
          todos.map((todo: string) => {
            return <li key={todo}>- {todo}</li>;
          })
        ) : (
          <p>No Todos.</p>
        )}
      </ul>
    </motion.div>
  );
}

export default Todos;
