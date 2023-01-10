import { useState, useEffect } from "react"
import { CharacterCard } from "../components/CharacterCard"

export const SlytherinPage = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://hp-api.onrender.com/api/characters/house/slytherin')
        .then(response => response.json())
        .then(jsonResponse => {
            setCharacters([...characters, ...jsonResponse])
        })
    }, [])

    return (
        <main className="slytherin-main">
            {
                characters.map(character => {
                    if (character.image !== '') {
                        return <CharacterCard key={ character.id } character={ character } />
                    } 
                })
            }
        </main>
    )
}