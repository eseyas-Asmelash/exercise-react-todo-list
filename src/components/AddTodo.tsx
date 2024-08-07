import  { ReactElement, useState } from 'react';
import '../css/AddTodo.css'

interface AddTodoProps {
  onAddTodo: (author: string, text: string) => void;
}
function AddTodo({ onAddTodo }: AddTodoProps): ReactElement {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo(author, text);
    setAuthor('');
    setText('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="What needs to be done?" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        required 
      />
      <div className='btn'>
       <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default AddTodo;
