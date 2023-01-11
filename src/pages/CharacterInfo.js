import { useLocation } from 'react-router-dom';

export const CharacterInfo = () => {

    const location = useLocation()
    const character = location.state.character

    return (
        <main className="character-info">
            <div className="img-container">
                <img src={ character.image } alt={ character.name + ' image' } />
            </div>
            <div className="info-container">
                <h2>{ character.name }</h2>
                <div className="info">
                    <p>House: { character.house }</p>
                    <p>Birthday: { character.dateOfBirth }</p>
                    <p>Gender: { character.gender }</p>
                    <p>Specie: { character.species }</p>
                    <p>Ancestry: { character.ancestry }</p>
                </div>
            </div>
        </main>
    )
}