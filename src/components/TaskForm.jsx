import TaskFormButton from "./TaskFormButton";

function TaskForm( { newTask, onChange, onKeyUp, addTask, clearTasks } ) {
  return (
    <section className='task-form'>
      <input type="text" placeholder='Add task' value={ newTask } onChange={ ( e ) => onChange( e ) } onKeyUp={ onKeyUp } />
      <TaskFormButton title={ 'Add' } cssClass={ 'add-button' } clickHandler={ addTask } />
      <TaskFormButton title={ 'Reset' } cssClass={ 'reset-button' } clickHandler={ clearTasks } />
    </section>
  );
}

export default TaskForm;
