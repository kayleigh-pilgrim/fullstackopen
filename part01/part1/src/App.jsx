import { useState } from 'react';

const Display = ({ value }) => <div>{value}</div>

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    console.log(`setting value to ${newValue}`);
    setValue(newValue);
  }

  return (
    <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)()}>thousand</Button>
      <Button onClick={() => setToValue(0)()}>reset</Button>
      <Button onClick={() => setToValue(value + 1)()}>increment</Button>
    </div>
  )
}

export default App
