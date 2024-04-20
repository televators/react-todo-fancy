import { useEffect, useState } from 'react';
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
  //#endregion

  return (
    <>
      <TaskForm tasks={ tasks } setTasks={ setTasks } />

      {
        tasks.length
          ? <TaskList tasks={ tasks } setTasks={ setTasks } />
          : <EmptyState />
      }
    </>
  );
}

export default TaskTracker;
