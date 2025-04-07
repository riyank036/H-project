// Import the useState hook from React
import { useState } from "react";

// Define the TodoApp component
export default function TodoApp() {
  // **STATE START**
  // Define the initial state of the todos array using useState
  const [todos, setTodos] = useState([
    {
      title: "Wake up early in the morning",
      description: "Wake up between 6-7am",
      completed: false,
    },
    {
      title: "Exercise",
      description: "Do exercise at least 30 minutes",
      completed: true,
    },
    {
      title: "Learning",
      description: "Learning React",
      completed: false,
    },
    {
      title: "Prepare for interview",
      description: "HTML, CSS, JS questions",
      completed: false,
    },
  ]);
  // **STATE END**

  // Define a function to add a new todo to the state
  function addTodo() {
    // Use the setTodos function to update the state with a new todo
    setTodos([
      ...todos,
      {
        title: "New Todo",
        description: "Description of new todo",
        completed: false,
      },
    ]);
  }

  // **COMPONENT START**
  // Return the JSX for the TodoApp component
  return (
    <div>
      {/* Render a button to add a new todo */}
      <button onClick={addTodo}>Add a random todo</button>
      {/* Map over the todos array and render a Todo component for each one */}
      {todos.map((todo) => (
        <Todo key={todo.title} title={todo.title} description={todo.description} completed={todo.completed} />
      ))}
    </div>
  );
  // **COMPONENT END**
}

// **COMPONENT START**
// Define the Todo component
function Todo(props) {
  // Return the JSX for the Todo component
  return (
    <div>
      {/* Render the title and description of the todo */}
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}
// **COMPONENT END**