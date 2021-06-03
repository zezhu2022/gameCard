import {React, useState} from 'react';
import Card from './card.js'
import '../CardCollection.css'
function CardCollection(props) {
    const cards = Array(100).fill()
    const numCards = props.numCards
    const cardsCollection = {
        flex: 1,
      }


    return(
        <div className={'CardCollection'}>
        {cards.map((card, index) => {
            if (numCards > index){
                return(
                <Card />
            )}
            else{
                return null
            }
        })}
        </div>
    )
}

export default CardCollection