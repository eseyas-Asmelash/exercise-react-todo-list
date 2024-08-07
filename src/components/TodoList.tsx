import { ReactElement } from 'react';
import { Todo } from '../Interfaces';
import TodoItem from './TodoItem';
import '../css/TodoList.css'

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, author: string, text: string) => void;
}

function TodoList({ todos, onToggleComplete, onDelete, onEdit }: TodoListProps): ReactElement
 {
  return (
      <div className='list'>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onToggleComplete={onToggleComplete} 
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
  );
};

export default TodoList;
