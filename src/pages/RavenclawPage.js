import { useState, useEffect } from "react"
import { CharacterCard } from "../components/CharacterCard"

export const RavenclawPage = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://hp-api.onrender.com/api/characters/house/ravenclaw')
        .then(response => response.json())
        .then(jsonResponse => {
            setCharacters([...characters, ...jsonResponse])
        })
    }, [])

    return (
        <main className="ravenclaw-main">
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