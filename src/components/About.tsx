import { ReactElement } from 'react';
import '../css/About.css'


interface AboutProps {
  todoCount: number;
  todoUncompleted: number;
}

function About({ todoCount, todoUncompleted}: AboutProps): ReactElement {
  return (
    <div className='info'>
      <h1>About</h1>
      <p>This is a simple todo list application.</p>
      <p>Currently, you have { todoCount } todos on the list. { todoUncompleted} marked as completed.</p>
    </div>
  );
};

export default About;
