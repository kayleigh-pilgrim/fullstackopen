import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(10);

  // Another way to define an event handler is to use a function that returns a function.
  // The event handler is now set to a function call.
  // Earlier, we stated that an event handler may not be a function call; rather,
  // it has to either be a function definition or a reference to one.
  // Why then does a function call work in this case?
  // The return value of the function is another function that is assigned to the handler variable.
  // It assigns the return value of hello() to the onClick attribute. Essentially the line gets transformed into:
  // <button onClick={() => console.log('hello world')}>button</button>
  /*
  const hello = () => {
    const handler = () => console.log('hello world');
    return handler;
  }
  */
  // Functions returning functions can be utilized in defining generic functionality that can be customized with parameters.
  // The hello function that creates the event handlers can be thought of as a factory
  // that produces customized event handlers meant for greeting users.
  /*
  const hello = (who) => {
    const handler = () => console.log(`hello ${who}`);
    return handler;
  }
  */
  // It can be made less verbose:
  /*
  const hello = (who) => {
    return () => {
      console.log(`hello ${who}`);
    }
  }
  */
  // And less verbose:
  /*
  const hello = (who) => () => {
    console.log(`hello ${who}`);
  }
  */
  // We can use the same trick to define event handlers that set the state of the component to a given value.
  const setToValue = (newValue) => () => {
    console.log(`setting value to ${newValue}`);
    setValue(newValue);
  }

  return (
    <div>
      {value}
      {/* <button onClick={hello()}>button</button> */}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
      {/* You don't need to use functions that return functions if you don't want to; you can directly define the event handler inline. */}
      <button onClick={() => setValue(value - 1)}>decrement</button>
      {/* Choosing between using a function that returns a function and defining the event handler inline is mostly a matter of preference and readability (taste). */}
    </div>
  )
}

export default App
