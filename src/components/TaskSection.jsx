import { nanoid } from "nanoid";

function TaskSection( { tasks, handleDelete, handleMoveUp, handleMoveDown } ) {
  return (
    <section className='tasks'>
      <ol className='task-list'>
        { tasks.map( ( task, index ) => {
          return (
            <li className="task" key={ nanoid() }>
              <div className="task__inner">
                <h3 className="task__title">{ task }</h3>

                <div className="task__actions">
                  <button className="task__action task__action--delete" onClick={ () => handleDelete( index ) } title='Delete task'>
                    <div className="task__action__icon">
                      <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill='#fff'>
                        <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
                      </svg>
                    </div>
                  </button>
                  <button className="task__action task__action--up" onClick={ () => handleMoveUp( index ) } title='Move task up'>
                    <div className="task__action__icon">
                      <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill='#fff'>
                        <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/>
                      </svg>
                    </div>
                  </button>
                  <button className="task__action task__action--down" onClick={ () => handleMoveDown( index ) } title='Move task down'>
                    <div className="task__action__icon">
                      <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill='#fff'>
                        <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </li>
          );
        } ) }
      </ol>
    </section>
  );
}

export default TaskSection;
