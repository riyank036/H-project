//Hook
import React from "react";
import { useState } from "react";

export default function App() {

  // state
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  );
}


// components
function CustomButton(props) {

  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return React.createElement(
    'button', 
    { onClick: onClickHandler },
    `Counter ${props.count}`
  );
}
