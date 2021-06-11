import {React, useEffect, useState, useCallback} from 'react';
import Card from './card.js'
import firestore from 'firebase';
import '../CardCollection.css'
import '../CardPack.css'


function CardPack(props) {

    // Taken from the Fisher-Yates (Knuth) Shuffle
    const db = firestore.firestore()
    const [currCount, setCurrCount] = useState(0)
    const [pickedCard, setPickedCard] = useState(false)
    const [currCard, setCurrCard] = useState();
    const [showCards, setShowCards] = useState(true)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const handleCardAddition = useCallback(event => {
        props.addCard([...props.prevCards, event.target.id])
        setPickedCard(true)
        setCurrCard(event.target.id)
        props.showCards(false)
        
        
    })
    useEffect(()=>{
        db.collection('cards').get()
        .then(querySnapshot => {
            setCurrCount(querySnapshot.size)
        })
    }, [])
    
    let cards = Array(0).fill()
    
    if (props.newCards) {
        cards = Array(3).fill()
    }
    if (props.newCards && showCards){
        // if (!pickedCard){
        return(
            <div>
                <div className={'CardPack'}>
                {cards.map((_, index) => {
                    if (currCount == 0) {
                        return null
                    }
                    else{
                        let cardI = getRandomInt(currCount)
                        return (
                            <div id={cardI} className={"cardCandidate"}>
                                <Card cIndex={cardI} key={cardI}/>
                                <button onClick={handleCardAddition} id={cardI}> pick this one!</button>
                            </div>
                        )}})}
                </div>
                
            </div>
        )
        // }
        // else{
        //     return(
        //     <div id={currCard} className={"cardCandidate"}>
        //         <Card cIndex={currCard} key={currCard}/>
        //         <p> You chose this card!</p>
        //         <button> Close </button>
        //     </div>
        //     )
        // }
    }
    else {
        return null
    }
}

export default CardPack