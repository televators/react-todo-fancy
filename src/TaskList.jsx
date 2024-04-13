import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskSection from './TaskSection';
import EmptyState from './EmptyList';

function TaskList() {
  //#region Component Scope
  const [tasks, setTasks] = useState( [
    'Clean laptop fans',
    'Call my cat handsome',
    'Change guitar strings',
    '???',
    'Profit!!!'
  ] );
  const [newTask, setNewTask] = useState( '' );

  function handleInputChange( event ) {
    setNewTask( event.target.value );
  }

  function handleInputEnter( e ) {
    if ( e.keyCode == '13' || e.key == 'Enter' ) {
      addTask();
    }
  }

  function addTask() {
    if ( newTask.trim() === '' ) return;

    setTasks( prevTasks => [...prevTasks, newTask] );
    setNewTask( '' );
  }

  function clearTasks() {
    setTasks( [] );
    setNewTask( '' );
  }

  function deleteTask( index ) {
    console.log(index);
    const updatedTasks = tasks.filter( ( _, i ) => i !== index );
    setTasks( updatedTasks );
  }

  function moveTaskUp( index ) {
    if ( index === 0 ) return;

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
    setTasks( updatedTasks );
  }

  function moveTaskDown( index ) {
    if ( index === ( tasks.length - 1 ) ) return;

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
    setTasks( updatedTasks );
  }
  //#endregion

  return (
    <>
      <TaskForm newTask={ newTask } onChange={ handleInputChange } onKeyUp={ handleInputEnter } addTask={ addTask } clearTasks={ clearTasks } />

      {
        tasks.length
          ? <TaskSection tasks={ tasks } handleDelete={ deleteTask } handleMoveUp={ moveTaskUp } handleMoveDown={ moveTaskDown } />
          : <EmptyState />
      }
    </>
  );
}

export default TaskList;
