import React from 'react'

function ChildComponent1({setSelectedOption}) {

    function handleClick()
    {
        setSelectedOption("Option 1")
    }
  return (
    <div className='child-1'>
        <h2>ChildComponent1</h2>
        <button onClick={handleClick}>Option 1</button>
    </div>
    
  )
}

export default ChildComponent1