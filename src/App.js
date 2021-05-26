import './App.css';
import cards from './config/data.json'
import CardCollection from './components/cardCollection'
import { useState } from 'react';
import './CardCollection.css'


function App() {
  const [numCards, setNumCards] = useState(0);

  function updateCount(){
    setNumCards(numCards + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> Card Collection game</h1>
        <button onClick={updateCount}> get a new card!</button>
        <CardCollection cards={cards} numCards={numCards}/>
      </header>
    </div>
  );
}

export default App;
