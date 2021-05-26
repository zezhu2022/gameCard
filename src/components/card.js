import {React} from 'react';

function Card(character) {
    console.log("this is character image", character.character.img)
    const cardStyle = {
        padding: 8,
        margin: 16,
        width: 200,
        height: 300,
        borderStyle: 'solid'  
    }
    const rareName = {
        color: 'yellow',
        padding: 0,
        margin: 0
    }
    const imgStyle = {
        overflow: 'hidden',
        width: 200,
        height: 200
    }
    const commonName = {
        padding: 0,
        margin: 0
    }

        return(
            <>
                <div style={cardStyle}>
                    <p style={character.character.rarity === 'rare'? rareName: commonName}> {character.character.rarity === 'rare'?'⭐':'✰' }</p>
                    <img style={imgStyle} src={character.character.img}/>
                    <p style={character.character.rarity === 'rare'? rareName: commonName}> {character.character.name}</p>
                </div>
            </>
        )
}


export default Card