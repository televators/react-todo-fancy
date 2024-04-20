import TaskListItem from "./TaskListItem";

const TaskList = ( { tasks, setTasks } ) => {
  function deleteTask( id ) {
    const updatedTasks = tasks.filter( task => task.id !== id );

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

  return (
    <section className='tasks'>
      <ol className='task-list'>
        { tasks.map( ( task ) => {
          return <TaskListItem key={ task.id } task={ task } handleDelete={ deleteTask } handleMoveUp={ moveTaskUp } handleMoveDown={ moveTaskDown } />;
        } ) }
      </ol>
    </section>
  );
}

export default TaskList;
