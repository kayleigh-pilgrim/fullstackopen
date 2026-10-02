// Start here tomorrow: https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#a-function-that-returns-a-function
import { useState } from 'react';

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons.
      </div>
    );
  }

  // debugger; // This will pause execution in Chrome and allow us to inspect the value of allClicks in the browser's developer tools.
  // You can also add breakpoints yourself by going to the sources tab in the Chrome's developer tools.

  return (
    <div>
      Button press history: {allClicks.join(' ')}
    </div>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
// If the component is not working as intended, it's useful to start printing its variables out to the console.
// In order to do this effectively, we must transform our function into the less compact form and receive
// the entire props object without destructuring it immediately.
// This will immediately reveal if, for instance, one of the attributes has been misspelled when using the component.
/*
const Button = (props) => { 
  console.log(props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
*/

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);

  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };
  
  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
      <p>Total: {total}</p>
    </div>
  )
}

export default App
