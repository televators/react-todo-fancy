function debounce( func, duration = 250 ) {
  let timeout;

  return function ( ...args ) {
    const effect = () => {
      timeout = null;

      return func.apply( this, args );
    }

    clearTimeout( timeout );
    timeout = setTimeout( effect, duration );
  }
}

export default debounce;
