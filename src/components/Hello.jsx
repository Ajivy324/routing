import React from 'react'
import { useParams } from 'react-router-dom'


const Hello = () => {

    const {word, col, bg} = useParams()

    return (
    <div>{
        isNaN(word)?
        <h1 style={col?{color: col, backgroundColor: bg}: null}>Say What? {word}</h1>:<h1>Your Number {word}</h1>
        }   
    </div>
    )
}

export default Hello