import React from "react";
import Button from './Button';
import TestCallBack from './TestCallBack'

const TestEvents = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleClick = () => {
     alert("Form Submitted");
  };

  const handleButtonClick = () => {
    alert('CallBack Button clicked!');
  };

  return (
    <>
      <h3>Event Handlers</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name"/> <br/>
        <input type="password" placeholder="Password"/><br/>
        <button type="submit" onClick={handleClick}>Submit</button> <br/><br/>

        <Button label="Common Button" onClick={handleClick} />
      </form>

      <TestCallBack onClick={handleButtonClick} />
    </>
  );
};

export default TestEvents;
