import  { ReactElement, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import About from './components/About';
import { Todo } from './Interfaces';
import './css/App.css'

function App(): ReactElement {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (author: string, text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      author,
      text,
      completed: false,
      timestamp: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/add">Add Todo</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoList todos={todos} onToggleComplete={toggleComplete} onDelete={deleteTodo} />} />
        <Route path="/add" element={<AddTodo onAddTodo={addTodo} />} />
        <Route path="/about" element={<About todoUncompleted={todos.filter(todo => todo.completed).length} todoCount={todos.length} />} />
      </Routes>
    </div>
  );
};

export default App;
