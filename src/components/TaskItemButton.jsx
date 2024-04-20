const TaskItemButton = ( { children, title, id, type, clickHandler } ) => {

  return (
    <button
      className={ "task__action task__action--" + type.toLowerCase() }
      onClick={ () => clickHandler( id ) }
      title={ title } >
      <div className="task__action__icon">
        { children }
      </div>
    </button>
  );
}

export default TaskItemButton;
