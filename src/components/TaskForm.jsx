import { useState } from "react";
import { nanoid } from "nanoid";
import TaskFormButton from "./TaskFormButton";

function TaskForm( { tasks, setTasks } ) {
  const [newTask, setNewTask] = useState( '' );

  function handleInputChange( event ) {
    const { value } = event.target;

    setNewTask( value );
  }

  function handleInputEnter( e ) {
    if ( e.keyCode == '13' || e.key == 'Enter' ) {
      addTask();
    }
  }

  function addTask() {
    if ( newTask.trim() === '' ) return;

    const newTaskObject = {
      id: nanoid(),
      text: newTask.trim()
    };

    setTasks( [...tasks, newTaskObject] );
    setNewTask( '' );
  }

  function clearTasks() {
    setTasks( [] );
    setNewTask('');
  }

  return (
    <section className='task-form'>
      <input type="text" placeholder='Add task' value={ newTask } onChange={ handleInputChange } onKeyUp={ handleInputEnter } />
      <TaskFormButton title={ 'Add' } cssClass={ 'add-button' } clickHandler={ addTask } />
      <TaskFormButton title={ 'Reset' } cssClass={ 'reset-button' } clickHandler={ clearTasks } />
    </section>
  );
}

export default TaskForm;
