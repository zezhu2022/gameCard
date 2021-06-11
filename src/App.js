import './App.css';
import firestore from './firestore'
import cards from './config/data.json'
import CardCollection from './components/cardCollection'
import CardPack from './components/cardPack'
import { useState } from 'react';
import './CardCollection.css'
import './Buttons.css'


function App() {
  const [numCards, setNumCards] = useState(0);
  const [pack, setPack] = useState(false);
  const [currCards, setCurrCards] = useState([]);
  const [accountCards, setAccountCards] = useState(false);
  const db = firestore.firestore();

  function createCard() {
    cards.map(card =>{
      db.collection('cards').add({
        name: card.name,
        game: card.game,
        rarity: card.rarity,
        img: card.img,
      })
    })
  }

  function newPack() {
    setPack(true)
  }
  if (!accountCards){
    return (
      <div className="App">
        <header className="App-header">
          <h1> Card Collection Game</h1>
          <div className="Buttons">
            <button className="button" onClick={() => setAccountCards(!accountCards)}>Your Collection</button>
            <button className="button" onClick={createCard}> CREATE CARDS (POPULATE)</button>
            <button className="button" onClick={newPack}> drop some cards!</button>
          </div>
          <CardPack newCards={pack} prevCards={currCards} addCard={setCurrCards} showCards={setPack}/>
        </header>
      </div>
  );
  }
  else{
    return(
      <div className="App">
        <header className="App-header">
          <h1> YOUR CARDS </h1>
          <button onClick={() => setAccountCards(!accountCards)}>Go back to collect Cards</button>
          <CardCollection cards={currCards}/>
        </header>
      </div>
    )
  }
}

export default App;
