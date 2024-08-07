import { ReactElement } from 'react';
import { Todo } from '../Interfaces';
import '../css/TodoItem.css'

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onToggleComplete, onDelete } : TodoItemProps): ReactElement {
  return (
    <div className='item'>
      <h3 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</h3>
      <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>Author: {todo.author}</p>
      <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>Created at: {todo.timestamp.toLocaleString()}</p>
      <div className='btns'>
        <button className='button' onClick={() => onToggleComplete(todo.id)}>
          {todo.completed ? 'Unmark' : 'Mark as Completed'}
        </button>
        
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
