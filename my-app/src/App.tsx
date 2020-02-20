import React from 'react';
import logo from './logo.svg';
import './App.css';
import DogDetails from './components/DogDetails/DogDetails';
import CreateBeerForm from './components/CreateBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/CreateBeerFormikForm/CreateBeerFormikForm';

const App = () => {
  const handleClick = () => {
    alert('you clicked');
  }

  const onBark = () => {
    alert('Woof! Woof!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Button 1</button>
      </header>
      <DogDetails handleClick={onBark} />
      <CreateBeerForm />
      <CreateBeerFormikForm />
    </div>
  );
}

export default App;
