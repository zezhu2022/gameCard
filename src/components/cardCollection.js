import {React, useState} from 'react';
import Card from './card.js'
import '../CardCollection.css'
function CardCollection(props) {
    return(
        <div className={'CardCollection'}>
        {props.cards.map((card, index) => {
            return(
                <Card cIndex={card} key={card}/>
            )
        })}
        </div>
    )
}

export default CardCollection