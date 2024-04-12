import { useState } from 'react';

function TaskList() {
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

  return (
    <>
      <section className='task-form'>
        <input type="text" placeholder='Add task' value={ newTask } onChange={ handleInputChange } onKeyUp={handleInputEnter} />
        <button className='add-button' onClick={ addTask }>Add</button>
      </section>

      <section className='tasks'>
        <ol className='task-list'>
          { tasks.map( ( task, index ) => {
            return <li className="task" key={ index }>
              <div className="task__inner">
                <h3 className="task__title">{ task }</h3>

                <div className="task__actions">
                  <button className="task__action task__action--delete" onClick={ () => deleteTask( index ) } title='Delete task'>
                    <div className="task__action__icon">
                      <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill='#fff'>
                        <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
                      </svg>
                    </div>
                  </button>
                  <button className="task__action task__action--up" onClick={ () => moveTaskUp( index ) } title='Move task up'>
                    <div className="task__action__icon">
                      <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill='#fff'>
                        <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/>
                      </svg>
                    </div>
                  </button>
                  <button className="task__action task__action--down" onClick={ () => moveTaskDown( index ) } title='Move task down'>
                    <div className="task__action__icon">
                      <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill='#fff'>
                        <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </li>
          } ) }
        </ol>
      </section>
    </>
  );
}

export default TaskList;
