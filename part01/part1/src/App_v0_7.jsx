import { useState } from 'react';

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    // The piece of state stored in allClicks is now set to be an array that contains
    // all of the items of the previous state array plus the letter L.
    // Adding the new item to the array is accomplished with the concat method,
    // which does not mutate the existing array but rather returns
    // a new copy of the array with the item added to it.
    setAllClicks(allClicks.concat('L'));
    //setLeft(left + 1);
    // This doesn't work because the state updates are asynchronous:
    //setTotal(left + right);
    // This does work:
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
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>Total: {total}</p>
    </div>
  )
}

export default App
