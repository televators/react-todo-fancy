import TaskListItem from "./TaskListItem";

const TaskList = ( { tasks, handleDelete, handleMoveUp, handleMoveDown } ) => {
  return (
    <section className='tasks'>
      <ol className='task-list'>
        { tasks.map( ( task ) => {
          return <TaskListItem key={ task.id } task={ task } handleDelete={ handleDelete } handleMoveUp={ handleMoveUp } handleMoveDown={ handleMoveDown } />;
        } ) }
      </ol>
    </section>
  );
}

export default TaskList;
