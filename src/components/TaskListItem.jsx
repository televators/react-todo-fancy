import TaskItemButton from "./TaskItemButton";

const TaskListItem = ( { task: { id, text }, handleDelete, handleMoveUp, handleMoveDown } ) => {
  return (
    <li className="task">
      <div className="task__inner">
        <h3 className="task__title">{ text }</h3>

        <div className="task__actions">
          <TaskItemButton title={ "Delete task" } id={ id } type={ "delete" } clickHandler={ handleDelete }>
            <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill='#fff'>
              <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
            </svg>
          </TaskItemButton>

          <TaskItemButton title={ "Move task up" } id={ id } type={ "up" } clickHandler={ handleMoveUp }>
            <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill='#fff'>
              <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/>
            </svg>
          </TaskItemButton>

          <TaskItemButton title={ "Move task down" } id={ id } type={ "down" } clickHandler={ handleMoveDown }>
            <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill='#fff'>
              <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
            </svg>
          </TaskItemButton>
        </div>
      </div>
    </li>
  );
}

export default TaskListItem;
