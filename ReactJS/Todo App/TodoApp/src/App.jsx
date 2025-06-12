import { useState, useEffect } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([{text:"Eat Dinner", completed:false},{text:"Clean the Car", completed:true}]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Load todos from localStorage when app starts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddOrUpdate = () => {
    if (todo.trim() === "") return;

    if (editingIndex !== null) {
      // Edit mode
      const updatedTodos = [...todos];
      updatedTodos[editingIndex].text = todo;
      setTodos(updatedTodos);
      setEditingIndex(null);
    } else {
      // Add mode
      setTodos([...todos, { text: todo, completed: false }]);
    }
    setTodo("");
  };

  const handleRemove = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
    if (editingIndex === indexToRemove) {
      setTodo("");
      setEditingIndex(null);
    }
  };

  const handleEdit = (index) => {
    setTodo(todos[index].text);
    setEditingIndex(index);
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center border-4 m-4">
      <div className="bg-white border border-gray-400 w-[500px] h-auto p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-1 border border-gray-400 p-2 rounded-md text-lg"
          />
          <button
            onClick={handleAddOrUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            {editingIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        {todos.length > 0 && (
          <p className="text-gray-600 mb-2">
            Number of todos: {todos.length}
          </p>
        )}

        <ul className="space-y-3">
          {todos.map((todoItem, index) => (
            <li
              key={index}
              className="flex justify-between items-center border border-gray-300 p-3 rounded-md"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todoItem.completed}
                  onChange={() => toggleComplete(index)}
                />
                <span
                  className={`text-lg ${
                    todoItem.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todoItem.text}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-600 font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(index)}
                  className="text-red-500 font-bold"
                >
                  x
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
