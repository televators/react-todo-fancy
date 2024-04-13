function TaskForm( { newTask, onChange, onKeyUp, addTask, clearTasks } ) {
  return (
    <section className='task-form'>
      <input type="text" placeholder='Add task' value={ newTask } onChange={ onChange } onKeyUp={ onKeyUp } />
      <button className='add-button' onClick={ addTask }>Add</button>
      <button className="reset-button" onClick={ clearTasks }>Reset</button>
    </section>
  );
}

export default TaskForm;
