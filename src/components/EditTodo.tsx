import { ReactElement, useState } from 'react';
import { Todo } from '../Interfaces';
import '../css/EditTodo.css'

interface TodoEditProps {
  todo: Todo;
  onSave: (id: number, author: string, text: string) => void;
  onCancel: () => void;
}
function EditTodo({todo, onSave, onCancel}: TodoEditProps): ReactElement {
  const [author, setAuthor] = useState(todo.author);
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    onSave(todo.id, author, text);
  };

  return (
    <div className='form'>
      <input 
        type="text" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
      />
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <div className='btn'>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditTodo;
