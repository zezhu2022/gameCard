import firestore from 'firebase';
import {React, useEffect, useState} from 'react';




function Card() {

    // Taken from the Fisher-Yates (Knuth) Shuffle
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    function getImage() {
        console.log("wihtin getImage")
        db.collection('cards').get()
        .then(querySnapshot => {
            console.log("before shuffle", querySnapshot.size)
            const index = getRandomInt(querySnapshot.size)
            setCurrCard(querySnapshot.docs[index].data())
            // setCurrCard(querySnapshot[0].data())
        })}
    

    useEffect(()=>{
        getImage()
    }, [])

    const db = firestore.firestore()
    const [currCard, setCurrCard] = useState()
    
    
    const rareCardStyle = {
        padding: 8,
        margin: 16,
        width: 200,
        height: 300,
        borderStyle: 'solid',
        borderColor: 'yellow',
        backgroundColor: '#282c34'  
    }
    const commonCardStyle = {
        padding: 8,
        margin: 16,
        width: 210,
        height: 300,
        borderStyle: 'solid',
        borderColor: 'grey',
        backgroundColor: '#282c34',
        color: 'white'  
    }
    const rareName = {
        color: 'yellow',
        padding: 0,
        margin: 0
    }
    const imgStyle = {
        overflow: 'hidden',
        width: 200,
        height: 200,
        borderStyle: 'solid',
        borderColor: 'black'
    }
    const commonName = {
        padding: 0,
        margin: 0
    }

    if (currCard === undefined){
        return(
            <p></p>
        )        
    }
    else{
        return(
            <>
                <div style={currCard.rarity === 'rare'? rareCardStyle: commonCardStyle}>
                    <p style={currCard.rarity === 'rare'? rareName: commonName}> 
                        {currCard.rarity === 'rare'?  `${currCard.name} `: `${currCard.name} ` }
                    </p>
                    <img style={imgStyle} src={currCard.img}/>
                    <p style={currCard.rarity === 'rare'? rareName: commonName}> 
                        {currCard.game}
                     </p>
                </div>
            </>
        )
    }
}


export default Card