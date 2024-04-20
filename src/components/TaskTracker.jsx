import { useCallback, useEffect, useMemo, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import EmptyState from './EmptyList';
import { nanoid } from 'nanoid';

const TaskTracker = () => {
  //#region Component Scope
  const defaultTasks = [
    { id: nanoid(), text: 'Do a thing' },
    { id: nanoid(), text: 'Do another thing' },
  ];
  const [newTask, setNewTask] = useState( '' );
  const [tasks, setTasks] = useState( () => {
    const storedTasks = localStorage.getItem( 'tasks' );

    return storedTasks
      ? JSON.parse( storedTasks )
      : defaultTasks;
  } );

  useEffect( () => {
    try {
      localStorage.setItem( 'tasks', JSON.stringify( tasks ) );
    } catch ( error ) {
      console.error( 'Failed to save tasks to LocalStorage:', error );
    }
  }, [tasks] );

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

  function deleteTask( index ) {
    const updatedTasks = tasks.filter( task => task.id !== index );

    setTasks( updatedTasks );
  }

  function moveTaskUp( id ) {
    let item_index = -1;

    // Could do Array.findIndex, Array.find, or Array.indexOf but a for loop is more performant.
    for ( let i = 0; i < tasks.length; i++ ) {
      if ( tasks[i].id === id ) {
        item_index = i;

        break;
      }
    }

    // Bail if already top item or ID doesn't exist in tasks for some reason.
    if ( ( item_index === -1 ) || ( item_index === 0 ) ) return;

    const updatedTasks = [...tasks];

    // Swap position of this item and item above it in the list.
    [updatedTasks[item_index], updatedTasks[item_index - 1]] = [updatedTasks[item_index - 1], updatedTasks[item_index]];
    setTasks( updatedTasks );
  }

  function moveTaskDown( id ) {
    let item_index = -1;

    // Could do Array.findIndex, Array.find, or Array.indexOf but a for loop is more performant.
    for ( let i = 0; i < tasks.length; i++ ) {
      if ( tasks[i].id === id ) {
        item_index = i;

        break;
      }
    }

    // Bail if already bottom item or ID doesn't exist in tasks for some reason.
    if ( ( item_index === -1 ) || ( item_index === ( tasks.length - 1 ) ) ) return;

    const updatedTasks = [...tasks];
    // Swap position of this item and item below it in the list.
    [updatedTasks[item_index], updatedTasks[item_index + 1]] = [updatedTasks[item_index + 1], updatedTasks[item_index]];
    setTasks( updatedTasks );
  }
  //#endregion

  return (
    <>
      <TaskForm newTask={ newTask } onChange={ handleInputChange } onKeyUp={ handleInputEnter } addTask={ addTask } clearTasks={ clearTasks } />

      {
        tasks.length
          ? <TaskList tasks={ tasks } handleDelete={ deleteTask } handleMoveUp={ moveTaskUp } handleMoveDown={ moveTaskDown } />
          : <EmptyState />
      }
    </>
  );
}

export default TaskTracker;
