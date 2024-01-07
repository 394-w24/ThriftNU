import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDbData } from './firebase';
import ItemList from './Components/ItemList';

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ItemList
        items={useDbData()}
      />
    </div>
  );
};

export default App;
