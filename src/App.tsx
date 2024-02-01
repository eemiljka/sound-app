import {useState} from 'react';
import Home from './components/Home';

const App = () => {
  const [text, setText] = useState('kukkuu');
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
          setText('moi');
        }}
      >
        {text} Counter: {counter}
      </h2>
      <h1>My app</h1>
      <Home />
    </>
  );
};

export default App;
