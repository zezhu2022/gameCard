import './App.css';
import firestore from './firestore'
import cards from './config/data.json'
import CardCollection from './components/cardCollection'
import { useState } from 'react';
import './CardCollection.css'
import { isCompositeComponent } from 'react-dom/test-utils';


function App() {
  const [numCards, setNumCards] = useState(0);
  const db = firestore.firestore()
  
  function updateCount() {
    console.log("this is updating count")
    setNumCards(numCards + 1)
  }

  function createCard() {
    cards.map(card =>{
      db.collection('cards').add({
        name: card.name,
        game: card.game,
        rarity: card.rarity,
        img: card.img,
      })
    })
    console.log("cards have been created")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> Card Collection Game</h1>
        <button onClick={createCard}> CREATE CARD</button>
        <button onClick={updateCount}> get a new card!</button>
        <CardCollection cards={cards} numCards={numCards}/>
      </header>
    </div>
  );
}

export default App;
