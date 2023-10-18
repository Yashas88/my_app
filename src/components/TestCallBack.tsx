import React, { useState, useCallback } from 'react';

interface MyComponentProps {
  onClick: () => void;
}

const TestCallBack: React.FC<MyComponentProps> = ({ onClick }) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]); 

  return (
    <button onClick={handleClick}>Click Me</button>
  );
};

export default TestCallBack;
