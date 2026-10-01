import ReactDOM from 'react-dom/client'

import App from './App'

/*
let counter = 1;

const root = ReactDOM.createRoot(document.getElementById('root'));

const refresh = () => {
  root.render(<App counter={counter} />);
};

refresh();
// This is the only way to rerender the component with the updated counter value, without refresh(), the counter won't change in the UI
counter++;
refresh();
counter++;
refresh();
// It goes so fast that you cant see it, this way you do:
setInterval(() => {
  counter++;
  refresh();
}, 1000);
*/

// Luckily we don't need to do it this way, thanks to state
ReactDOM.createRoot(document.getElementById('root')).render(<App />);