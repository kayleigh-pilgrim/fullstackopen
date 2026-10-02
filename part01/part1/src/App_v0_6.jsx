import { useState } from 'react';

const App = () => {
  // State should only ever be updated through its setter function, setting the state to a new object rather than mutating the existing state directly.
  /*
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  */
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });

  /*
  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
      // right: clicks.right
    };
    setClicks(newClicks);
  };
  */
  const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 });

  /*
  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      // left: clicks.left,
      right: clicks.right + 1
    };
    setClicks(newClicks);
  };
  */
  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 });

  return (
    <div>
      {/*
      {left}
      <button onClick={() => setLeft(left + 1)}>left</button>
      <button onClick={() => setRight(right + 1)}>right</button>
      {right}
      */}
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App
