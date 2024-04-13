function TaskForm( { newTask, onChange, onKeyUp, addTask } ) {
  return (
    <section className='task-form'>
      <input type="text" placeholder='Add task' value={ newTask } onChange={ onChange } onKeyUp={ onKeyUp } />
      <button className='add-button' onClick={ addTask }>Add</button>
    </section>
  );
}

export default TaskForm;
