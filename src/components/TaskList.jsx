import { useCallback, useEffect, useMemo, useState } from 'react';
import TaskForm from './TaskForm';
import TaskSection from './TaskSection';
import EmptyState from './EmptyList';
import debounce from 'lodash.debounce';

function TaskList() {
  //#region Component Scope
  const [tasks, setTasks] = useState( () => {
    const storedTasks = localStorage.getItem( 'tasks' );
    return storedTasks
      ? JSON.parse( storedTasks )
      : ['Do a thing','Do a different thing'];
  } );
  const [newTask, setNewTask] = useState( '' );

  const debouncedSetNewTask = useCallback( debounce( ( value ) => {
    setNewTask( value );
    console.log( 'setNewTask happened:', value );
  }, 300 ), [] );

  useEffect( () => {
    return () => debouncedSetNewTask.cancel();
  }, [debouncedSetNewTask] );

  useEffect( () => {
    try {
      localStorage.setItem( 'tasks', JSON.stringify( tasks ) );
    } catch ( error ) {
      console.error( 'Failed to save tasks to LocalStorage:', error );
    }
  }, [tasks] );

  function handleInputChange( event ) {
    const { value } = event.target;
    console.log('Inside handleInputChange...');
    setNewTask( value );
    debouncedSetNewTask( value );
  }

  function handleInputEnter( e ) {
    if ( e.keyCode == '13' || e.key == 'Enter' ) {
      addTask();
    }
  }

  function addTask() {
    if ( newTask.trim() === '' ) return;

    setTasks( [...tasks, newTask] );
    setNewTask( '' );
  }

  function clearTasks() {
    setTasks( [] );
    setNewTask('');
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
