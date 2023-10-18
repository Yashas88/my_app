import React from 'react';

interface TestPropsProps {
  text: string;
}

const TestProps: React.FC<TestPropsProps> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default TestProps;
