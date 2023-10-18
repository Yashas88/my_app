import React, { useRef } from 'react';

function InputFocus() {
    const inputRef = useRef<HTMLInputElement | null>(null);
  
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
  
    return ( 
      <div>
        <h1>UseRef Example</h1>
        <input ref={inputRef} type="text" placeholder="Type something" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  }
  
  export default InputFocus;
  