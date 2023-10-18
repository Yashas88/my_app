import React from 'react'

const TestCss1 = () => {

    const inlineStyles = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        marginTop: '20px',
      };
      
  return (
     <>
        <div style={inlineStyles}>This is div element</div>
     </>
  )
}

export default TestCss1