import { useState } from 'react';

const App = () => {
  // const { counter } = props;
  const [counter, setCounter] = useState(0);
  
  // When the state modifying function is called, React will re-render the component with the updated state.
  //setTimeout(() => setCounter(counter + 1), 1000);

  // You can debug the re-rendering by adding console.log statements here
  //console.log('Rendering with counter:', counter);

  /*
  const handleClick = () => {
    console.log('clicked');
    setCounter(counter + 1);
  }
  */
  
  const increaseByOne = () => setCounter(counter + 1);

  const setToZero = () => setCounter(0);
  
  return (
    <div>
      <div>{counter}</div>
      {/* <button onClick={handleClick}>plus</button> */}
      {/* <button onClick={() => setCounter(counter + 1)}> */}
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

export default App
