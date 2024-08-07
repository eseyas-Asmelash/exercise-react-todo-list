import { ReactElement, useState } from 'react';
import { Todo } from '../Interfaces';
import EditTodo from './EditTodo';
import '../css/TodoItem.css'

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, author: string, text: string) => void;
}

function TodoItem({ todo, onToggleComplete, onDelete, onEdit} : TodoItemProps): ReactElement {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <EditTodo 
          todo={todo} 
          onSave={(id, author, text) => {
            onEdit(id, author, text);
            setIsEditing(false);
          }} 
          onCancel={() => setIsEditing(false)} 
        />
      ) : (
      <div className='item'>
        <h3 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</h3>
        <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>Author: {todo.author}</p>
        <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>Created at: {todo.timestamp.toLocaleString()}</p>
        <div className='btns'>
          <button className='button' onClick={() => onToggleComplete(todo.id)}>
            {todo.completed ? 'Unmark' : 'Mark as Completed'}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      </div>
      )}
    </div>
  );
};

export default TodoItem;
