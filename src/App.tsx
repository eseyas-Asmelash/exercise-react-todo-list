import  { ReactElement, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import About from './components/About';
import { Todo } from './Interfaces';
import './css/App.css'

function App(): ReactElement {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [sortCriteria, setSortCriteria] = useState<'timestamp' | 'author'>('timestamp');
  const location = useLocation();
  const pathsToShow = ['/'];

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

  const editTodo = (id: number, author: string, text: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, author, text } : todo
    ));
  };

  const handleSortChange = (criteria: 'timestamp' | 'author') => {
    setSortCriteria(criteria);
  };

  const sortedTodos = [...todos].sort((a, b) => {
    if (sortCriteria === 'timestamp') {
      return b.timestamp.getTime() - a.timestamp.getTime();
    } else {
      return a.author.localeCompare(b.author);
    }
  });


  return (
    
    <div>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/add">Add Todo</Link>
        <Link to="/about">About</Link>
      </nav>
      {pathsToShow.includes(location.pathname) && (
      <div className='sort' >
{/*         <label>Sort by: </label> */}
        <select value={sortCriteria} onChange={(e) => handleSortChange(e.target.value as 'timestamp' | 'author')}>
          <option value="timestamp">Timestamp</option>
          <option value="author">Author</option>
        </select>
      </div>
      )}
      <Routes>
        <Route path="/" element={<TodoList todos={sortedTodos} onToggleComplete={toggleComplete} onDelete={deleteTodo} onEdit={editTodo} />} />
        <Route path="/add" element={<AddTodo onAddTodo={addTodo} />} />
        <Route path="/about" element={<About todoUncompleted={todos.filter(todo => todo.completed).length} todoCount={todos.length} />} />
      </Routes>
    </div>
  );
};



export default App;
