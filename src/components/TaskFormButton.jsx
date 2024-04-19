function TaskFormButton( { title, clickHandler, cssClass } ) {
  return (
    <button className={ cssClass } onClick={ clickHandler }>{ title }</button>
  );
}

export default TaskFormButton;
