import { useEffect, useState } from 'react';
import debounce from './debounce.js';
import TaskForm from './TaskForm';
import TaskSection from './TaskSection';
import EmptyState from './EmptyList';

function TaskList() {
  //#region Component Scope
  const [tasks, setTasks] = useState( () => {
    const storedTasks = localStorage.getItem( 'tasks' );
    return storedTasks
      ? JSON.parse( storedTasks )
      : ['Do a thing','Do a different thing'];
  } );
  const [newTask, setNewTask] = useState( '' );

  useEffect( () => {
    try {
      localStorage.setItem( 'tasks', JSON.stringify( tasks ) );
      console.log( JSON.parse( localStorage.getItem( 'tasks' ) ) );
    } catch ( error ) {
      console.error( 'Failed to save tasks to LocalStorage:', error );
    }
  }, [tasks] );

  const handleInputChange = debounce( ( event ) => {
    setNewTask( event.target.value );
  }, 300 );

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
