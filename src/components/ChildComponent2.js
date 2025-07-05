import React from "react";

function ChildComponent2({setSelectedOption}) {
    function handleClick()
    {
        setSelectedOption("Option 2")
    }
  return (
    <div className="child-2">
      <h2>ChildComponent2</h2>
      <button onClick={handleClick}>Option 2</button>
    </div>
  );
}

export default ChildComponent2;
