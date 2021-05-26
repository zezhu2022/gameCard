import {React, useState} from 'react';
import Card from './card.js'
import '../CardCollection.css'
function CardCollection(props) {
    const cards = props.cards
    const numCards = props.numCards
    const cardsCollection = {
        flex: 1,
        // flex-direction: 'row'
      }


    return(
        <div className={'CardCollection'}>
        {cards.map((card, index) => {
            if (numCards > index){
                return(
                <Card character={card}/>
            )}
            else{
                return null
            }
        })}
        </div>
    )
}

export default CardCollection