import { ReactElement } from 'react';
import { Todo } from '../Interfaces';
import TodoItem from './TodoItem';
import '../css/TodoList.css'

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoList({ todos, onToggleComplete, onDelete }: TodoListProps): ReactElement
 {
  return (
    <div className='list'>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggleComplete={onToggleComplete} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
